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
          <nav className="marketing-header-actions" aria-label="VulnBoard landing navigation">
            <Link href="/work/agentic-authority-model" className="marketing-type-meta marketing-header-link">
              Authority model
            </Link>
            <Link href="/services/ai-vendor-review" className="marketing-type-meta marketing-header-link">
              AI vendor review sprint
            </Link>
            <Link href="/demo" className="marketing-type-meta marketing-header-link">
              Open the demo
            </Link>
          </nav>
        </header>

        <main className="marketing-main">
          <section className="marketing-hero">
            <p className="marketing-type-meta marketing-gold marketing-rise">
              Portfolio demonstration · read-only · synthetic data
            </p>
            <h1 className="marketing-type-display marketing-rise marketing-rise-delay-1">
              Findings,
              <br />
              into owned risk.
            </h1>
            <p className="marketing-type-body marketing-lede marketing-rise marketing-rise-delay-2">
              Vulnerability data stays technical until someone names the owner, the SLA
              debt, and the decision required this week.
            </p>
            <div className="marketing-cta marketing-rise marketing-rise-delay-3">
              <Link href="/demo" className="marketing-cta-primary">
                Open the demo
              </Link>
              <a href="#how-it-decides" className="marketing-cta-secondary">
                How it decides
              </a>
            </div>
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
              Ownership, age, and concentration write the brief. Severity never gets the last word.
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

          <section className="marketing-case" aria-labelledby="marketing-case-title">
            <div>
              <p className="marketing-type-meta marketing-gold">Public case study</p>
              <h2 id="marketing-case-title" className="marketing-type-title">
                Give AI systems useful authority without giving away the release decision.
              </h2>
              <p className="marketing-type-body marketing-case-copy">
                A sanitized operating model for bounded implementation, deterministic verification, independent
                review, exact artifact identity, and explicit human gates before shared-state or public impact.
              </p>
            </div>
            <Link href="/work/agentic-authority-model" className="marketing-cta-secondary marketing-case-action">
              Inspect the authority model
            </Link>
          </section>

          <section className="marketing-service" aria-labelledby="marketing-service-title">
            <div>
              <p className="marketing-type-meta marketing-gold">Available engagement</p>
              <h2 id="marketing-service-title" className="marketing-type-title">
                Turn one recurring vendor-review workflow into a measurable, human-controlled pilot decision.
              </h2>
              <p className="marketing-type-body marketing-service-copy">
                A fixed-scope, 10-business-day sprint for TPRM, GRC, procurement risk, and AI governance teams.
                The first two qualified design-partner engagements are $5,000.
              </p>
            </div>
            <Link href="/services/ai-vendor-review" className="marketing-cta-primary marketing-service-action">
              Review the sprint
            </Link>
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
