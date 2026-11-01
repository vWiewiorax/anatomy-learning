import Image from "next/image";
import Link from "next/link";
import { CARDS, SYSTEMS, groupsOf, subgroupsOf } from "@/data/cards";

const COVER: Record<string, string> = { "kostno-stawowy": "/anat/t-arcus.webp", miesniowy: "/cards/m-deltoideus.webp" };

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <section className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Fiszki z anatomii</h1>
        <p className="mt-3 max-w-2xl text-stone-600">
          Na jednej stronie fiszki ilustracja z zaznaczoną strukturą i nazwa łacińska, na drugiej nazwa polska. Do każdej części jest quiz.
          Fiszki oznaczone &quot;Nie umiem&quot; powtórzysz osobno. Razem {CARDS.length} fiszek.
        </p>
        <div className="mt-4 flex flex-wrap gap-2 text-sm">
          <Link href="/szkielet" className="rounded-lg bg-teal-700 px-4 py-2 font-medium text-white hover:bg-teal-800">
            Szkielet - kliknij lub wyszukaj kość
          </Link>
          <Link href="/powtorka" className="rounded-lg border border-red-200 bg-red-50 px-4 py-2 font-medium text-red-800 hover:bg-red-100">
            Powtórka: Nie umiem
          </Link>
        </div>
      </section>

      {SYSTEMS.map((s) => (
        <section key={s.id} className="mb-8 rounded-2xl border border-stone-200 bg-white shadow-sm overflow-hidden">
          <div className="flex flex-col sm:flex-row">
            <div className="relative h-40 sm:h-auto sm:w-48 shrink-0 bg-stone-50">
              <Image src={COVER[s.id]} alt="" fill sizes="192px" className="object-contain p-2" priority />
            </div>
            <div className="p-5 flex-1">
              <h2 className="text-xl font-semibold">{s.name}</h2>
              <p className="text-sm italic text-stone-500">{s.latin}</p>
              <p className="mt-2 text-sm text-stone-600">{s.description}</p>
              <div className="mt-3 flex gap-2 text-sm">
                <Link href={`/nauka?uklad=${s.id}`} className="rounded-lg bg-teal-700 px-3 py-1.5 font-medium text-white hover:bg-teal-800">
                  Fiszki ({CARDS.filter((c) => c.system === s.id).length})
                </Link>
                <Link href={`/quiz?uklad=${s.id}`} className="rounded-lg border border-stone-200 px-3 py-1.5 hover:border-teal-600">
                  Quiz z całego układu
                </Link>
              </div>
            </div>
          </div>
          <div className="grid gap-px bg-stone-100 sm:grid-cols-2 border-t border-stone-100">
            {groupsOf(s.id).map((g) => {
              const subs = subgroupsOf(s.id, g.slug);
              const base = `uklad=${s.id}&grupa=${g.slug}`;
              return (
                <div key={g.slug} className="bg-white p-4">
                  <div className="flex items-baseline justify-between gap-2">
                    <Link href={`/nauka?${base}`} className="font-semibold hover:text-teal-800">
                      {g.name} <span className="text-sm font-normal text-stone-400">{g.count}</span>
                    </Link>
                    <Link href={`/quiz?${base}`} className="text-xs text-teal-800 underline">
                      quiz
                    </Link>
                  </div>
                  {subs.length > 1 && (
                    <ul className="mt-2 space-y-1 text-sm">
                      {subs.map((sg) => (
                        <li key={sg.slug} className="flex items-baseline justify-between gap-2">
                          <Link href={`/nauka?${base}&podgrupa=${sg.slug}`} className="text-stone-700 hover:text-teal-800">
                            {sg.name} <span className="text-stone-400">{sg.count}</span>
                          </Link>
                          <Link href={`/quiz?${base}&podgrupa=${sg.slug}`} className="text-xs text-stone-500 hover:text-teal-800">
                            quiz
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}
