# VenPro Content Calendars — Setup & Deploy Guide

This is a static site — no server, no monthly hosting bill. It's built to run on
**GitHub Pages** (free, forever, no credit card) with **Firebase Realtime Database**
(free "Spark" plan) handling the live/realtime sync between everyone on the team.

Everything below is written for someone doing this for the first time. It should
take about 15 minutes total.

---

## Part 1 — Create the free Firebase project (~5 min)

1. Go to **console.firebase.google.com** and sign in with a Google account (a
   VenPro Google account is fine, or your personal one — either works).
2. Click **"Add project"**. Name it something like `venpro-content-calendars`.
3. When asked about Google Analytics, you can turn it **off** — not needed here.
4. Once the project is created, in the left sidebar click **Build → Realtime
   Database** (NOT "Firestore Database" — they're different products; this
   site uses Realtime Database specifically).
5. Click **"Create Database"**. Pick a location close to El Paso (e.g.
   `us-central1`). Start in **test mode** for now (we'll set the real rules in
   the next step).
6. Once it's created, you'll see a database URL at the top of the page that
   looks like:
   `https://venpro-content-calendars-default-rtdb.firebaseio.com`
   **Copy that whole URL.**
7. Click the **"Rules"** tab (next to "Data") and replace whatever is there
   with:
   ```json
   {
     "rules": {
       ".read": true,
       ".write": true
     }
   }
   ```
   Click **Publish**. (This site has no login system — anyone with the link
   can view and edit, same as the original Coffee Spot calendar. That's the
   trade-off for zero setup and zero cost. If you ever want to lock it down
   with a password, that's a follow-up step, not required to launch.)

That's the entire Firebase setup. One project, one free database, shared by
all 8 client pages (each client's data is kept separate automatically by a
name prefix, so nothing collides).

---

## Part 2 — Paste your database URL into the site (~1 min)

Open **`assets/firebase-config.js`** and replace the placeholder line:

```js
window.FIREBASE_DATABASE_URL = "PASTE_YOUR_FIREBASE_DATABASE_URL_HERE";
```

with the URL you copied in step 6 above, e.g.:

```js
window.FIREBASE_DATABASE_URL = "https://venpro-content-calendars-default-rtdb.firebaseio.com";
```

Save the file. **This is the only file you ever need to touch to change
Firebase credentials** — every client page reads from it.

(The Coffee Spot page also still has its own original database URL as a
fallback baked in, so it keeps working immediately either way — but once you
fill in the shared config, all 8 pages including Coffee Spot will use the
same one project.)

---

## Part 2.5 — Set the site password (~1 min)

Every page (landing page + all 8 clients) is behind a simple password gate now.
Open **`assets/site-password.js`** and change:

```js
window.SITE_PASSWORD = "venpro2026";
```

to whatever you want the team to type in. Save the file — that's it, applies
everywhere.

**Read this before you rely on it:** this is a *soft* gate, not real security.
It's a static site with no server, so the password check happens in the
visitor's browser and the correct password is sitting in plain text in this
file — anyone who opens "view source" or your GitHub repo can read it. It'll
stop a random person who stumbles on the link from browsing in, but it will
not stop someone determined, and it does **not** lock down the Firebase
database itself (that's still open to anyone with the URL, per the Realtime
Database rules from Part 1). Good enough for "keep this off Google and out of
casual hands"; not good enough for anything truly sensitive. If you want real
per-person logins later, that's Firebase Authentication — a bigger follow-up
project, not required to use this.

Once unlocked, a browser stays unlocked (it remembers via local storage) until
someone clicks the **🔒 Lock** button in the header, which logs that browser
out again.

---

## Part 3 — Put your team in `assets/team.js` (~1 min)

This file has the "who's working today?" picker list. It currently has:
Edgar, Naomi, Andrew, Andre, Alexa, Audrey, Carmen (pulled from what was
already in the Coffee Spot file, plus known VenPro team members). Add,
remove, or recolor anyone — this one file controls it across all 8 pages.

---

## Part 4 — Host it for free on GitHub Pages (~8 min)

If you don't already have a GitHub account, create one free at github.com
(just an email + password, no card).

**Easiest path — no command line needed:**

1. On github.com, click the **+** in the top right → **New repository**.
   Name it e.g. `content-calendars`. Keep it **Public**. Don't add a README
   (we already have one). Click **Create repository**.
2. On the new repo's page, click **"uploading an existing file"** (or drag
   files onto the page).
3. Drag in the entire contents of this `site` folder — `index.html`, the
   `assets` folder, and the `clients` folder, all together — and commit.
4. Go to the repo's **Settings → Pages** (left sidebar).
5. Under "Build and deployment", set **Source: Deploy from a branch**,
   **Branch: main**, folder **/ (root)**. Click **Save**.
6. Wait about a minute, then refresh — GitHub will show you a live URL like:
   `https://yourusername.github.io/content-calendars/`

That URL is the whole site, live, free, forever. Share it with the team.

**If you'd rather use the command line** (faster once you're set up):
```bash
cd site
git init
git add .
git commit -m "VenPro client content calendars"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/content-calendars.git
git push -u origin main
```
Then do steps 4–6 above.

**Alternative: Firebase Hosting instead of GitHub Pages** — since you already
have the Firebase project from Part 1, you can host the site there too
instead of GitHub Pages, if you'd rather manage everything in one console.
That needs the Firebase CLI (`npm install -g firebase-tools`, then
`firebase login`, `firebase init hosting` pointing at this `site` folder, then
`firebase deploy`) — all free on the Spark plan, just a few more steps than
GitHub Pages since it needs a one-time login from your terminal.

---

## How updates work after launch

- **Content edits, marking things done, adding new video ideas** — anyone on
  the team does this directly on the live site. It syncs instantly to
  everyone else through Firebase. Nothing to redeploy.
- **Structural changes** (new client, new pillar, brand color change, adding
  someone to the team picker) — those are file edits. Re-upload the changed
  file(s) to the GitHub repo (or `git push` again) and GitHub Pages updates
  automatically within a minute or two.

---

## Adding a 9th client later

1. Duplicate any folder under `clients/` (e.g. copy `clients/smla/` to
   `clients/new-client/`).
2. Edit `clients/new-client/data.js` — change `CLIENT.slug` to something
   unique (this is what keeps its Firebase data separate from everyone
   else's), plus brand name/colors/pillars/content.
3. Add a card for it to `index.html` (the landing page) linking to
   `clients/new-client/index.html`.
4. Push the new files. Done — no new Firebase project needed.

---

## What's a placeholder right now

The Coffee Spot page has your real, existing 50-post calendar — nothing
changed there except a "← All Clients" link and pointing it at the shared
database.

The other 7 client pages are fully functional (live sync, editing, adding
video ideas, done-tracking all work today) but only have a handful of sample
posts loaded — they're marked with an on-page banner and, where the content
itself is a placeholder, a `[SAMPLE]` tag in the title. Send the real content
ideas and ad campaigns for each client and they'll replace the samples — or
add/edit them directly on the live page once it's deployed.
