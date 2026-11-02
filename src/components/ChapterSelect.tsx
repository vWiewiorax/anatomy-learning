"use client";

import { useRouter } from "next/navigation";

export type ChapterOption = { label: string; value: string };
export type ChapterGroup = { label: string; options: ChapterOption[] };

export default function ChapterSelect({ value, top, groups }: { value: string; top: ChapterOption[]; groups: ChapterGroup[] }) {
  const router = useRouter();
  return (
    <select
      value={value}
      onChange={(e) => router.push(e.target.value)}
      aria-label="Wybierz rozdział"
      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-base font-medium text-slate-800 shadow-sm outline-none focus:border-blue-500 sm:max-w-xl"
    >
      {top.map((o) => (
        <option key={o.value} value={o.value}>
          {o.label}
        </option>
      ))}
      {groups.map((g) => (
        <optgroup key={g.label} label={g.label}>
          {g.options.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </optgroup>
      ))}
    </select>
  );
}
