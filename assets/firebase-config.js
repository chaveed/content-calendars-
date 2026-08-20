/* ═══════════════════════════════════════════════
   FIREBASE CONFIG — one place to edit for the ENTIRE site.
   Every client page reads window.FIREBASE_DATABASE_URL from
   here, so you only paste your credentials once.

   HOW TO FILL THIS IN:
   1. Create a free Firebase project at https://console.firebase.google.com
      (see /README.md in this site for exact steps).
   2. In that project, enable "Realtime Database" (NOT Firestore).
   3. Copy the "Realtime Database" URL it gives you — it looks like:
      https://YOUR-PROJECT-default-rtdb.firebaseio.com
   4. Paste it below, replacing the placeholder string.
   5. Set your database Rules (Realtime Database → Rules tab) to:
      {
        "rules": {
          ".read": true,
          ".write": true
        }
      }
      This site has no login system, so anyone with the link can
      edit — that matches how the original Coffee Spot calendar
      works. If you want it locked down later, this is the file
      to revisit.

   Until you fill this in, every page still works perfectly —
   it just falls back to browser-local storage only (no live
   sync between teammates) until a real URL is here.
   ═══════════════════════════════════════════════ */
window.FIREBASE_DATABASE_URL = "PASTE_YOUR_FIREBASE_DATABASE_URL_HERE";
