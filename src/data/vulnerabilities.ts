export type Severity = "Critical" | "High" | "Medium" | "Low";
export type SlaStatus = "Overdue" | "Due Soon" | "On Track";
export type AssetType = "Application" | "Infrastructure" | "Cloud" | "Identity";

export type Finding = {
  id: string;
  cve: string;
  title: string;
  asset: string;
  businessUnit: string;
  severity: Severity;
  owner: string;
  remediationOwner: string;
  assetType: AssetType;
  slaStatus: SlaStatus;
  dueDate: string;
  firstDetected: string;
  lastUpdated: string;
  exceptionStatus: "None" | "Pending" | "Expiring" | "Rejected";
  evidence: string;
  notes: string;
};

export type Metric = {
  label: string;
  value: string;
  tone: "positive" | "negative" | "neutral";
  detail: string;
};

export const navItems = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/findings", label: "Findings" },
  { href: "/applications", label: "Applications" },
  { href: "/business-units", label: "Business Units" },
  { href: "/sla", label: "SLA & Aging" },
  { href: "/remediation", label: "Remediation" },
  { href: "/exceptions", label: "Exceptions" },
  { href: "/reports", label: "Reports" },
  { href: "/about", label: "About" },
];

export const metrics: Metric[] = [
  { label: "Total Open Findings", value: "1,317", tone: "neutral", detail: "-9% net open" },
  { label: "Critical Findings", value: "42", tone: "positive", detail: "-18% vs prior" },
  { label: "High Findings", value: "319", tone: "neutral", detail: "+4% intake" },
  { label: "Overdue SLA Items", value: "87", tone: "negative", detail: "23 critical" },
  { label: "Due Next 7 Days", value: "41", tone: "negative", detail: "12 high/critical" },
  { label: "MTTR", value: "24d", tone: "positive", detail: "-5d improvement" },
  { label: "SLA Compliance", value: "86%", tone: "negative", detail: "target 90%" },
  { label: "Risk Accepted", value: "29", tone: "neutral", detail: "6 expiring" },
];

export const trendData = [
  { period: "Nov", opened: 92, remediated: 74 },
  { period: "Dec", opened: 86, remediated: 81 },
  { period: "Jan", opened: 104, remediated: 96 },
  { period: "Feb", opened: 98, remediated: 112 },
  { period: "Mar", opened: 88, remediated: 123 },
  { period: "Apr", opened: 74, remediated: 118 },
  { period: "May", opened: 69, remediated: 127 },
  { period: "Jun", opened: 63, remediated: 121 },
];

export const slaData = [
  { severity: "Critical", overdue: 23, total: 42, color: "#b84a35" },
  { severity: "High", overdue: 64, total: 319, color: "#b88a3d" },
  { severity: "Medium", overdue: 118, total: 914, color: "#426b9a" },
];

export const agingData = [
  { bucket: "0-30d", value: 430, color: "#2f8564" },
  { bucket: "31-60d", value: 238, color: "#3d7f93" },
  { bucket: "61-90d", value: 132, color: "#b88a3d" },
  { bucket: "90d+", value: 109, color: "#b84a35" },
];

export const ownerData = [
  { name: "Cloud Platform", findings: 128, overdue: 31, score: 86 },
  { name: "Customer Identity", findings: 94, overdue: 26, score: 82 },
  { name: "Payments Engineering", findings: 81, overdue: 18, score: 76 },
  { name: "Retail Apps", findings: 58, overdue: 7, score: 58 },
  { name: "Data Services", findings: 42, overdue: 5, score: 49 },
];

export const businessUnitData = [
  { name: "Digital Banking", risk: 84, exposure: "$18.4M", color: "#b84a35" },
  { name: "Payments", risk: 78, exposure: "$13.2M", color: "#b88a3d" },
  { name: "Enterprise IT", risk: 63, exposure: "$8.8M", color: "#426b9a" },
  { name: "Wealth", risk: 52, exposure: "$5.6M", color: "#3d7f93" },
  { name: "Corporate", risk: 41, exposure: "$3.1M", color: "#2f8564" },
];

