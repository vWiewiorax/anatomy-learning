import Image from "next/image";
import Link from "next/link";
import { CARDS, SYSTEMS, groupsOf } from "@/data/cards";

const COVER: Record<string, string> = { "kostno-stawowy": "/cards/femur.webp", miesniowy: "/cards/m-deltoideus.webp" };

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <section className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Fiszki z anatomii</h1>
        <p className="mt-3 max-w-2xl text-stone-600">
          Na jednej stronie fiszki ilustracja i nazwa łacińska, na drugiej nazwa polska. Kierunek możesz odwrócić. Zaznaczaj
          &quot;Umiem&quot; i &quot;Nie umiem&quot;, a postęp zapisze się w przeglądarce. Razem {CARDS.length} fiszek.
        </p>
      </section>

      <div className="grid gap-6 md:grid-cols-2">
        {SYSTEMS.map((s) => {
          const groups = groupsOf(s.id);
          const count = CARDS.filter((c) => c.system === s.id).length;
          return (
            <section key={s.id} className="rounded-2xl border border-stone-200 bg-white shadow-sm overflow-hidden flex flex-col">
              <div className="relative h-44 bg-stone-50 border-b border-stone-100">
                <Image src={COVER[s.id]} alt="" fill sizes="(max-width: 768px) 100vw, 480px" className="object-contain p-2" priority />
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <h2 className="text-xl font-semibold">{s.name}</h2>
                <p className="text-sm italic text-stone-500">{s.latin}</p>
                <p className="mt-2 text-sm text-stone-600">{s.description}</p>
                <Link
                  href={`/nauka?uklad=${s.id}`}
                  className="mt-4 inline-flex items-center justify-center rounded-lg bg-teal-700 px-4 py-2.5 text-sm font-medium text-white hover:bg-teal-800"
                >
                  Ucz się całego układu ({count})
                </Link>
                <div className="mt-4 flex flex-wrap gap-2">
                  {groups.map((g) => (
                    <Link
                      key={g.slug}
                      href={`/nauka?uklad=${s.id}&grupa=${g.slug}`}
                      className="rounded-full border border-stone-200 px-3 py-1 text-sm text-stone-700 hover:border-teal-600 hover:text-teal-800"
                    >
                      {g.name} <span className="text-stone-400">{g.count}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
