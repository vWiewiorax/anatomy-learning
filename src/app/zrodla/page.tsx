import type { Metadata } from "next";
import { CARDS } from "@/data/cards";

export const metadata: Metadata = { title: "Źródła ilustracji - fiszki z anatomii" };

export default function Sources() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-2xl font-bold">Źródła ilustracji</h1>
      <p className="mt-2 text-sm text-slate-600 max-w-3xl">
        Wszystkie ilustracje to modele 3D z bazy BodyParts3D 4.0 (The Database Center for Life Science, licencja CC BY-SA 2.1 JP). Większość
        pochodzi z Wikimedia Commons (projekt Anatomography, lista poniżej). Dla struktur, których nie ma tam w wersji 3D, ilustracje oraz szkielet
        wyrenderowano z tej samej bazy BodyParts3D i zaznaczono na nich strukturę. Obrazy zostały przeskalowane i zapisane w formacie WebP.
      </p>
      <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200 bg-white">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-left text-slate-500">
            <tr>
              <th className="px-3 py-2 font-medium">Fiszka</th>
              <th className="px-3 py-2 font-medium">Plik</th>
              <th className="px-3 py-2 font-medium">Autor</th>
              <th className="px-3 py-2 font-medium">Licencja</th>
            </tr>
          </thead>
          <tbody>
            {CARDS.filter((c) => c.credit?.page.includes("commons.wikimedia.org")).map((c) => (
              <tr key={c.id} className="border-t border-slate-100 align-top">
                <td className="px-3 py-2">
                  <span className="italic">{c.latin}</span>
                  <span className="block text-slate-500">{c.polish}</span>
                </td>
                <td className="px-3 py-2 break-all">
                  <a href={c.credit!.page} target="_blank" rel="noreferrer" className="text-blue-800 underline">
                    {c.credit!.file}
                  </a>
                </td>
                <td className="px-3 py-2 text-slate-600 max-w-xs">{c.credit!.author}</td>
                <td className="px-3 py-2 whitespace-nowrap">
                  {c.credit!.licenseUrl ? (
                    <a href={c.credit!.licenseUrl} target="_blank" rel="noreferrer" className="underline">
                      {c.credit!.license}
                    </a>
                  ) : (
                    c.credit!.license
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
