import type { Metadata } from "next";
import Review from "@/components/Review";

export const metadata: Metadata = { title: "Powtórka - Nie umiem" };

export default function ReviewPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-6">
      <Review />
    </div>
  );
}
