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

## Before App Store submission

The current TwentyQuestions privacy and terms pages contain explicit TODO markers because this legal repository does not contain the app source code.

Inspect the actual TwentyQuestions app repository and update these pages so they accurately describe:

- data collected
- local storage
- analytics and crash reporting
- accounts/authentication
- third-party SDKs/services
- ads
- in-app purchases/subscriptions
- user-generated content
- data retention/deletion
- intended age audience
- support contact

Do not claim that data is not collected, shared, or tracked unless verified from the application and its third-party services.

## Adding another app

Copy the `twentyquestions` directory, rename the folder to the new app slug, then fully rewrite the app-specific legal text.
