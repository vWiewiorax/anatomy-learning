import Link from "next/link";
import ChapterSelect, { type ChapterGroup } from "@/components/ChapterSelect";
import { SYSTEMS, groupsOf, selectCards, subgroupsOf, type Selection } from "@/data/cards";

const seg = (on: boolean) => `rounded-lg px-4 py-2 text-sm font-semibold transition ${on ? "bg-blue-600 text-white shadow-sm" : "text-slate-600 hover:text-blue-700"}`;

export default function DeckNav({ base, sel }: { base: "/nauka" | "/quiz"; sel: Selection }) {
  const { system, group, subgroup, query } = selectCards(sel);
  const href = (b: string, q: Record<string, string>) => `${b}?${new URLSearchParams(q).toString()}`;
  const sys = system ?? SYSTEMS[0];
  const groups: ChapterGroup[] = groupsOf(sys.id).map((g) => {
    const subs = subgroupsOf(sys.id, g.slug);
    return {
      label: g.name,
      options: [
        { label: `${g.name} - cały dział (${g.count})`, value: href(base, { uklad: sys.id, grupa: g.slug }) },
        ...(subs.length > 1 ? subs.map((s) => ({ label: `${s.name} (${s.count})`, value: href(base, { uklad: sys.id, grupa: g.slug, podgrupa: s.slug }) })) : []),
      ],
    };
  });
  const current = subgroup
    ? href(base, { uklad: sys.id, grupa: group!.slug, podgrupa: subgroup.slug })
    : group
      ? href(base, { uklad: sys.id, grupa: group.slug })
      : href(base, { uklad: sys.id });
  return (
    <div className="mb-6 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="inline-flex rounded-xl bg-slate-100 p-1">
          {SYSTEMS.map((s) => (
            <Link key={s.id} href={href(base, { uklad: s.id })} className={seg(sys.id === s.id)}>
              {s.id === "kostno-stawowy" ? "Kości i stawy" : "Mięśnie"}
            </Link>
          ))}
        </div>
        <div className="inline-flex rounded-xl bg-slate-100 p-1">
          <Link href={`/nauka?${query}`} className={seg(base === "/nauka")}>
            Fiszki
          </Link>
          <Link href={`/quiz?${query}`} className={seg(base === "/quiz")}>
            Quiz
          </Link>
        </div>
      </div>
      <div className="mt-4">
        <p className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-slate-400">{sys.id === "kostno-stawowy" ? "Rozdział" : "Grupa mięśni"}</p>
        <ChapterSelect value={current} top={[{ label: `Cały układ (${selectCards({ uklad: sys.id }).cards.length})`, value: href(base, { uklad: sys.id }) }]} groups={groups} />
      </div>
    </div>
  );
}
