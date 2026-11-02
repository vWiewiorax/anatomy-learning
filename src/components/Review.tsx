"use client";

import { useEffect, useState } from "react";
import Flashcards from "@/components/Flashcards";
import Quiz from "@/components/Quiz";
import { CARDS } from "@/data/cards";
import { readProgress } from "@/lib/progress";

export default function Review() {
  const [ids, setIds] = useState<Set<string> | null>(null);
  const [mode, setMode] = useState<"fiszki" | "quiz">("fiszki");
  useEffect(() => {
    const p = readProgress();
    setIds(new Set(Object.keys(p).filter((k) => p[k] === "unknown")));
  }, []);
  if (!ids) return null;
  const cards = CARDS.filter((c) => ids.has(c.id));
  if (!cards.length)
    return (
      <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center text-slate-600">
        <p className="text-lg font-medium">Nie masz jeszcze fiszek oznaczonych jako &quot;Nie umiem&quot;.</p>
        <p className="text-sm mt-1">Oznacz je podczas nauki albo zrób quiz - błędne odpowiedzi też tu trafią.</p>
      </div>
    );
  return (
    <div>
      <div className="mb-5 inline-flex rounded-lg border border-slate-200 bg-white p-1 text-sm">
        {(["fiszki", "quiz"] as const).map((m) => (
          <button key={m} onClick={() => setMode(m)} className={`rounded-md px-4 py-1.5 ${mode === m ? "bg-blue-700 text-white" : "text-slate-600"}`}>
            {m === "fiszki" ? "Fiszki" : "Quiz"}
          </button>
        ))}
      </div>
      {mode === "fiszki" ? (
        <Flashcards cards={cards} title={`Powtórka: Nie umiem (${cards.length})`} initialFilter="unknown" />
      ) : (
        <Quiz cards={cards} pool={CARDS} title={`Nie umiem (${cards.length})`} />
      )}
    </div>
  );
}
