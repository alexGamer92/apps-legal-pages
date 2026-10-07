# App Legal Pages

Public legal and support pages for apps published by **alexGamer92**.

## Structure

Each app gets its own folder:

```
<app-slug>/
  privacy/index.html
  terms/index.html
  support/index.html
```

The first app is `twentyquestions`.

## GitHub Pages

Enable GitHub Pages in:

**Repository → Settings → Pages → Build and deployment**

Use:

- Source: **Deploy from a branch**
- Branch: **main**
- Folder: **/(root)**

Once enabled, the TwentyQuestions pages should be available at:

- `https://alexgamer92.github.io/apps-legal-pages/twentyquestions/privacy/`
- `https://alexgamer92.github.io/apps-legal-pages/twentyquestions/terms/`
- `https://alexgamer92.github.io/apps-legal-pages/twentyquestions/support/`

## TwentyQuestions pages

The TwentyQuestions privacy policy, terms and support pages describe the app as audited on 2026-10-07
(Supabase, Apple and Google sign-in, RevenueCat purchases; no ads, analytics or tracking). Update them
whenever the app's data handling changes, and keep the support contact current. They are not
attorney-reviewed.

## Adding another app

Copy the `twentyquestions` directory, rename the folder to the new app slug, then fully rewrite the app-specific legal text.
