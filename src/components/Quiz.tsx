"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import type { Card } from "@/data/cards";
import { readProgress, shuffled, writeProgress } from "@/lib/progress";

type Ask = "pl" | "la";
type Question = { card: Card; options: Card[] };

function buildQuestions(cards: Card[], pool: Card[], count: number): Question[] {
  return shuffled(cards)
    .slice(0, count)
    .map((card) => {
      const near = (k: (c: Card) => boolean) => shuffled(pool.filter((c) => c.id !== card.id && k(c)));
      const picked: Card[] = [];
      const seen = new Set([card.polish, card.latin]);
      for (const c of [
        ...near((c) => c.subgroupSlug === card.subgroupSlug),
        ...near((c) => c.groupSlug === card.groupSlug),
        ...near((c) => c.system === card.system),
      ]) {
        if (picked.length >= 3) break;
        if (seen.has(c.polish) || seen.has(c.latin)) continue;
        seen.add(c.polish);
        seen.add(c.latin);
        picked.push(c);
      }
      return { card, options: shuffled([card, ...picked]) };
    });
}

export default function Quiz({ cards, pool, title }: { cards: Card[]; pool: Card[]; title: string }) {
  const [ask, setAsk] = useState<Ask>("pl");
  const [count, setCount] = useState(10);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [i, setI] = useState(0);
  const [chosen, setChosen] = useState<string | null>(null);
  const [wrong, setWrong] = useState<Card[]>([]);
  const [score, setScore] = useState(0);

  const start = (from: Card[] = cards) => {
    setQuestions(buildQuestions(from, pool, count));
    setI(0);
    setChosen(null);
    setWrong([]);
    setScore(0);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => start(), []);

  const q = questions[i];
  const done = questions.length > 0 && i >= questions.length;
  const name = (c: Card) => (ask === "pl" ? c.polish : c.latin);
  const prompt = useMemo(() => (q ? (ask === "pl" ? q.card.latin : q.card.polish) : ""), [q, ask]);

  const answer = (c: Card) => {
    if (!q || chosen) return;
    setChosen(c.id);
    const p = readProgress();
    if (c.id === q.card.id) {
      setScore((s) => s + 1);
    } else {
      setWrong((w) => [...w, q.card]);
      writeProgress({ ...p, [q.card.id]: "unknown" });
    }
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!q) return;
      const n = Number(e.key);
      if (n >= 1 && n <= q.options.length) answer(q.options[n - 1]);
      else if ((e.key === "Enter" || e.key === " ") && chosen) {
        e.preventDefault();
        setI((x) => x + 1);
        setChosen(null);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  const btn = "rounded-lg border px-3 py-1.5 text-sm";
  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-3 mb-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Quiz: {title}</h1>
          <p className="text-sm text-slate-500">{cards.length} struktur w zestawie. Błędne odpowiedzi trafiają do powtórki &quot;Nie umiem&quot;.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <select value={ask} onChange={(e) => setAsk(e.target.value as Ask)} className={`${btn} border-slate-200 bg-white`} aria-label="Rodzaj pytań">
            <option value="pl">Wybierz nazwę polską</option>
            <option value="la">Wybierz nazwę łacińską</option>
          </select>
          <select value={count} onChange={(e) => setCount(Number(e.target.value))} className={`${btn} border-slate-200 bg-white`} aria-label="Liczba pytań">
            {[10, 20, 30].map((n) => (
              <option key={n} value={n}>
                {n} pytań
              </option>
            ))}
            <option value={9999}>Wszystkie</option>
          </select>
          <button onClick={() => start()} className={`${btn} border-blue-700 bg-blue-700 text-white hover:bg-blue-800`}>
            Nowy quiz
          </button>
        </div>
      </div>

      {done ? (
        <div className="mx-auto max-w-2xl rounded-2xl border border-slate-200 bg-white p-6 text-center">
          <p className="text-3xl font-bold">
            {score} / {questions.length}
          </p>
          <p className="text-slate-500">poprawnych odpowiedzi</p>
          {wrong.length > 0 && (
            <>
              <ul className="mt-5 space-y-1 text-left text-sm">
                {wrong.map((c) => (
                  <li key={c.id} className="rounded-lg bg-red-50 px-3 py-2">
                    <span className="italic">{c.latin}</span> - {c.polish}
                  </li>
                ))}
              </ul>
              <button onClick={() => start(wrong)} className={`mt-5 ${btn} border-red-200 bg-red-50 text-red-800 hover:bg-red-100`}>
                Powtórz błędne ({wrong.length})
              </button>
            </>
          )}
        </div>
      ) : q ? (
        <div className="mx-auto max-w-2xl">
          <div className="h-1.5 w-full rounded-full bg-slate-200 overflow-hidden mb-4">
            <div className="h-full bg-blue-600 transition-all" style={{ width: `${(i / questions.length) * 100}%` }} />
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
            {q.card.image ? (
              <div className="relative h-72 sm:h-96">
                <Image src={q.card.image} alt="Zaznaczona struktura" fill sizes="672px" className="object-contain p-3" priority />
              </div>
            ) : (
              <div className="px-6 py-10 text-center">
                <p className="text-xs uppercase tracking-wider text-slate-400">{ask === "pl" ? "Łacina" : "Polski"}</p>
                <p className={`text-3xl font-bold ${ask === "pl" ? "italic" : ""}`}>{prompt}</p>
              </div>
            )}
            <p className="border-t border-slate-100 px-5 py-3 text-center text-sm text-slate-600">
              Pytanie {i + 1} z {questions.length}: {q.card.image ? "co jest zaznaczone na czerwono?" : ask === "pl" ? "jak to jest po polsku?" : "jak to jest po łacinie?"}
            </p>
          </div>
          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            {q.options.map((o, k) => {
              const state = !chosen ? "" : o.id === q.card.id ? "border-blue-600 bg-blue-50 text-blue-900" : o.id === chosen ? "border-red-400 bg-red-50 text-red-800" : "opacity-60";
              return (
                <button
                  key={o.id}
                  onClick={() => answer(o)}
                  className={`rounded-xl border border-slate-200 bg-white px-4 py-3 text-left hover:border-blue-600 ${state} ${ask === "la" ? "italic" : ""}`}
                >
                  <span className="mr-2 text-xs text-slate-400 not-italic">{k + 1}</span>
                  {name(o)}
                </button>
              );
            })}
          </div>
          {chosen && (
            <div className="mt-4 text-center">
              <p className="mb-3 text-sm text-slate-600">
                <span className="italic">{q.card.latin}</span> - {q.card.polish}
              </p>
              <button
                onClick={() => {
                  setI((x) => x + 1);
                  setChosen(null);
                }}
                className={`${btn} border-blue-700 bg-blue-700 px-6 py-2 text-white hover:bg-blue-800`}
              >
                Dalej
              </button>
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
}
