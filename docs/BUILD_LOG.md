# Build Log

## Status

| Item | Status |
| --- | --- |
| Product | VulnBoard |
| Portfolio | Fischer Product Lab |
| Local path | `C:\Users\t_fis\dev\Vulnerability Dashboard` |
| GitHub repo | Pending: `Fischer-Product-Lab/vulnboard` |
| Vercel URL | Pending |
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

## GitHub Hardening Plan

Before public launch:

- Commit `.github/dependabot.yml`
- Commit `.github/workflows/codeql.yml`
- Enable Dependabot alerts and automated security fixes
- Verify secret scanning/push protection
- Protect `main` branch
- Use PR-based changes after initial publish

## Vercel Plan

1. Push repo to `Fischer-Product-Lab/vulnboard`.
2. Import repo in Vercel.
3. Use default Next.js settings.
4. Configure no environment variables for V1.
5. Update README, PRD, highlights, and this build log with the live URL.