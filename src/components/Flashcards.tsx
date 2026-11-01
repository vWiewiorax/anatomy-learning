"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";
import type { Card } from "@/data/cards";

type Direction = "la-pl" | "pl-la";
type Status = "known" | "unknown";

const PROGRESS_KEY = "anatomia-fiszki:postep";
const DIRECTION_KEY = "anatomia-fiszki:kierunek";

function readProgress(): Record<string, Status> {
  try {
    return JSON.parse(localStorage.getItem(PROGRESS_KEY) ?? "{}");
  } catch {
    return {};
  }
}

function shuffled<T>(arr: T[]) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function Icon({ d, className = "h-4 w-4" }: { d: string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d={d} />
    </svg>
  );
}

const ICONS = {
  prev: "M15 18l-6-6 6-6",
  next: "M9 18l6-6-6-6",
  shuffle: "M16 3h5v5M4 20 21 3M21 16v5h-5M15 15l6 6M4 4l5 5",
  swap: "M7 16V4m0 0L3 8m4-4 4 4M17 8v12m0 0 4-4m-4 4-4-4",
  check: "M20 6 9 17l-5-5",
  x: "M18 6 6 18M6 6l12 12",
  reset: "M3 12a9 9 0 1 0 3-6.7L3 8M3 3v5h5",
};

