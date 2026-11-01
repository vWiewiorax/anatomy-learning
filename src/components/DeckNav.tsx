import Link from "next/link";
import { SYSTEMS, selectCards, type Selection } from "@/data/cards";

const chip = (on: boolean) =>
  `rounded-full px-3 py-1 text-sm border ${on ? "border-teal-600 text-teal-800 bg-teal-50" : "border-stone-200 text-stone-600 bg-white hover:border-teal-600"}`;

export default function DeckNav({ base, sel }: { base: "/nauka" | "/quiz"; sel: Selection }) {
  const { system, groups, group, subgroups, subgroup, query } = selectCards(sel);
  const href = (q: Record<string, string>) => `${base}?${new URLSearchParams(q).toString()}`;
  const other = base === "/nauka" ? "/quiz" : "/nauka";
  return (
    <div className="mb-6 space-y-3">
      <div className="flex flex-wrap items-center gap-2">
        {SYSTEMS.map((s) => (
          <Link
            key={s.id}
            href={href({ uklad: s.id })}
            className={`rounded-lg px-3 py-1.5 text-sm font-medium border ${system?.id === s.id ? "bg-teal-700 border-teal-700 text-white" : "bg-white border-stone-200 text-stone-700 hover:border-teal-600"}`}
          >
            {s.name}
          </Link>
        ))}
        <Link href={`${other}?${query}`} className="ml-auto rounded-lg border border-stone-200 bg-white px-3 py-1.5 text-sm text-stone-700 hover:border-teal-600">
          {base === "/nauka" ? "Quiz z tego zestawu" : "Fiszki z tego zestawu"}
        </Link>
      </div>
      {system && (
        <div className="flex flex-wrap gap-2">
          <Link href={href({ uklad: system.id })} className={chip(!group)}>
            Cały układ
          </Link>
          {groups.map((g) => (
            <Link key={g.slug} href={href({ uklad: system.id, grupa: g.slug })} className={chip(group?.slug === g.slug)}>
              {g.name} <span className="text-stone-400">{g.count}</span>
            </Link>
          ))}
        </div>
      )}
      {system && group && subgroups.length > 1 && (
        <div className="flex flex-wrap gap-2 border-l-2 border-teal-200 pl-3">
          <Link href={href({ uklad: system.id, grupa: group.slug })} className={chip(!subgroup)}>
            Wszystko: {group.name}
          </Link>
          {subgroups.map((g) => (
            <Link key={g.slug} href={href({ uklad: system.id, grupa: group.slug, podgrupa: g.slug })} className={chip(subgroup?.slug === g.slug)}>
              {g.name} <span className="text-stone-400">{g.count}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
