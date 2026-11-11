import type { Metadata } from "next";
import JointExplorer from "@/components/JointExplorer";

export const metadata: Metadata = { title: "Stawy i więzadła - wyszukaj i podświetl" };

export default function JointsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-6">
      <h1 className="mb-1 text-2xl font-bold tracking-tight">Stawy i więzadła</h1>
      <p className="mb-4 text-sm text-slate-600">Wybierz staw, kliknij punkt na ilustracji albo wyszukaj więzadło. Wybrana struktura podświetli się na koralowo, obok zobaczysz jej funkcję.</p>
      <JointExplorer />
    </div>
  );
}