export default function Flashcards({ cards, title }: { cards: Card[]; title: string }) {
  const [direction, setDirection] = useState<Direction>("la-pl");
  const [progress, setProgress] = useState<Record<string, Status>>({});
  const [onlyUnknown, setOnlyUnknown] = useState(false);
  const [order, setOrder] = useState<string[]>(() => cards.map((c) => c.id));
  const [pos, setPos] = useState(0);
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    setProgress(readProgress());
    const d = localStorage.getItem(DIRECTION_KEY);
    if (d === "la-pl" || d === "pl-la") setDirection(d);
  }, []);

  const byId = useMemo(() => new Map(cards.map((c) => [c.id, c])), [cards]);
  const deck = useMemo(
    () => order.map((id) => byId.get(id)!).filter((c) => c && (!onlyUnknown || progress[c.id] !== "known")),
    [order, byId, onlyUnknown, progress],
  );
  const index = Math.min(pos, Math.max(deck.length - 1, 0));
  const card = deck[index];
  const knownCount = cards.filter((c) => progress[c.id] === "known").length;
  const unknownCount = cards.filter((c) => progress[c.id] === "unknown").length;

  const go = useCallback(
    (delta: number) => {
      if (!deck.length) return;
      setFlipped(false);
      setPos((p) => (Math.min(p, deck.length - 1) + delta + deck.length) % deck.length);
    },
    [deck.length],
  );

  const mark = useCallback(
    (status: Status) => {
      if (!card) return;
      const next = { ...progress, [card.id]: status };
      setProgress(next);
      localStorage.setItem(PROGRESS_KEY, JSON.stringify(next));
      setFlipped(false);
      if (onlyUnknown && status === "known") {
        setPos((p) => Math.min(p, Math.max(deck.length - 2, 0)));
      } else {
        setPos((p) => (Math.min(p, deck.length - 1) + 1) % deck.length);
      }
    },
    [card, progress, onlyUnknown, deck.length],
  );

  const toggleDirection = () => {
    const d: Direction = direction === "la-pl" ? "pl-la" : "la-pl";
    setDirection(d);
    localStorage.setItem(DIRECTION_KEY, d);
    setFlipped(false);
  };

  const shuffle = () => {
    setOrder(shuffled(cards.map((c) => c.id)));
    setPos(0);
    setFlipped(false);
  };

  const resetProgress = () => {
    const next = { ...progress };
    for (const c of cards) delete next[c.id];
    setProgress(next);
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(next));
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLElement && ["INPUT", "TEXTAREA", "SELECT"].includes(e.target.tagName)) return;
      if (e.key === " " || e.key === "Enter") {
        e.preventDefault();
        setFlipped((f) => !f);
      } else if (e.key === "ArrowRight") go(1);
      else if (e.key === "ArrowLeft") go(-1);
      else if (e.key === "1") mark("unknown");
      else if (e.key === "2") mark("known");
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, mark]);

  const frontName = card ? (direction === "la-pl" ? card.latin : card.polish) : "";
  const backName = card ? (direction === "la-pl" ? card.polish : card.latin) : "";
  const frontLang = direction === "la-pl" ? "Łacina" : "Polski";
  const backLang = direction === "la-pl" ? "Polski" : "Łacina";
  const pct = cards.length ? Math.round((knownCount / cards.length) * 100) : 0;

  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-3 mb-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
          <p className="text-sm text-stone-500">
            Umiem: {knownCount} / {cards.length} · Do powtórki: {unknownCount}
          </p>
        </div>
        <div className="flex flex-wrap gap-2 text-sm">
          <button onClick={toggleDirection} className="inline-flex items-center gap-1.5 rounded-lg border border-stone-200 bg-white px-3 py-1.5 hover:border-teal-600">
            <Icon d={ICONS.swap} />
            {direction === "la-pl" ? "Łacina → polski" : "Polski → łacina"}
          </button>
          <button onClick={shuffle} className="inline-flex items-center gap-1.5 rounded-lg border border-stone-200 bg-white px-3 py-1.5 hover:border-teal-600">
            <Icon d={ICONS.shuffle} />
            Tasuj
          </button>
          <label className="inline-flex items-center gap-2 rounded-lg border border-stone-200 bg-white px-3 py-1.5 cursor-pointer hover:border-teal-600">
            <input
              type="checkbox"
              className="accent-teal-700"
              checked={onlyUnknown}
              onChange={(e) => {
                setOnlyUnknown(e.target.checked);
                setPos(0);
                setFlipped(false);
              }}
            />
            Tylko nieopanowane
          </label>
          <button onClick={resetProgress} className="inline-flex items-center gap-1.5 rounded-lg border border-stone-200 bg-white px-3 py-1.5 text-stone-600 hover:border-red-400 hover:text-red-700">
            <Icon d={ICONS.reset} />
            Wyzeruj postęp
          </button>
        </div>
      </div>

      <div className="h-1.5 w-full rounded-full bg-stone-200 overflow-hidden mb-6" aria-label={`Opanowane ${pct}%`}>
        <div className="h-full bg-teal-600 transition-all" style={{ width: `${pct}%` }} />
      </div>

      {!card ? (
        <div className="rounded-2xl border border-dashed border-stone-300 bg-white p-10 text-center text-stone-600">
          <p className="text-lg font-medium">Wszystko opanowane w tym zestawie.</p>
          <p className="text-sm mt-1">Odznacz &quot;Tylko nieopanowane&quot; albo wyzeruj postęp, żeby powtórzyć całość.</p>
        </div>
      ) : (
        <>
          <div className="flip-scene mx-auto max-w-2xl">
            <button
              type="button"
              onClick={() => setFlipped((f) => !f)}
              className={`flip-card block w-full h-[460px] sm:h-[520px] text-left ${flipped ? "is-flipped" : ""}`}
              aria-label={flipped ? `${backLang}: ${backName}. Kliknij, aby odwrócić` : `${frontLang}: ${frontName}. Kliknij, aby odwrócić`}
            >
              <div className="flip-face rounded-2xl border border-stone-200 bg-white shadow-md flex flex-col overflow-hidden">
                <div className="relative flex-1 bg-white">
                  <Image src={card.image} alt={`Ilustracja: ${card.latin}`} fill sizes="(max-width: 672px) 100vw, 672px" className="object-contain p-3" priority />
                </div>
                <div className="border-t border-stone-100 px-5 py-4 text-center">
                  <p className="text-xs uppercase tracking-wider text-stone-400">{frontLang}</p>
                  <p className={`text-2xl font-semibold ${direction === "la-pl" ? "italic" : ""}`}>{frontName}</p>
                </div>
              </div>
              <div className="flip-face flip-back rounded-2xl border border-teal-200 bg-teal-50 shadow-md flex flex-col overflow-hidden">
                <div className="relative h-44 sm:h-56 bg-white border-b border-teal-100">
                  <Image src={card.image} alt="" fill sizes="(max-width: 672px) 100vw, 672px" className="object-contain p-2" />
                </div>
                <div className="flex-1 flex flex-col items-center justify-center px-6 text-center gap-2">
                  <p className="text-xs uppercase tracking-wider text-teal-700/70">{backLang}</p>
                  <p className={`text-3xl font-bold text-teal-950 ${direction === "pl-la" ? "italic" : ""}`}>{backName}</p>
                  <p className={`text-stone-500 ${direction === "la-pl" ? "italic" : ""}`}>{frontName}</p>
                  <p className="mt-2 rounded-full bg-white px-3 py-1 text-xs text-stone-500 border border-teal-100">{card.group}</p>
                </div>
              </div>
            </button>
            <p className="mt-2 text-center text-xs text-stone-400">
              Kliknij kartę lub naciśnij spację, aby ją odwrócić. Strzałki: poprzednia / następna. Klawisze 1 i 2: nie umiem / umiem.
            </p>
          </div>

          <div className="mx-auto max-w-2xl mt-5 flex items-center justify-between gap-3">
            <button onClick={() => go(-1)} className="rounded-full border border-stone-200 bg-white p-3 hover:border-teal-600" aria-label="Poprzednia">
              <Icon d={ICONS.prev} className="h-5 w-5" />
            </button>
            <div className="flex flex-1 gap-2 sm:gap-3">
              <button
                onClick={() => mark("unknown")}
                className="flex-1 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl border border-red-200 bg-red-50 px-3 sm:px-4 py-3 font-medium text-red-800 hover:bg-red-100"
              >
                <Icon d={ICONS.x} /> Nie umiem
              </button>
              <button
                onClick={() => mark("known")}
                className="flex-1 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl border border-teal-700 bg-teal-700 px-3 sm:px-4 py-3 font-medium text-white hover:bg-teal-800"
              >
                <Icon d={ICONS.check} /> Umiem
              </button>
            </div>
            <button onClick={() => go(1)} className="rounded-full border border-stone-200 bg-white p-3 hover:border-teal-600" aria-label="Następna">
              <Icon d={ICONS.next} className="h-5 w-5" />
            </button>
          </div>
          <p className="mt-3 text-center text-sm text-stone-500">
            Karta {index + 1} z {deck.length}
            {progress[card.id] === "known" && <span className="ml-2 text-teal-700">(umiem)</span>}
            {progress[card.id] === "unknown" && <span className="ml-2 text-red-700">(do powtórki)</span>}
          </p>
          <p className="mt-6 text-center text-[11px] text-stone-400">
            Ilustracja:{" "}
            <a href={card.credit.page} target="_blank" rel="noreferrer" className="underline">
              {card.credit.file}
            </a>
            , {card.credit.author.slice(0, 80)}, {card.credit.license}
          </p>
        </>
      )}
    </div>
  );
}