export const findings: Finding[] = [
  {
    id: "VULN-1048",
    cve: "CVE-2026-1842",
    title: "Remote code execution in SSO gateway component",
    asset: "Customer SSO Gateway",
    businessUnit: "Digital Banking",
    severity: "Critical",
    owner: "Customer Identity",
    remediationOwner: "Identity Platform",
    assetType: "Identity",
    slaStatus: "Overdue",
    dueDate: "2026-06-18",
    firstDetected: "2026-05-21",
    lastUpdated: "2026-06-26",
    exceptionStatus: "None",
    evidence: "Patch validation pending",
    notes: "Fix deployed to staging; production window requires business approval.",
  },
  {
    id: "VULN-1027",
    cve: "CVE-2026-0921",
    title: "Privilege escalation in tokenization service host",
    asset: "Card Tokenization API",
    businessUnit: "Payments",
    severity: "Critical",
    owner: "Payments Engineering",
    remediationOwner: "Card Services",
    assetType: "Application",
    slaStatus: "Overdue",
    dueDate: "2026-06-23",
    firstDetected: "2026-05-30",
    lastUpdated: "2026-06-27",
    exceptionStatus: "None",
    evidence: "CAB change CHG-2841",
    notes: "Owner committed to hotfix after payment batch freeze.",
  },
  {
    id: "VULN-1011",
    cve: "CVE-2026-0554",
    title: "Container base image with exploitable OpenSSL package",
    asset: "Enterprise Container Base Image",
    businessUnit: "Enterprise IT",
    severity: "High",
    owner: "Cloud Platform",
    remediationOwner: "Platform Engineering",
    assetType: "Cloud",
    slaStatus: "Due Soon",
    dueDate: "2026-07-03",
    firstDetected: "2026-06-05",
    lastUpdated: "2026-06-28",
    exceptionStatus: "Pending",
    evidence: "Image scan IMG-7782",
    notes: "Golden image update is ready; dependent workloads need rebuild.",
  },
  {
    id: "VULN-0998",
    cve: "CVE-2025-8160",
    title: "SQL injection risk in legacy loan workflow",
    asset: "Loan Origination Portal",
    businessUnit: "Digital Banking",
    severity: "High",
    owner: "Retail Apps",
    remediationOwner: "Consumer Lending",
    assetType: "Application",
    slaStatus: "Due Soon",
    dueDate: "2026-07-07",
    firstDetected: "2026-06-09",
    lastUpdated: "2026-06-27",
    exceptionStatus: "None",
    evidence: "SAST finding SAST-4108",
    notes: "Query builder migration scheduled in sprint 24.7.",
  },
  {
    id: "VULN-0984",
    cve: "CVE-2025-7442",
    title: "Unpatched data processing node exposes sensitive logs",
    asset: "Analytics Data Lake",
    businessUnit: "Corporate",
    severity: "High",
    owner: "Data Services",
    remediationOwner: "Data Platform",
    assetType: "Infrastructure",
    slaStatus: "Overdue",
    dueDate: "2026-06-27",
    firstDetected: "2026-06-02",
    lastUpdated: "2026-06-26",
    exceptionStatus: "Expiring",
    evidence: "Exception RA-118",
    notes: "Compensating logging control expires next month.",
  },
  {
    id: "VULN-0975",
    cve: "CVE-2025-7018",
    title: "Missing secure cookie flags in advisory portal",
    asset: "Wealth Advisory Portal",
    businessUnit: "Wealth",
    severity: "Medium",
    owner: "Wealth Digital",
    remediationOwner: "Advisory Experience",
    assetType: "Application",
    slaStatus: "On Track",
    dueDate: "2026-07-18",
    firstDetected: "2026-06-20",
    lastUpdated: "2026-06-29",
    exceptionStatus: "None",
    evidence: "DAST finding DAST-2210",
    notes: "Fix bundled with next web release.",
  },
  {
    id: "VULN-0963",
    cve: "CVE-2025-6931",
    title: "Unsupported middleware version on internal workflow tier",
    asset: "Corporate Workflow Cluster",
    businessUnit: "Corporate",
    severity: "Medium",
    owner: "Enterprise Apps",
    remediationOwner: "Workflow Services",
    assetType: "Infrastructure",
    slaStatus: "On Track",
    dueDate: "2026-07-22",
    firstDetected: "2026-06-24",
    lastUpdated: "2026-06-28",
    exceptionStatus: "None",
    evidence: "Infra scan INF-5512",
    notes: "Upgrade path validated in non-production.",
  },
  {
    id: "VULN-0951",
    cve: "CVE-2025-6402",
    title: "Weak TLS configuration on vendor-facing endpoint",
    asset: "Supplier Connect Gateway",
    businessUnit: "Enterprise IT",
    severity: "High",
    owner: "Network Services",
    remediationOwner: "Perimeter Engineering",
    assetType: "Infrastructure",
    slaStatus: "Overdue",
    dueDate: "2026-06-20",
    firstDetected: "2026-05-28",
    lastUpdated: "2026-06-25",
    exceptionStatus: "Rejected",
    evidence: "TLS report TLS-9021",
    notes: "Exception rejected due to external exposure; remediation escalated.",
  },
];

export const applicationData = [
  { name: "Customer SSO Gateway", owner: "Customer Identity", open: 94, criticalHigh: 34, risk: 92 },
  { name: "Card Tokenization API", owner: "Payments Engineering", open: 81, criticalHigh: 29, risk: 88 },
  { name: "Enterprise Container Base Image", owner: "Cloud Platform", open: 128, criticalHigh: 41, risk: 84 },
  { name: "Loan Origination Portal", owner: "Retail Apps", open: 58, criticalHigh: 17, risk: 71 },
  { name: "Analytics Data Lake", owner: "Data Services", open: 42, criticalHigh: 9, risk: 63 },
];

export const commitments = [
  { owner: "Customer Identity", commitment: "Deploy SSO gateway hotfix", date: "Jul 2", status: "At Risk" },
  { owner: "Cloud Platform", commitment: "Rebuild workloads on approved image", date: "Jul 5", status: "On Track" },
  { owner: "Payments Engineering", commitment: "Complete tokenization API emergency change", date: "Jul 1", status: "At Risk" },
  { owner: "Retail Apps", commitment: "Remediate loan portal injection path", date: "Jul 9", status: "On Track" },
];

export const exceptions = [
  { id: "RA-118", asset: "Analytics Data Lake", severity: "High", expires: "Jul 31", owner: "Data Services" },
  { id: "RA-104", asset: "Batch Settlement Host", severity: "Medium", expires: "Aug 8", owner: "Payments Engineering" },
  { id: "RA-099", asset: "Legacy Workflow Cluster", severity: "Medium", expires: "Aug 14", owner: "Enterprise Apps" },
];

export const executiveMemo = [
  {
    title: "Current posture",
    copy: "Risk posture is improving, but still elevated because aging high-severity findings are concentrated in customer-facing systems.",
  },
  {
    title: "Key improvements",
    copy: "Critical exposure declined 18%, reopened findings remained stable, and closure volume exceeded intake for the third month.",
  },
  {
    title: "Areas of concern",
    copy: "Digital Banking, Payments, and Enterprise IT own 64% of overdue high/critical items and require tighter weekly governance.",
  },
  {
    title: "Next actions",
    copy: "Prioritize customer-facing criticals, expire stale exceptions, and request executive support for owners without committed fix dates.",
  },
];
