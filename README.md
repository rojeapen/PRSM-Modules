# PRSM Modules — data-driven training modules + CMS

A React + Vite app that renders interactive training modules (sections/"Screens"
of elements: text, callouts, quizzes, videos, etc.) from a Firebase database,
plus a built-in Google-Forms-style CMS for authoring them.

- **Player** (public): `#/m/:slug` renders a published module from Firestore.
  `#/` redirects to the default module. Falls back to a bundled seed when the
  database has no matching document (so the app works before Firebase is set up).
- **Admin** (sign-in required): `#/admin` lists modules; `#/admin/m/:slug` opens
  the editor (screen rail · element canvas · live preview · save/publish).

Routing uses `HashRouter` so it deploys to static hosting (GitHub Pages) with no
server rewrites.

## Develop

```bash
npm install
cp .env.example .env.local   # fill with your Firebase web config (see below)
npm run dev
```

Without `.env.local`, the player still renders bundled seed modules (e.g.
`#/m/anaphylaxis`); the CMS and saving require a configured Firebase project.

`npm run build` (type-check + bundle) · `npm run lint`.

## Firebase setup

1. Create a Firebase project. Enable **Firestore**, **Authentication
   (Email/Password)**, and **Storage**.
2. Add a Web App and copy its config into `.env.local` (`VITE_FIREBASE_*`).
   These are client-side config values, not secrets — access is controlled by
   the security rules. Do **not** commit `.env.local`.
3. Create admin user(s) in Authentication → Users (email/password). Any
   signed-in user is treated as an admin.
4. Deploy the security rules in `firestore.rules` and `storage.rules` (Firebase
   console or `firebase deploy --only firestore:rules,storage`).
5. Sign in at `#/admin` and click **Import sample module** to seed Firestore
   with the Anaphylaxis module, or **+ New module** to start fresh.

## Architecture

- `src/cms/types.ts` — `ModuleData` → `ScreenData[]` → `ElementData` (a
  discriminated union of all element types).
- `src/cms/firestore.ts`, `src/cms/auth.ts`, `src/firebase.ts` — data + auth.
- `src/cms/seed/` — bundled modules (seed + player fallback).
- `src/elements/*` — one presentational component per element type.
- `src/player/` — `ElementRenderer` (type → component), `ScreenRenderer`,
  `ModulePlayer` (navigation + gating), `gating.ts`.
- `src/admin/` — `ModuleList`, `ModuleEditor`, `ScreenRail`, `ElementCanvas`,
  `ElementForm` (per-type fields), `PreviewPane`, `LoginPage`.
- `src/icons.tsx` + `src/components/Icon.tsx` — curated icon registry used by
  elements and the editor's icon picker.

Author HTML is sanitized with DOMPurify (`src/cms/sanitize.ts`) before render.

## Deploy (GitHub Pages)

Build and publish `dist/` as before; the `CNAME` and custom domain are
unchanged. HashRouter means every route resolves from `index.html` with no 404
fallback needed.
