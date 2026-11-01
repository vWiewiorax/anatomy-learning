import type { Metadata } from "next";
import Link from "next/link";
import Flashcards from "@/components/Flashcards";
import { CARDS, SYSTEMS, groupsOf, type SystemId } from "@/data/cards";

export const metadata: Metadata = { title: "Nauka - fiszki z anatomii" };

export default async function StudyPage({ searchParams }: { searchParams: Promise<{ uklad?: string; grupa?: string }> }) {
  const { uklad, grupa } = await searchParams;
  const system = SYSTEMS.find((s) => s.id === uklad);
  const groups = system ? groupsOf(system.id as SystemId) : [];
  const group = groups.find((g) => g.slug === grupa);
  const cards = CARDS.filter((c) => (!system || c.system === system.id) && (!group || c.groupSlug === group.slug));
  const title = group ? group.name : system ? system.name : "Wszystkie fiszki";
  const deckKey = `${system?.id ?? "all"}:${group?.slug ?? "all"}`;

  return (
    <div className="mx-auto max-w-5xl px-4 py-6">
      <div className="flex flex-wrap gap-2 mb-5">
        {SYSTEMS.map((s) => (
          <Link
            key={s.id}
            href={`/nauka?uklad=${s.id}`}
            className={`rounded-lg px-3 py-1.5 text-sm font-medium border ${
              system?.id === s.id ? "bg-teal-700 border-teal-700 text-white" : "bg-white border-stone-200 text-stone-700 hover:border-teal-600"
            }`}
          >
            {s.name}
          </Link>
        ))}
        <Link
          href="/nauka"
          className={`rounded-lg px-3 py-1.5 text-sm font-medium border ${
            !system ? "bg-teal-700 border-teal-700 text-white" : "bg-white border-stone-200 text-stone-700 hover:border-teal-600"
          }`}
        >
          Wszystko
        </Link>
      </div>
      {system && (
        <div className="flex flex-wrap gap-2 mb-6">
          <Link
            href={`/nauka?uklad=${system.id}`}
            className={`rounded-full px-3 py-1 text-sm border ${!group ? "border-teal-600 text-teal-800 bg-teal-50" : "border-stone-200 text-stone-600 bg-white hover:border-teal-600"}`}
          >
            Wszystkie grupy
          </Link>
          {groups.map((g) => (
            <Link
              key={g.slug}
              href={`/nauka?uklad=${system.id}&grupa=${g.slug}`}
              className={`rounded-full px-3 py-1 text-sm border ${
                group?.slug === g.slug ? "border-teal-600 text-teal-800 bg-teal-50" : "border-stone-200 text-stone-600 bg-white hover:border-teal-600"
              }`}
            >
              {g.name} <span className="text-stone-400">{g.count}</span>
            </Link>
          ))}
        </div>
      )}
      <Flashcards key={deckKey} cards={cards} title={title} />
    </div>
  );
}
