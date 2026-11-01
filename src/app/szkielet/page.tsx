import type { Metadata } from "next";
import SkeletonExplorer from "@/components/SkeletonExplorer";

export const metadata: Metadata = { title: "Szkielet - wyszukaj i podświetl kość" };

export default function SkeletonPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-6">
      <h1 className="mb-4 text-2xl font-bold tracking-tight">Szkielet</h1>
      <SkeletonExplorer />
    </div>
  );
}
