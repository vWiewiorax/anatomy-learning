import Image from "next/image";
import Link from "next/link";
import { CARDS, SYSTEMS, groupsOf, subgroupsOf, type SystemId } from "@/data/cards";

function thumbOf(system: SystemId, groupSlug: string, subgroupSlug?: string) {
  return CARDS.find((c) => c.system === system && c.groupSlug === groupSlug && (!subgroupSlug || c.subgroupSlug === subgroupSlug) && c.image)?.image ?? null;
}

function Tile({ href, quiz, title, count, image, badge }: { href: string; quiz: string; title: string; count: number; image: string | null; badge?: string }) {
  return (
    <div className="group flex overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md">
      <Link href={href} className="relative w-28 shrink-0 bg-gradient-to-br from-blue-50 to-white sm:w-32">
        {image ? (
          <Image src={image} alt="" fill sizes="128px" className="object-contain p-2" />
        ) : (
          <span className="absolute inset-0 flex items-center justify-center text-blue-300">
            <svg viewBox="0 0 24 24" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
              <path d="M4 5a2 2 0 0 1 2-2h9l5 5v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5Z M14 3v5h5 M8 13h8 M8 17h5" strokeLinejoin="round" />
            </svg>
          </span>
        )}
      </Link>
      <div className="flex min-w-0 flex-1 flex-col p-4">
        {badge && <span className="mb-1 w-fit rounded-md bg-blue-50 px-2 py-0.5 text-xs font-bold text-blue-700">Rozdz. {badge}</span>}
        <Link href={href} className="font-semibold leading-snug text-slate-900 group-hover:text-blue-700">
          {title}
        </Link>
        <span className="mt-0.5 text-xs text-slate-500">{count} fiszek</span>
        <div className="mt-auto flex gap-2 pt-3 text-sm">
          <Link href={href} className="rounded-lg bg-blue-600 px-3 py-1.5 font-semibold text-white hover:bg-blue-700">
            Ucz się
          </Link>
          <Link href={quiz} className="rounded-lg border border-slate-200 px-3 py-1.5 font-semibold text-slate-700 hover:border-blue-400 hover:text-blue-700">
            Quiz
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const bones = SYSTEMS[0];
  const muscles = SYSTEMS[1];
  return (
    <div>
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-10 md:grid-cols-[1fr_260px]">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Fiszki z anatomii</h1>
            <p className="mt-3 max-w-2xl text-slate-600">
              Na przodzie fiszki ilustracja z zaznaczoną strukturą i nazwa po łacinie, na odwrocie nazwa po polsku. Układ kostno-stawowy jest podzielony na
              rozdziały. Do każdego rozdziału jest quiz, a fiszki oznaczone &quot;Nie umiem&quot; powtórzysz osobno.
            </p>
            <div className="mt-5 flex flex-wrap gap-2 text-sm">
              <Link href="/nauka?uklad=kostno-stawowy" className="rounded-xl bg-blue-600 px-5 py-2.5 font-semibold text-white shadow-sm hover:bg-blue-700">
                Zacznij naukę
              </Link>
              <Link href="/szkielet" className="rounded-xl border border-slate-200 bg-white px-5 py-2.5 font-semibold text-slate-700 hover:border-blue-400 hover:text-blue-700">
                Szkielet - kliknij lub wyszukaj kość
              </Link>
              <Link href="/powtorka" className="rounded-xl border border-red-200 bg-red-50 px-5 py-2.5 font-semibold text-red-700 hover:bg-red-100">
                Powtórka: Nie umiem
              </Link>
            </div>
            <p className="mt-4 text-sm text-slate-500">Razem {CARDS.length} fiszek.</p>
          </div>
          <div className="relative hidden h-72 md:block">
            <Image src="/szkielet/front.webp" alt="" fill sizes="260px" className="object-contain" priority />
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">{bones.name}</h2>
            <p className="text-sm italic text-slate-500">{bones.latin}</p>
          </div>
          <Link href={`/quiz?uklad=${bones.id}`} className="text-sm font-semibold text-blue-700 hover:underline">
            Quiz z całego układu
          </Link>
        </div>
        {groupsOf(bones.id).map((g) => (
          <section key={g.slug} className="mb-8">
            <div className="mb-3 flex items-baseline justify-between gap-2 border-b border-slate-200 pb-2">
              <h3 className="text-lg font-bold text-slate-800">{g.name}</h3>
              <Link href={`/quiz?uklad=${bones.id}&grupa=${g.slug}`} className="text-sm font-semibold text-blue-700 hover:underline">
                Quiz z działu ({g.count})
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {subgroupsOf(bones.id, g.slug).map((s) => {
                const [num, ...rest] = s.name.split(". ");
                const q = `uklad=${bones.id}&grupa=${g.slug}&podgrupa=${s.slug}`;
                return <Tile key={s.slug} href={`/nauka?${q}`} quiz={`/quiz?${q}`} title={rest.join(". ")} badge={num} count={s.count} image={thumbOf(bones.id, g.slug, s.slug)} />;
              })}
            </div>
          </section>
        ))}

        <div className="mb-6 mt-12 flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">{muscles.name}</h2>
            <p className="text-sm italic text-slate-500">{muscles.latin}</p>
          </div>
          <Link href={`/quiz?uklad=${muscles.id}`} className="text-sm font-semibold text-blue-700 hover:underline">
            Quiz z całego układu
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {groupsOf(muscles.id).map((g) => {
            const q = `uklad=${muscles.id}&grupa=${g.slug}`;
            return <Tile key={g.slug} href={`/nauka?${q}`} quiz={`/quiz?${q}`} title={g.name} count={g.count} image={thumbOf(muscles.id, g.slug)} />;
          })}
        </div>
      </div>
    </div>
  );
}
