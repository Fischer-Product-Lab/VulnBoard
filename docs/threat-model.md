# Threat Model

## Scope

VulnBoard is a read-only portfolio demo for vulnerability metrics and executive security reporting. It uses synthetic data and has no production integrations, authentication, write APIs, file uploads, AI calls, or secrets in V1.

## Assets

| Asset | Sensitivity | Notes |
| --- | --- | --- |
| Synthetic vulnerability data | Low | Mock data only; no real scanner exports |
| UI source code | Public | Intended for GitHub portfolio review |
| Documentation | Public | Should avoid employer/customer specifics |
| Build artifacts | Low | Generated and ignored |
| Personal notes | Private | Stored in `notes/`, git-ignored |

## Trust Boundaries

- Browser UI renders static/read-only synthetic data.
- No external service calls are required for V1.
- No user-submitted data is persisted.
- GitHub and Vercel are deployment surfaces only.

## STRIDE Analysis

| Threat | Example | V1 Risk | Mitigation |
| --- | --- | --- | --- |
| Spoofing | User pretends to be an admin or owner | Low | No auth, admin, or privileged workflow in V1 |
| Tampering | User attempts to modify remediation status | Low | No write endpoints or mutable state |
| Repudiation | User claims an export/action changed data | Low | Mock export actions do not mutate records |
| Information Disclosure | Real vulnerability data leaks into the app | Medium if process fails | Synthetic-only policy, docs, and data review |
| Denial of Service | Public demo receives heavy traffic | Low | Static/read-only app, no expensive public APIs |
| Elevation of Privilege | User reaches hidden admin action | Low | No privileged routes or admin controls |

## Security Controls

- Synthetic local data only
- No secrets or `.env` requirement
- `.env*` ignored
- `/notes` ignored for private portfolio material
- No file upload surface
- No database
- No API write routes
- No AI/model calls
- Public docs make scope and limitations explicit

## Residual Risk

- A future contributor could accidentally add real data to synthetic fixtures.
- Future integrations could introduce secrets or auth requirements.
- Browser-only exports are mock actions, not production reporting controls.
- GitHub/Vercel deployment settings still need hardening after publish.

## Future Hardening

If VulnBoard evolves beyond V1:

- Add authentication before any mutable workflows.
- Validate all inputs server-side.
- Keep integrations server-side only.
- Add rate limits for any public APIs.
- Add audit logging without secrets, PII, or sensitive vulnerability evidence.
- Add dependency and CodeQL checks as required status checks.