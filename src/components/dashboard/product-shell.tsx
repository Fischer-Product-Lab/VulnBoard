import Link from "next/link";
import { navItems } from "@/data/vulnerabilities";

type ProductShellProps = { active: string; children: React.ReactNode };

function ProductNav({ active }: { active: string }) {
  return (
    <nav className="nav-list" aria-label="Product navigation">
      {navItems.map((item, index) => (
        <Link
          key={item.href}
          className={active === item.href ? "active" : undefined}
          aria-current={active === item.href ? "page" : undefined}
          href={item.href}
        >
          <span className="nav-index" aria-hidden="true">
            {String(index + 1).padStart(2, "0")}
          </span>
          {item.label}
          {active === item.href && (
            <span className="nav-current-dot" aria-hidden="true" />
          )}
        </Link>
      ))}
    </nav>
  );
}

export function ProductShell({ active, children }: ProductShellProps) {
  const currentPage =
    navItems.find((item) => item.href === active)?.label ?? "Dashboard";
  return (
    <div className="app-frame">
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <aside className="sidebar" aria-label="VulnBoard workspace">
        <Link className="brand" href="/" aria-label="VulnBoard home">
          <span className="brand-mark" aria-hidden="true">
            V
          </span>
          <span>
            <strong>VulnBoard</strong>
            <small>Fischer Product Lab</small>
          </span>
        </Link>
        <div className="desktop-product-nav">
          <p className="nav-section-label">Risk workspace</p>
          <ProductNav active={active} />
        </div>
        <details className="mobile-product-nav" key={active}>
          <summary>
            <span>{currentPage}</span>
            <span>
              Menu <span aria-hidden="true">⌄</span>
            </span>
          </summary>
          <ProductNav active={active} />
        </details>
        <div className="sidebar-note">
          <strong>Safe to explore</strong>
          <span>
            Synthetic data. Read-only workflows. No production integrations.
          </span>
          <Link href="/about">
            About this demo <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </aside>
      <main className="app-shell" id="main-content" tabIndex={-1}>
        <div className="workspace-context">
          <span>
            Vulnerability management <span aria-hidden="true">/</span>{" "}
            <strong>{currentPage}</strong>
          </span>
          <Link href="/about" className="demo-badge">
            <span aria-hidden="true" />
            Synthetic demo · Read-only
          </Link>
        </div>
        {children}
        <footer className="workspace-footer">
          <span>VulnBoard · Fischer Product Lab</span>
          <span>Illustrative data. No live security assessment.</span>
        </footer>
      </main>
    </div>
  );
}
