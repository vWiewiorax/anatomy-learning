import type { Metadata } from "next";
import DeckNav from "@/components/DeckNav";
import Quiz from "@/components/Quiz";
import { CARDS, selectCards, type Selection } from "@/data/cards";

export const metadata: Metadata = { title: "Quiz - anatomia" };

export default async function QuizPage({ searchParams }: { searchParams: Promise<Selection> }) {
  const sel = await searchParams;
  const { cards, title, query } = selectCards(sel);
  return (
    <div className="mx-auto max-w-6xl px-4 py-6">
      <DeckNav base="/quiz" sel={sel} />
      <Quiz key={query} cards={cards} pool={CARDS} title={title} />
    </div>
  );
}
