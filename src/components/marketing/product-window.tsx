import type { CSSProperties } from "react";
import {
  businessUnitData,
  executiveMemo,
  metrics,
  navItems,
  slaData,
} from "@/data/vulnerabilities";

const WINDOW_NAV = navItems.slice(0, 6);

/**
 * 30D portfolio risk already rendered on /dashboard.
 * Kept here so the landing window does not invent a second score.
 */
const DASHBOARD_RISK_SCORE = 68;
const DASHBOARD_RISK_DELTA = "-8 pts";

function metric(label: string) {
  return metrics.find((item) => item.label === label);
}

function millionsFromExposure(value: string) {
  const parsed = Number(value.replace(/[^0-9.]/g, ""));
  return Number.isFinite(parsed) ? parsed : 0;
}

function percent(value: number, total: number) {
  return `${Math.round((value / total) * 100)}%`;
}

export function ProductWindow() {
  const overdue = metric("Overdue SLA Items");
  const critical = metric("Critical Findings");
  const slaCompliance = metric("SLA Compliance");
  const high = metric("High Findings");
  const posture = executiveMemo[0];
  const decision = executiveMemo[3];

  const concentratedUnits = businessUnitData.filter(
    (unit) => unit.name === "Digital Banking" || unit.name === "Payments",
  );
  const exposedValue = concentratedUnits.reduce(
    (sum, unit) => sum + millionsFromExposure(unit.exposure),
    0,
  );

  const briefing = [
    {
      label: "Posture",
      value: "Improving, elevated",
      detail: DASHBOARD_RISK_DELTA,
    },
    {
      label: "Business exposure",
      value: `$${exposedValue.toFixed(1)}M`,
      detail: concentratedUnits.map((unit) => unit.name).join(" + "),
    },
    {
      label: "SLA decision",
      value: `${overdue?.value ?? "87"} overdue`,
      detail: overdue?.detail ?? "23 critical",
    },
    {
      label: "Critical / high",
      value: critical?.value ?? "42",
      detail: `${high?.value ?? "319"} high open`,
    },
  ];

  return (
    <div className="product-window">
      <div className="product-window-chrome">
        <div className="product-window-dots" aria-hidden>
          <span />
          <span />
          <span />
        </div>
        <p className="product-window-url">vulnboard · dashboard</p>
      </div>

      <div className="product-window-body">
        <aside className="product-window-rail" aria-hidden>
          <div className="brand">
            <span className="brand-mark">F</span>
            <span>
              <strong>Fischer</strong>
              <small>Product Lab</small>
            </span>
          </div>
          <nav className="product-window-nav">
            {WINDOW_NAV.map((item) => (
              <span
                className={item.href === "/dashboard" ? "active" : undefined}
                key={item.href}
              >
                {item.label}
              </span>
            ))}
          </nav>
        </aside>

        <div className="product-window-stage">
          <p className="eyebrow">VulnBoard / Fischer Product Lab</p>
          <p className="product-window-kicker">Vulnerability Metrics Dashboard</p>

          <section className="hero-grid product-window-hero" aria-label="Executive vulnerability posture">
            <article className="executive-summary">
              <div className="section-heading">
                <div>
                  <p className="eyebrow">Executive Decision Brief</p>
                  <span className="briefing-date">Synthetic board packet / 30D</span>
                </div>
                <span className="status-pill">Decision Ready</span>
              </div>
              <h3>{posture.title}</h3>
              <p>{posture.copy}</p>
              <div className="briefing-strip" aria-label="Executive briefing signals">
                {briefing.map((signal) => (
                  <div key={signal.label}>
                    <span>{signal.label}</span>
                    <strong>{signal.value}</strong>
                    <small>{signal.detail}</small>
                  </div>
                ))}
              </div>
              <div className="summary-actions">
                <div>
                  <strong>SLA compliance</strong>
                  <span>
                    {slaCompliance?.value} {slaCompliance?.detail}
                  </span>
                </div>
                <div>
                  <strong>Next actions</strong>
                  <span>{decision.copy}</span>
                </div>
              </div>
            </article>

            <article className="risk-radar" aria-label="Portfolio risk score">
              <div className="section-heading">
                <p className="eyebrow">Portfolio Risk</p>
                <span className="delta positive">{DASHBOARD_RISK_DELTA}</span>
              </div>
              <div
                className="gauge"
                style={{ "--score": DASHBOARD_RISK_SCORE } as CSSProperties}
              >
                <div className="gauge-core">
                  <span>{DASHBOARD_RISK_SCORE}</span>
                  <small>Risk Score</small>
                </div>
              </div>
              <div className="gauge-labels">
                <span>Low</span>
                <span>Elevated</span>
                <span>Severe</span>
              </div>
            </article>
          </section>

          <section className="product-window-sla" aria-label="SLA debt">
            <div className="section-heading">
              <div>
                <p className="eyebrow">SLA Health</p>
                <h3>Overdue items by severity</h3>
              </div>
              <span className="status-pill warning">Action Required</span>
            </div>
            <div className="sla-list">
              {slaData.map((item) => (
                <div className="sla-row" key={item.severity}>
                  <span className="severity-dot" style={{ background: item.color }} />
                  <div className="sla-content">
                    <div className="sla-top">
                      <span className="sla-title">{item.severity}</span>
                      <span className="sla-count">
                        {item.overdue} overdue of {item.total}
                      </span>
                    </div>
                    <div
                      className="progress-track"
                      aria-label={`${item.severity} overdue ${percent(item.overdue, item.total)}`}
                    >
                      <div
                        className="progress-fill"
                        style={{
                          width: percent(item.overdue, item.total),
                          background: item.color,
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
