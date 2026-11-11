"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { JOINTS, LIGAMENTS, type Joint, type Ligament } from "@/data/joints";
import { normalize } from "@/lib/progress";

const LIG = new Map(LIGAMENTS.map((l) => [l.id, l]));
const WITH_VIEWS = JOINTS.filter((j) => j.views.length > 0);
const GROUPS = [...new Set(WITH_VIEWS.map((j) => j.group))];
const MIN_GAP = 6;

function spread(hs: Record<string, number[]>, ids: string[]) {
  const pts = ids.filter((id) => hs[id]).map((id) => ({ id, x: hs[id][0], y: hs[id][1] }));
  for (let it = 0; it < 30; it++) {
    for (let a = 0; a < pts.length; a++)
      for (let b = a + 1; b < pts.length; b++) {
        const dx = pts[b].x - pts[a].x;
        const dy = pts[b].y - pts[a].y;
        const d = Math.hypot(dx, dy) || 0.01;
        if (d >= MIN_GAP) continue;
        const push = (MIN_GAP - d) / 2;
        const ux = d > 0.01 ? dx / d : 1;
        const uy = d > 0.01 ? dy / d : 0;
        pts[a].x -= ux * push;
        pts[a].y -= uy * push;
        pts[b].x += ux * push;
        pts[b].y += uy * push;
      }
  }
  return new Map(pts.map((p) => [p.id, [Math.min(97, Math.max(3, p.x)), Math.min(97, Math.max(3, p.y))]]));
}

