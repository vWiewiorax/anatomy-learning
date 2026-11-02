"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { CARDS, type Card } from "@/data/cards";
import { SKELETON_BONES, type SkeletonBone } from "@/data/skeleton";
import { normalize } from "@/lib/progress";

type View = "front" | "back";
const W = 710;
const H = 1800;
const BY_ID = new Map(SKELETON_BONES.map((b) => [b.id, b]));
const DETAILS = CARDS.filter((c) => c.system === "kostno-stawowy" && c.image);

function useIdMap(view: View) {
  const [data, setData] = useState<Uint8ClampedArray | null>(null);
  useEffect(() => {
    const img = new window.Image();
    img.onload = () => {
      const c = document.createElement("canvas");
      c.width = W;
      c.height = H;
      const ctx = c.getContext("2d", { willReadFrequently: true })!;
      ctx.imageSmoothingEnabled = false;
      ctx.drawImage(img, 0, 0);
      setData(ctx.getImageData(0, 0, W, H).data);
    };
    img.src = `/szkielet/${view}_id.png`;
  }, [view]);
  return data;
}

export default function SkeletonExplorer() {
  const [view, setView] = useState<View>("front");
  const [zoom, setZoom] = useState(1);
  const [sel, setSel] = useState<number | null>(null);
  const [hover, setHover] = useState<SkeletonBone | null>(null);
  const [detail, setDetail] = useState<Card | null>(null);
  const [q, setQ] = useState("");
  const front = useIdMap("front");
  const back = useIdMap("back");
  const ids = view === "front" ? front : back;
  const overlay = useRef<HTMLCanvasElement>(null);

  const idAt = (d: Uint8ClampedArray | null, x: number, y: number) => {
    if (!d || x < 0 || y < 0 || x >= W || y >= H) return 0;
    const k = (Math.floor(y) * W + Math.floor(x)) * 4;
    return d[k] * 65536 + d[k + 1] * 256 + d[k + 2];
  };

  useEffect(() => {
    const c = overlay.current;
    if (!c) return;
    const ctx = c.getContext("2d")!;
    ctx.clearRect(0, 0, W, H);
    if (!ids || !sel) return;
    const out = ctx.createImageData(W, H);
    for (let k = 0; k < ids.length; k += 4) {
      if (ids[k] * 65536 + ids[k + 1] * 256 + ids[k + 2] === sel) {
        out.data[k] = 220;
        out.data[k + 1] = 56;
        out.data[k + 2] = 43;
        out.data[k + 3] = 150;
      }
    }
    ctx.putImageData(out, 0, 0);
  }, [ids, sel]);

  const visibleIn = (d: Uint8ClampedArray | null, id: number) => {
    if (!d) return false;
    for (let k = 0; k < d.length; k += 16) if (d[k] * 65536 + d[k + 1] * 256 + d[k + 2] === id) return true;
    return false;
  };

  const pickBone = (id: number) => {
    setSel(id);
    setDetail(null);
    if (!visibleIn(view === "front" ? front : back, id) && visibleIn(view === "front" ? back : front, id)) setView(view === "front" ? "back" : "front");
  };

  const pos = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    return [((e.clientX - r.left) / r.width) * W, ((e.clientY - r.top) / r.height) * H];
  };

  const results = useMemo(() => {
    const t = normalize(q.trim());
    if (t.length < 2) return { bones: [], details: [] };
    const hit = (s: string) => normalize(s).includes(t);
    return {
      bones: SKELETON_BONES.filter((b) => hit(b.polish) || hit(b.latin)).slice(0, 12),
      details: DETAILS.filter((c) => !c.id.startsWith("b-") && (hit(c.polish) || hit(c.latin))).slice(0, 12),
    };
  }, [q]);

  const bone = sel ? BY_ID.get(sel) : undefined;
  const related = bone ? DETAILS.filter((c) => c.subgroupSlug === bone.subgroupSlug && c.groupSlug === bone.groupSlug) : [];

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_380px]">
      <div>
        <div className="mb-3 flex flex-wrap items-center gap-2 text-sm">
          <div className="inline-flex rounded-lg border border-slate-200 bg-white p-1">
            {(["front", "back"] as const).map((v) => (
              <button key={v} onClick={() => setView(v)} className={`rounded-md px-4 py-1.5 ${view === v ? "bg-blue-700 text-white" : "text-slate-600"}`}>
                {v === "front" ? "Widok z przodu" : "Widok z tyłu"}
              </button>
            ))}
          </div>
          <label className="inline-flex items-center gap-2 text-slate-600">
            Powiększenie
            <input type="range" min={1} max={3} step={0.5} value={zoom} onChange={(e) => setZoom(Number(e.target.value))} className="accent-blue-700" />
          </label>
        </div>
        <div className="h-[75vh] overflow-auto rounded-2xl border border-slate-200 bg-white">
          <div
            className="relative mx-auto cursor-crosshair"
            style={{ height: `calc(75vh * ${zoom} - 4px)`, aspectRatio: `${W} / ${H}` }}
            onClick={(e) => {
              const [x, y] = pos(e);
              const id = idAt(ids, x, y);
              if (id) pickBone(id);
            }}
            onMouseMove={(e) => {
              const [x, y] = pos(e);
              setHover(BY_ID.get(idAt(ids, x, y)) ?? null);
            }}
            onMouseLeave={() => setHover(null)}
          >
            <Image src={`/szkielet/${view}.webp`} alt="Szkielet człowieka" fill sizes="710px" className="select-none" priority unoptimized draggable={false} />
            <canvas ref={overlay} width={W} height={H} className="absolute inset-0 h-full w-full" />
          </div>
        </div>
        <p className="mt-2 text-xs text-slate-500 min-h-4">{hover ? `${hover.polish} - ${hover.latin}${hover.side ? ` (strona ${hover.side})` : ""}` : "Najedź lub kliknij kość. Prawa strona ciała jest w widoku z przodu po lewej."}</p>
      </div>

      <aside className="space-y-4">
        <div>
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Szukaj po polsku lub po łacinie, np. kręg, femur, wyrostek"
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-blue-600"
          />
          {(results.bones.length > 0 || results.details.length > 0) && (
            <div className="mt-2 max-h-80 overflow-auto rounded-lg border border-slate-200 bg-white text-sm">
              {results.bones.map((b) => (
                <button key={b.id} onClick={() => pickBone(b.id)} className="block w-full border-b border-slate-100 px-3 py-2 text-left hover:bg-blue-50">
                  {b.polish} {b.side && <span className="text-slate-400">({b.side})</span>}
                  <span className="block text-xs italic text-slate-500">{b.latin}</span>
                </button>
              ))}
              {results.details.map((c) => (
                <button key={c.id} onClick={() => setDetail(c)} className="block w-full border-b border-slate-100 px-3 py-2 text-left hover:bg-blue-50">
                  {c.polish} <span className="text-slate-400">- {c.subgroup}</span>
                  <span className="block text-xs italic text-slate-500">{c.latin}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {detail ? (
          <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden">
            <div className="relative h-72">
              <Image src={detail.image!} alt={detail.latin} fill sizes="380px" className="object-contain p-2" />
            </div>
            <div className="border-t border-slate-100 p-4">
              <p className="text-lg font-semibold">{detail.polish}</p>
              <p className="italic text-slate-600">{detail.latin}</p>
              <p className="mt-1 text-xs text-slate-500">
                {detail.group} - {detail.subgroup}
              </p>
              <button onClick={() => setDetail(null)} className="mt-3 text-sm text-blue-800 underline">
                Wróć
              </button>
            </div>
          </div>
        ) : bone ? (
          <div className="rounded-2xl border border-slate-200 bg-white p-4">
            <p className="text-xs uppercase tracking-wider text-slate-400">Zaznaczona kość {bone.side ? `(strona ${bone.side})` : ""}</p>
            <p className="text-xl font-semibold">{bone.polish}</p>
            <p className="italic text-slate-600">{bone.latin}</p>
            <div className="mt-3 flex gap-2 text-sm">
              <Link href={`/nauka?uklad=kostno-stawowy&grupa=${bone.groupSlug}&podgrupa=${bone.subgroupSlug}`} className="rounded-lg bg-blue-700 px-3 py-1.5 text-white hover:bg-blue-800">
                Fiszki
              </Link>
              <Link href={`/quiz?uklad=kostno-stawowy&grupa=${bone.groupSlug}&podgrupa=${bone.subgroupSlug}`} className="rounded-lg border border-slate-200 px-3 py-1.5 hover:border-blue-600">
                Quiz
              </Link>
            </div>
            {related.length > 0 && (
              <div className="mt-4 grid grid-cols-3 gap-2">
                {related.slice(0, 18).map((c) => (
                  <button key={c.id} onClick={() => setDetail(c)} className="rounded-lg border border-slate-100 p-1 text-left hover:border-blue-600" title={`${c.polish} - ${c.latin}`}>
                    <span className="relative block aspect-square">
                      <Image src={c.image!} alt="" fill sizes="120px" className="object-contain" />
                    </span>
                    <span className="block truncate text-[11px] text-slate-600">{c.polish}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        ) : (
          <p className="rounded-2xl border border-dashed border-slate-300 bg-white p-4 text-sm text-slate-600">
            Kliknij kość na szkielecie albo wyszukaj nazwę. Zobaczysz nazwę po polsku i po łacinie oraz szczegóły tej części (wyrostki, łuki, kłykcie) podświetlone na modelu.
          </p>
        )}
      </aside>
    </div>
  );
}
