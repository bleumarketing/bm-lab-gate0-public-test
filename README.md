# BM LAB Website 2026: Gate 0 toolchain verification

Throwaway test project. It contains no BLEU or client material and is not the production website.

Purpose, approved by ASTRA (AR-01, 2026-11-15): prove in GitHub Actions that packages install, Next.js builds, and automated tests run.

The workflow in `.github/workflows/gate0.yml` runs on every push:

1. `npm install` (Next.js, React, GSAP, Vitest, Playwright)
2. `next build`
3. Unit tests (Vitest)
4. Browser tests in Chromium at 1440 px and 375 px, with screenshots

Logs, the resolved `package-lock.json`, screenshots and the Playwright report are uploaded as the `gate0-evidence` artifact.

Out of scope: deployment, Cloudflare Pages, paid services, production code.
