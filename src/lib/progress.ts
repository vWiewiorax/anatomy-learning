export type Status = "known" | "unknown";

export const PROGRESS_KEY = "anatomia-fiszki:postep";

export function readProgress(): Record<string, Status> {
  try {
    return JSON.parse(localStorage.getItem(PROGRESS_KEY) ?? "{}");
  } catch {
    return {};
  }
}

export function writeProgress(p: Record<string, Status>) {
  localStorage.setItem(PROGRESS_KEY, JSON.stringify(p));
}

export function shuffled<T>(arr: T[]) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function normalize(s: string) {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ł/g, "l");
}
