# Build Log

## Status

| Item | Status |
| --- | --- |
| Product | VulnBoard |
| Portfolio | Fischer Product Lab |
| Local path | `C:\Users\t_fis\dev\Vulnerability Dashboard` |
| GitHub repo | https://github.com/Fischer-Product-Lab/VulnBoard |
| Vercel URL | https://vuln-board.vercel.app/ |
| Branch | `main` expected |
| Data posture | Synthetic only |
| Runtime posture | Read-only demo |

## Build Narrative

VulnBoard began as a vulnerability metrics dashboard for executives and evolved into a broader Fischer Product Lab portfolio product. The dashboard was sharpened from a chart-heavy security operations surface into an executive decision brief with action asks, business exposure, SLA pressure, remediation trends, owner accountability, and a findings queue.

The portfolio landing page was also reframed from a single security-product entry point into a broader lab index for cyber, AI governance, trust, and operational risk products, with links to AgentOps and TrustDesk.

## Environment Notes

The project originally lived under OneDrive, which caused repeated Windows file-locking issues against `.next` output files. Symptoms included `EPERM`, `EBUSY`, slow compiling, and Turbopack panic loops after folder renames.

Resolution:

- Move the active project out of OneDrive.
- Use `C:\Users\t_fis\dev\Vulnerability Dashboard` as the local development path.
- Clear stale `.next` output after moves.
- Use GitHub for backup/versioning instead of OneDrive sync.

## Architecture Decisions

- Use synthetic TypeScript data in `src/data/vulnerabilities.ts`.
- Keep the V1 app read-only with no API write paths.
- Avoid secrets, external integrations, and environment variables.
- Use portfolio-grade executive language instead of scanner-centric copy.
- Place Finding Filters directly above the filtered findings table to make their scope obvious.
- Keep export actions as mock portfolio interactions in V1.

## Notable Fixes

- Wired reporting-period controls for 30D, 90D, and YTD.
- Wired dashboard filters, reset action, and export buttons.
- Reworked the top dashboard into an executive decision brief.
- Standardized severity and SLA status badge widths.
- Moved filters above the findings table and renamed them Finding Filters.
- Reframed the landing page as a multi-product Fischer Product Lab hub.
- Moved the project from OneDrive into local `dev` to avoid Next.js build-cache locks.

## Verification

Latest successful checks after moving out of OneDrive:

```powershell
npm.cmd run lint
npm.cmd run build
```

Both passed locally.

## Revenue Funnel Publication Candidate — August 23, 2026

The local `codex/revenue-funnel` branch preserves the cinematic portfolio and
adds an approval-gated revenue layer: the AI Vendor Review Acceleration Sprint,
its synthetic decision memo, the graduated-authority case study, and dedicated
launch pages for Hit Me and Fairway Frenzy.

The vendor-review service page now includes a browser-only current-workflow
baseline. A prospect can model annual review effort, rework, and labor cost,
compare the fixed $5,000 sprint fee without treating it as promised savings,
and carry the self-entered figures into a fit-check email draft. The calculator
has no submission endpoint, analytics event, persistence, production write, or
external integration; nothing is sent unless the visitor chooses to send the
email from their own mail app.

Verification for this revision:

```shell
npm run test:revenue
npm run lint
npx tsc --noEmit
npm run build
```

The four focused calculation and email-draft tests pass, the production build
generates all 24 static routes, and desktop plus 390-pixel browser checks cover
recalculation, reset, bounded inputs, zero-denominator copy, the generated
draft, horizontal overflow, and browser-console errors. This is a local
publication candidate only; no branch push or deployment is implied.

## GitHub Hardening Plan

Before public launch:

- Commit `.github/dependabot.yml`
- Commit `.github/workflows/codeql.yml`
- Enable Dependabot alerts and automated security fixes
- Verify secret scanning/push protection
- Protect `main` branch after the initial portfolio publish
- Use PR-based changes after initial publish

## Vercel Deployment

- Production URL: https://vuln-board.vercel.app/
- Deployment source: GitHub `main` branch imported into Vercel
- Framework settings: default Next.js configuration
- Environment variables: none required for V1