export default function JointExplorer() {
  const [joint, setJoint] = useState<Joint>(WITH_VIEWS.find((j) => j.id === "j-genus") ?? WITH_VIEWS[0]);
  const [viewIdx, setViewIdx] = useState(0);
  const [lig, setLig] = useState<Ligament | null>(null);
  const [q, setQ] = useState("");

  const results = useMemo(() => {
    const n = normalize(q.trim());
    if (n.length < 2) return { joints: [] as Joint[], ligs: [] as Ligament[] };
    const hit = (s: string) => normalize(s).includes(n);
    return {
      joints: WITH_VIEWS.filter((j) => hit(j.polish) || hit(j.latin)).slice(0, 10),
      ligs: LIGAMENTS.filter((l) => hit(l.polish) || hit(l.latin) || hit(l.info)).slice(0, 20),
    };
  }, [q]);

  const view = joint.views[Math.min(viewIdx, joint.views.length - 1)];
  const image = lig && view.ligaments.includes(lig.id) ? lig.image : view.image;
  const spots = useMemo(() => spread(view.hotspots, view.ligaments), [view]);

  const pickJoint = (j: Joint) => {
    setJoint(j);
    setViewIdx(0);
    setLig(null);
  };
  const pickLig = (l: Ligament) => {
    const j = JOINTS.find((x) => x.id === l.jointId)!;
    setJoint(j);
    setViewIdx(Math.max(0, j.views.findIndex((v) => v.ligaments.includes(l.id))));
    setLig(l);
    setQ("");
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[220px_minmax(0,1fr)_340px]">
      <nav className="order-2 space-y-3 text-sm lg:order-none">
        {GROUPS.map((g) => (
          <div key={g}>
            <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-slate-400">{g}</p>
            <div className="flex flex-wrap gap-1.5 lg:flex-col lg:gap-1">
              {WITH_VIEWS.filter((j) => j.group === g).map((j) => (
                <button
                  key={j.id}
                  onClick={() => pickJoint(j)}
                  className={`rounded-lg border px-2.5 py-1.5 text-left ${j.id === joint.id ? "border-blue-700 bg-blue-700 text-white" : "border-slate-200 bg-white hover:border-blue-600"}`}
                >
                  {j.polish}
                </button>
              ))}
            </div>
          </div>
        ))}
      </nav>

      <div className="order-1 lg:order-none">
        {joint.views.length > 1 && (
          <div className="mb-2 flex gap-2 text-sm">
            {joint.views.map((v, i) => (
              <button
                key={v.image}
                onClick={() => {
                  setViewIdx(i);
                  if (lig && !v.ligaments.includes(lig.id)) setLig(null);
                }}
                className={`rounded-lg border px-3 py-1.5 ${i === viewIdx ? "border-blue-700 bg-blue-50 text-blue-800" : "border-slate-200 bg-white hover:border-blue-600"}`}
              >
                Widok {i + 1}
              </button>
            ))}
          </div>
        )}
        <div className="relative mx-auto aspect-square w-full max-w-[640px] rounded-2xl border border-slate-200 bg-white">
          <Image src={image} alt={lig ? lig.latin : joint.latin} fill sizes="(max-width: 640px) 100vw, 640px" className="object-contain" priority />
          {view.ligaments.map((id, i) => {
            const h = spots.get(id);
            const l = LIG.get(id)!;
            if (!h) return null;
            const active = lig?.id === id;
            return (
              <button
                key={id}
                onClick={() => setLig(active ? null : l)}
                style={{ left: `${h[0]}%`, top: `${h[1]}%` }}
                title={`${l.polish} - ${l.latin}`}
                className={`absolute flex h-7 w-7 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 text-xs font-bold shadow ${active ? "border-white bg-red-600 text-white" : "border-white bg-blue-700 text-white hover:bg-blue-900"}`}
              >
                {i + 1}
              </button>
            );
          })}
        </div>
        <p className="mt-2 text-center text-xs text-slate-500">Model 3D prawej strony ciała. Więzadła zaznaczono schematycznie na modelu kości.</p>
      </div>

      <aside className="order-3 space-y-4 lg:order-none">
        <div>
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Szukaj stawu lub więzadła, np. krzyżowe, ligamentum"
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-blue-600"
          />
          {(results.joints.length > 0 || results.ligs.length > 0) && (
            <div className="mt-2 max-h-80 overflow-auto rounded-lg border border-slate-200 bg-white text-sm">
              {results.joints.map((j) => (
                <button key={j.id} onClick={() => { pickJoint(j); setQ(""); }} className="block w-full border-b border-slate-100 px-3 py-2 text-left hover:bg-blue-50">
                  {j.polish} <span className="text-slate-400">- staw</span>
                  <span className="block text-xs italic text-slate-500">{j.latin}</span>
                </button>
              ))}
              {results.ligs.map((l) => (
                <button key={l.id} onClick={() => pickLig(l)} className="block w-full border-b border-slate-100 px-3 py-2 text-left hover:bg-blue-50">
                  {l.polish}
                  <span className="block text-xs italic text-slate-500">{l.latin}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {lig ? (
          <div className="rounded-2xl border border-red-200 bg-white p-4">
            <p className="text-xs uppercase tracking-wider text-red-700/70">Zaznaczone</p>
            <p className="text-xl font-semibold">{lig.polish}</p>
            <p className="italic text-slate-600">{lig.latin}</p>
            <p className="mt-3 text-sm font-semibold text-slate-800">Funkcja</p>
            <p className="text-sm leading-relaxed text-slate-700">{lig.info}</p>
            <button onClick={() => setLig(null)} className="mt-3 text-sm text-blue-800 underline">
              Pokaż cały staw
            </button>
          </div>
        ) : (
          <div className="rounded-2xl border border-slate-200 bg-white p-4">
            <p className="text-xs uppercase tracking-wider text-slate-400">Staw</p>
            <p className="text-xl font-semibold">{joint.polish}</p>
            <p className="italic text-slate-600">{joint.latin}</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-700">{joint.info}</p>
            {joint.details
              .filter((d) => d.title !== "Więzadła")
              .map((d) => (
                <div key={d.title} className="mt-3">
                  <p className="text-sm font-semibold text-slate-800">{d.title}</p>
                  <ul className="ml-4 list-disc text-sm leading-relaxed text-slate-700">
                    {d.items.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                </div>
              ))}
          </div>
        )}

        <div className="rounded-2xl border border-slate-200 bg-white p-4">
          <p className="mb-2 text-sm font-semibold text-slate-800">Więzadła i elementy stawu</p>
          <ol className="space-y-1 text-sm">
            {joint.ligaments.map((id) => {
              const l = LIG.get(id)!;
              const num = view.ligaments.indexOf(id);
              return (
                <li key={id}>
                  <button onClick={() => pickLig(l)} className={`flex w-full items-start gap-2 rounded-lg px-2 py-1 text-left hover:bg-blue-50 ${lig?.id === id ? "bg-red-50" : ""}`}>
                    <span className={`mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px] font-bold ${num >= 0 ? "bg-blue-700 text-white" : "bg-slate-200 text-slate-600"}`}>{num >= 0 ? num + 1 : "-"}</span>
                    <span>
                      {l.polish}
                      <span className="block text-xs italic text-slate-500">{l.latin}</span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
          <div className="mt-3 flex gap-2 text-sm">
            <Link href={`/nauka?uklad=kostno-stawowy&grupa=${joint.groupSlug}&podgrupa=${joint.subgroupSlug}`} className="rounded-lg bg-blue-700 px-3 py-1.5 text-white hover:bg-blue-800">
              Fiszki
            </Link>
            <Link href={`/quiz?uklad=kostno-stawowy&grupa=${joint.groupSlug}&podgrupa=${joint.subgroupSlug}`} className="rounded-lg border border-slate-200 px-3 py-1.5 hover:border-blue-600">
              Quiz
            </Link>
          </div>
        </div>
      </aside>
    </div>
  );
}
