import type { Metadata } from "next";
import DeckNav from "@/components/DeckNav";
import Flashcards from "@/components/Flashcards";
import { selectCards, type Selection } from "@/data/cards";

export const metadata: Metadata = { title: "Nauka - fiszki z anatomii" };

export default async function StudyPage({ searchParams }: { searchParams: Promise<Selection> }) {
  const sel = await searchParams;
  const { cards, title, query } = selectCards(sel);
  return (
    <div className="mx-auto max-w-6xl px-4 py-6">
      <DeckNav base="/nauka" sel={sel} />
      <Flashcards key={query} cards={cards} title={title} />
    </div>
  );
}
