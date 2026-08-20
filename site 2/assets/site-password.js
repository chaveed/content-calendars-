/* ═══════════════════════════════════════════════
   SITE PASSWORD — one place to edit for the whole site.
   Change this to whatever you want the team to type in.

   IMPORTANT — read this before relying on it:
   This is a "soft" gate, not real security. Because this is a
   static site with no server, the password lives in this plain
   text file and the check happens in the visitor's browser — so
   anyone who opens the page's source code (or your GitHub repo)
   can read it, and the Firebase database itself still accepts
   reads/writes directly if someone has that URL. This gate is
   good for keeping randoms who stumble on the link from browsing
   in, not for protecting anything sensitive. If you need real
   protection later, the follow-up is Firebase Authentication
   (login-per-person) — a bigger change, not required to use this.
   ═══════════════════════════════════════════════ */
window.SITE_PASSWORD = "venpro2026";
