# Anatomia - fiszki

Aplikacja do nauki anatomii na fiszkach: układ kostno-stawowy i układ mięśniowy (133 fiszki). Na jednej stronie ilustracja i nazwa łacińska, na drugiej nazwa polska (kierunek można odwrócić). Postęp ("Umiem" / "Nie umiem") zapisuje się w przeglądarce.

## Uruchomienie (Windows, PowerShell)

```powershell
git clone https://github.com/vWiewiorax/anatomy-learning.git
cd anatomy-learning
npm install
npm run dev
```

Potem otwórz http://localhost:3000

## Dodawanie fiszek

Fiszki są w `src/data/cards.ts`, ilustracje w `public/cards/`.

## Ilustracje

Wikimedia Commons: BodyParts3D/Anatomography (DBCLS, CC BY-SA 2.1 JP), Gray's Anatomy (domena publiczna) i inne. Pełna lista autorów i licencji jest na stronie `/zrodla`.
