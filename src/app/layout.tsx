import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const montserrat = Montserrat({ variable: "--font-montserrat", subsets: ["latin", "latin-ext"] });

export const metadata: Metadata = {
  title: "Fiszki z anatomii - łacina i polski",
  description: "Fiszki do nauki anatomii: układ kostno-stawowy według rozdziałów i układ mięśniowy, z ilustracjami, nazwy po łacinie i po polsku.",
};

const NAV = [
  { href: "/nauka?uklad=kostno-stawowy", label: "Kości i stawy" },
  { href: "/nauka?uklad=miesniowy", label: "Mięśnie" },
  { href: "/szkielet", label: "Szkielet" },
  { href: "/quiz?uklad=kostno-stawowy", label: "Quiz" },
  { href: "/powtorka", label: "Powtórka" },
];

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pl">
      <body className={`${montserrat.variable} font-sans antialiased min-h-screen flex flex-col`}>
        <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-4 py-3">
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden>
                  <path d="M7 4.5a2.5 2.5 0 1 0-2.4 3.2L16.3 19.4a2.5 2.5 0 1 0 3.2-2.4 2.5 2.5 0 1 0-2.5-2.5L9.5 7a2.5 2.5 0 1 0-2.5-2.5Z" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="leading-tight">
                <span className="block text-base font-bold text-slate-900">Anatomia</span>
                <span className="block text-xs font-medium text-slate-500">fiszki po łacinie i polsku</span>
              </span>
            </Link>
            <nav className="-mx-2 flex w-full flex-wrap justify-between text-[13px] font-semibold text-slate-700 sm:mx-0 sm:w-auto sm:justify-end sm:gap-1 sm:text-sm">
              {NAV.map((n) => (
                <Link key={n.href} href={n.href} className="whitespace-nowrap rounded-lg px-2 py-1.5 hover:bg-blue-50 hover:text-blue-700 sm:px-3 sm:py-2">
                  {n.label}
                </Link>
              ))}
            </nav>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t border-slate-200 bg-white text-xs text-slate-500">
          <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-x-4 gap-y-1 px-4 py-5">
            <span>Ilustracje kości wykonane na podstawie modeli BodyParts3D, (c) DBCLS, CC BY-SA 2.1 JP. Ilustracje mięśni: Wikimedia Commons.</span>
            <Link href="/zrodla" className="underline hover:text-slate-800">
              Autorzy i licencje
            </Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
