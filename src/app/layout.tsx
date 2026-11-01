import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin", "latin-ext"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin", "latin-ext"] });

export const metadata: Metadata = {
  title: "Fiszki z anatomii - łacina i polski",
  description: "Fiszki do nauki anatomii: układ kostno-stawowy i układ mięśniowy, z ilustracjami, nazwy po łacinie i po polsku.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pl">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased min-h-screen flex flex-col`}>
        <header className="border-b border-stone-200 bg-white/80 backdrop-blur sticky top-0 z-20">
          <div className="mx-auto max-w-5xl px-4 h-14 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
              <svg viewBox="0 0 24 24" className="h-6 w-6 text-teal-700" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
                <path d="M7 4.5a2.5 2.5 0 1 0-2.4 3.2L16.3 19.4a2.5 2.5 0 1 0 3.2-2.4 2.5 2.5 0 1 0-2.5-2.5L9.5 7a2.5 2.5 0 1 0-2.5-2.5Z" strokeLinejoin="round" />
              </svg>
              Anatomia - fiszki
            </Link>
            <nav className="flex gap-4 text-sm text-stone-600">
              <Link href="/nauka?uklad=kostno-stawowy" className="hover:text-stone-900">Kości i stawy</Link>
              <Link href="/nauka?uklad=miesniowy" className="hover:text-stone-900">Mięśnie</Link>
              <Link href="/zrodla" className="hidden sm:inline hover:text-stone-900">Źródła ilustracji</Link>
            </nav>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t border-stone-200 text-xs text-stone-500">
          <div className="mx-auto max-w-5xl px-4 py-4 flex flex-wrap gap-x-4 gap-y-1 justify-between">
            <span>Ilustracje: Wikimedia Commons (BodyParts3D/Anatomography, Gray&apos;s Anatomy i inne), licencje CC i domena publiczna.</span>
            <Link href="/zrodla" className="underline hover:text-stone-800">Autorzy i licencje</Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
