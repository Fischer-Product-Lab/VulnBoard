import type {
  Finding,
  Severity,
  SlaStatus,
  AssetType,
} from "../data/vulnerabilities";

export const severityOptions = [
  "All",
  "Critical",
  "High",
  "Medium",
  "Low",
] as const;
export const slaOptions = ["All", "Overdue", "Due Soon", "On Track"] as const;
export const assetOptions = [
  "All",
  "Application",
  "Infrastructure",
  "Cloud",
  "Identity",
] as const;
export const sortOptions = ["priority", "due", "updated"] as const;
export type FindingFilters = {
  q: string;
  severity: "All" | Severity;
  sla: "All" | SlaStatus;
  asset: "All" | AssetType;
  unit: string;
  sort: (typeof sortOptions)[number];
};
export const defaultFilters: FindingFilters = {
  q: "",
  severity: "All",
  sla: "All",
  asset: "All",
  unit: "All",
  sort: "priority",
};

function knownValue<T extends string>(
  value: string | null,
  options: readonly T[],
  fallback: T,
): T {
  return options.find((option) => option === value) ?? fallback;
}

export function readFindingFilters(
  params: Pick<URLSearchParams, "get">,
  units: readonly string[],
): FindingFilters {
  return {
    q: (params.get("q") ?? "").slice(0, 160),
    severity: knownValue(params.get("severity"), severityOptions, "All"),
    sla: knownValue(params.get("sla"), slaOptions, "All"),
    asset: knownValue(params.get("asset"), assetOptions, "All"),
    unit: knownValue(params.get("unit"), ["All", ...units], "All"),
    sort: knownValue(params.get("sort"), sortOptions, "priority"),
  };
}

const severityRank: Record<Severity, number> = {
  Critical: 0,
  High: 1,
  Medium: 2,
  Low: 3,
};
const slaRank: Record<SlaStatus, number> = {
  Overdue: 0,
  "Due Soon": 1,
  "On Track": 2,
};
const compareText = (a: string, b: string) => (a < b ? -1 : a > b ? 1 : 0);

export function comparePriority(a: Finding, b: Finding): number {
  return (
    severityRank[a.severity] - severityRank[b.severity] ||
    slaRank[a.slaStatus] - slaRank[b.slaStatus] ||
    compareText(a.dueDate, b.dueDate) ||
    compareText(a.id, b.id)
  );
}

export function filterFindings(
  items: readonly Finding[],
  filters: FindingFilters,
): Finding[] {
  const query = filters.q.trim().toLowerCase();
  return items
    .filter(
      (item) =>
        (filters.severity === "All" || item.severity === filters.severity) &&
        (filters.sla === "All" || item.slaStatus === filters.sla) &&
        (filters.asset === "All" || item.assetType === filters.asset) &&
        (filters.unit === "All" || item.businessUnit === filters.unit) &&
        (!query ||
          [
            item.id,
            item.cve,
            item.title,
            item.asset,
            item.owner,
            item.remediationOwner,
            item.businessUnit,
          ].some((value) => value.toLowerCase().includes(query))),
    )
    .sort((a, b) => {
      if (filters.sort === "due")
        return compareText(a.dueDate, b.dueDate) || comparePriority(a, b);
      if (filters.sort === "updated")
        return (
          compareText(b.lastUpdated, a.lastUpdated) || comparePriority(a, b)
        );
      return comparePriority(a, b);
    });
}

export function activeFilterCount(filters: FindingFilters): number {
  return (
    Number(Boolean(filters.q.trim())) +
    [filters.severity, filters.sla, filters.asset, filters.unit].filter(
      (value) => value !== "All",
    ).length
  );
}
