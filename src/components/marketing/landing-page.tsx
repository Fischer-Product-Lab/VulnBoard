import Link from "next/link";
import { ProductWindow } from "./product-window";

const STEPS = [
  {
    n: "01",
    label: "Attribute",
    copy: "Each finding is placed on a business unit, an asset, and a remediation owner. Risk does not stay in a shared queue.",
  },
  {
    n: "02",
    label: "Age",
    copy: "SLA clocks and aging buckets show what is overdue, due soon, and quietly past ninety days before a packet is written.",
  },
  {
    n: "03",
    label: "Concentrate",
    copy: "Exposure rolls to the units holding customer-facing debt, so the brief is about concentration rather than volume.",
  },
  {
    n: "04",
    label: "Decide",
    copy: "The executive view names the ask: authorize a surge, expire an exception, or hold an owner to a date.",
  },
];

export function LandingPage() {
  return (
    <div className="marketing">
      <div className="marketing-grain" aria-hidden />

      <div className="marketing-frame">
        <header className="marketing-header">
          <Link href="/" className="marketing-brand">
            <span className="marketing-type-body marketing-brand-name">VulnBoard</span>
            <span className="marketing-type-meta marketing-gold">Fischer Product Lab</span>
          </Link>
          <Link href="/demo" className="marketing-type-meta marketing-header-link">
            Open the demo
          </Link>
        </header>

        <main id="main-content" className="marketing-main">
          <section className="marketing-hero">
            <p className="marketing-type-meta marketing-gold marketing-rise">
              Fischer Product Lab case study · read-only demo
            </p>
            <h1 className="marketing-type-display marketing-rise marketing-rise-delay-1">
              Vulnerability risk,
              <br />
              ready for a decision.
            </h1>
            <p className="marketing-type-body marketing-lede marketing-rise marketing-rise-delay-2">
              See which vulnerabilities to escalate, who owns the fix, and what
              evidence supports the decision. Built for security leaders and the teams
              accountable for remediation.
            </p>
            <div className="marketing-cta marketing-rise marketing-rise-delay-3">
              <Link href="/demo" className="marketing-cta-primary">
                Open executive dashboard
              </Link>
              <Link href="/findings?severity=Critical&sla=Overdue" className="marketing-cta-secondary">
                Inspect overdue criticals
              </Link>
            </div>
            <p className="marketing-type-meta marketing-demo-note">
              No sign-in · Fictional June 2026 scenario
            </p>
          </section>

          <section
            className="marketing-window marketing-rise marketing-rise-delay-4"
            aria-label="VulnBoard product"
          >
            <div className="marketing-light" aria-hidden />
            <Link href="/demo" className="marketing-window-link">
              <span className="marketing-sr-only">
                Open the VulnBoard executive dashboard
              </span>
              <ProductWindow />
            </Link>
          </section>

          <section id="how-it-decides" className="marketing-method">
            <p className="marketing-type-meta marketing-gold">How it decides</p>
            <h2 className="marketing-type-title">
              Who owns the risk, how long has it been open, and what needs a decision?
            </h2>
            <ol className="marketing-steps">
              {STEPS.map((step) => (
                <li key={step.n}>
                  <span className="marketing-step-n">{step.n}</span>
                  <span className="marketing-type-meta">{step.label}</span>
                  <p className="marketing-type-body marketing-step-copy">{step.copy}</p>
                </li>
              ))}
            </ol>
          </section>
        </main>

        <footer className="marketing-footer">
          <p className="marketing-type-meta marketing-footer-copy">
            Fischer Product Lab · portfolio demonstration · © Trevor Fischer
          </p>
        </footer>
      </div>
    </div>
  );
}
