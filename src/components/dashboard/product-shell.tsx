import Link from "next/link";
import { navItems } from "@/data/vulnerabilities";

type ProductShellProps = {
  active: string;
  children: React.ReactNode;
};

export function ProductShell({ active, children }: ProductShellProps) {
  return (
    <div className="app-frame">
      <aside className="sidebar" aria-label="Product navigation">
        <Link className="brand" href="/" aria-label="Fischer Product Lab home">
          <span className="brand-mark">F</span>
          <span>
            <strong>Fischer</strong>
            <small>Product Lab</small>
          </span>
        </Link>
        <nav className="nav-list">
          {navItems.map((item) => (
            <Link
              key={item.href}
              className={active === item.href ? "active" : undefined}
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="sidebar-note">
          <strong>Demo posture</strong>
          <span>Synthetic data, read-only workflows, no production integrations.</span>
        </div>
      </aside>
      <main className="app-shell">{children}</main>
    </div>
  );
}
