import Link from "next/link";

const products = [
  {
    name: "VulnBoard",
    status: "Live demo",
    href: "/dashboard",
    summary:
      "Executive vulnerability metrics for remediation decisions, SLA pressure, owner accountability, and business-unit risk.",
    meta: "Cyber risk / executive reporting",
    external: false,
  },
  {
    name: "AgentOps",
    status: "Live demo",
    href: "https://agentops-fpl.vercel.app/",
    summary:
      "AI agent operations experience focused on oversight, workflow reliability, and responsible enterprise deployment.",
    meta: "AI operations / governance",
    external: true,
  },
  {
    name: "TrustDesk",
    status: "Live demo",
    href: "https://trustdesk-fpl.vercel.app/",
    summary:
      "Trust, risk, and assurance workspace for translating controls, evidence, and governance into product-ready decisions.",
    meta: "Trust / assurance / risk",
    external: true,
  },
];

export default function Home() {
  return (
    <main className="landing-hero">
      <div className="landing-hero-inner">
        <p className="eyebrow">Fischer Product Lab</p>
        <h1>Portfolio products for cyber, AI governance, trust, and operational risk.</h1>
        <p>
          Fischer Product Lab is a collection of polished enterprise product demos built to show security judgment,
          product strategy, executive communication, and practical delivery. Each product turns complex risk signals
          into workflows leaders can inspect, explain, and act on.
        </p>
        <div className="landing-actions">
          <Link href="/dashboard">Open VulnBoard</Link>
          <Link href="/reports">View executive memo</Link>
        </div>

        <section className="portfolio-showcase" aria-label="Fischer Product Lab portfolio">
          {products.map((product) => {
            const content = (
              <>
                <span className="portfolio-status">{product.status}</span>
                <strong>{product.name}</strong>
                <p>{product.summary}</p>
                <small>{product.meta}</small>
              </>
            );

            return product.external ? (
              <a
                className="portfolio-card"
                href={product.href}
                key={product.name}
                rel="noreferrer"
                target="_blank"
              >
                {content}
              </a>
            ) : (
              <Link className="portfolio-card" href={product.href} key={product.name}>
                {content}
              </Link>
            );
          })}
        </section>
      </div>
    </main>
  );
}