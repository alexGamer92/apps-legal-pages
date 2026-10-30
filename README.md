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

## Cloudflare Pages (TwentyQuestions)

The TwentyQuestions pages are published by the Cloudflare Pages project `twentyquestions-legal`, which
deploys on every push to `main`. The site serves `twentyquestions/*` and `assets/` at its root, with the
privacy policy as the home page:

- `https://twentyquestions-legal.pages.dev/privacy/`
- `https://twentyquestions-legal.pages.dev/terms/`
- `https://twentyquestions-legal.pages.dev/support/`

The app's Profile links (`AppLinks` in `twentyq/.../Screens/ProfileScreen.swift`) point here; App Store
Connect's privacy policy, terms and support URLs should be these too.

## TwentyQuestions pages

The TwentyQuestions privacy policy, terms and support pages describe build 17 as checked on 2026-10-23:
no registration or sign-in (an anonymous Supabase account from first launch), an optional Game Center link
(only a SHA-256 hash of the team player ID is stored, never the nickname), automatic player names, RevenueCat
purchases, "Delete my data" in Profile, and the 90-day purge of unlinked guests that never had credits;
no ads or tracking. Sources: `twentyq/docs/specs/2026-10-23-no-sign-in-*.md`, the
`20261023*` migrations and the `game-center-link`, `delete-account` and `revenuecat-webhook` functions.
Update them whenever the app's data handling changes, and keep the support contact current. They are not
attorney-reviewed.

## Adding another app

Copy the `twentyquestions` directory, rename the folder to the new app slug, then fully rewrite the app-specific legal text.

## Chef Enzo pages
- `https://alexgamer92.github.io/apps-legal-pages/chefenzo/privacy/`
- `https://alexgamer92.github.io/apps-legal-pages/chefenzo/terms/`

These pages describe the pre-release implementation reviewed on 2026-10-18: local
saves, no player account or cloud save, unavailable ads and unconfigured purchases.
Unity LevelPlay and Apple subscriptions through Unity IAP 5.4.4 / StoreKit 2 are
planned, not represented as live. Before enabling them, verify SDK data flows,
actual mediated partners, consent/ATT controls and provider retention/transfers;
update the policy and App Store privacy answers together. Confirm the subscription
benefits/content schedule and localized price before offering purchases.
Support uses the existing developer contact. These pages are not attorney-reviewed.

## Honest Minutes pages

Served by the Cloudflare Pages project `honest-minutes` from this repo (`main`). The build copies
`honestminutes/*` and `assets/` to the site root:

- `https://honest-minutes.pages.dev/privacy/`
- `https://honest-minutes.pages.dev/terms/`
- `https://honest-minutes.pages.dev/support/`

Build command: `mkdir -p dist && cp -R assets honestminutes/* dist/`; output directory: `dist`.

They describe Honest Minutes 1.0 as of 2026-10-28: no account, no server, no analytics; pages stored only on the
device; an optional Game Center sign-in (best streak, total minutes, five achievements); a one-time Pro purchase
through Apple; local reminders. Source: the MinutesWritten repo. Not attorney-reviewed.

## Thumbrot pages

Served by the Cloudflare Pages project `thumbrot-legal` from this repo (`main`), like the other apps. The build
copies `thumbrot/*` and `assets/` to the site root (`thumbrot/index.html` is the home page):

- `https://thumbrot-legal.pages.dev/privacy/`
- `https://thumbrot-legal.pages.dev/terms/`
- `https://thumbrot-legal.pages.dev/support/`
- `https://thumbrot-legal.pages.dev/promote/`

Build command: `mkdir -p dist && cp -R assets thumbrot/* dist/`; output directory: `dist`.

The app and App Store Connect use the short links on the Cloudflare Pages project `thumbrot`
(`https://thumbrot.pages.dev/privacy`, `/terms`, `/support`, `/promote`, and `/` for the home page), which redirect
here; their `_redirects` lives in the Thumbrot repo (`remote/_redirects`). So these pages can move without an app update.
The promote page offers free card swaps only: the app links to it, and Apple doesn't allow an app to link to
the sale of ad space in that app (guideline 3.1.3(g)), so paid placements are never mentioned there.
The pages describe Thumbrot 1.0 as of 2026-10-30. Source: the Thumbrot repo. Not attorney-reviewed.
