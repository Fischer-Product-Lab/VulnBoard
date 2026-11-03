import test from "node:test";
import assert from "node:assert/strict";
import { sourceLoader } from "./load-source.mjs";
const load = sourceLoader();
const { findings } = load("src/data/vulnerabilities.ts");
const {
  defaultFilters,
  readFindingFilters,
  filterFindings,
  comparePriority,
  activeFilterCount,
} = load("src/lib/finding-query.ts");
const units = [...new Set(findings.map((finding) => finding.businessUnit))];
const select = (filters = {}) =>
  filterFindings(findings, { ...defaultFilters, ...filters });

test("priority is severity, SLA urgency, due date, then stable ID", () => {
  assert.deepEqual(
    select().map((f) => f.id),
    [
      "VULN-1048",
      "VULN-1027",
      "VULN-0951",
      "VULN-0984",
      "VULN-1011",
      "VULN-0998",
      "VULN-0975",
      "VULN-0963",
    ],
  );
  assert.ok(
    comparePriority({ ...findings[0], id: "A" }, { ...findings[0], id: "B" }) <
      0,
  );
});
test("filtering and sorting never mutate the source dataset", () => {
  const snapshot = JSON.stringify(findings);
  select({ sla: "Overdue", sort: "due" });
  select({ sort: "updated" });
  assert.equal(JSON.stringify(findings), snapshot);
});
test("dashboard deep links select the expected sample records", () => {
  const filters = readFindingFilters(
    new URLSearchParams("severity=Critical&sla=Overdue"),
    units,
  );
  assert.deepEqual(
    filterFindings(findings, filters).map((f) => f.id),
    ["VULN-1048", "VULN-1027"],
  );
  assert.equal(select({ sla: "Overdue" }).length, 4);
  assert.equal(select({ sla: "Due Soon" }).length, 2);
});
test("search is trimmed, case-insensitive, and covers IDs, CVEs, titles, asset and both owners", () => {
  for (const q of [
    " vuln-1048 ",
    "cve-2026-1842",
    "Remote code",
    "Customer SSO",
    "Customer Identity",
    "Identity Platform",
  ]) {
    assert.equal(select({ q })[0].id, "VULN-1048", q);
  }
  assert.equal(select({ q: "wealth" }).length, 1);
});
test("all structured filters combine with search", () => {
  assert.deepEqual(
    select({
      severity: "High",
      sla: "Overdue",
      asset: "Infrastructure",
      unit: "Enterprise IT",
      q: "TLS",
    }).map((f) => f.id),
    ["VULN-0951"],
  );
  assert.equal(select({ severity: "Critical", sla: "On Track" }).length, 0);
  assert.equal(select({ q: "no matching result" }).length, 0);
});
test("due date sorts ascending and recent updates descending deterministically", () => {
  const due = select({ sort: "due" });
  assert.equal(due[0].id, "VULN-1048");
  assert.equal(due[1].id, "VULN-0951");
  assert.equal(select({ sort: "updated" })[0].id, "VULN-0975");
  assert.deepEqual(select({ sort: "updated" }), select({ sort: "updated" }));
});
test("malformed URL filters fall back safely without losing valid inputs", () => {
  const filters = readFindingFilters(
    new URLSearchParams(
      "severity=urgent&sla=Overdue&asset=server&unit=unknown&sort=random",
    ),
    units,
  );
  assert.deepEqual(filters, { ...defaultFilters, sla: "Overdue" });
  assert.equal(
    readFindingFilters(new URLSearchParams({ q: "x".repeat(500) }), units).q
      .length,
    160,
  );
});
test("filter counts ignore ordering and whitespace-only search", () => {
  assert.equal(
    activeFilterCount({ ...defaultFilters, sort: "updated", q: "  " }),
    0,
  );
  assert.equal(
    activeFilterCount({
      ...defaultFilters,
      severity: "Critical",
      sla: "Overdue",
      q: "SSO",
    }),
    3,
  );
});
test("SLA filtering uses source labels, never today's clock", () => {
  assert.equal(select({ sla: "Due Soon" })[0].dueDate, "2026-07-03");
  assert.equal(select({ sla: "On Track" }).length, 2);
});
