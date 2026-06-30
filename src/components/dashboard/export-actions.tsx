"use client";

import { executiveMemo, findings } from "@/data/vulnerabilities";
import { useState } from "react";

function downloadTextFile(filename: string, contents: string, type = "text/plain") {
  const blob = new Blob([contents], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

export function ExportActions() {
  const [status, setStatus] = useState("Exports use synthetic demo data.");

  function exportCsv() {
    const headers = ["Finding", "CVE", "Asset", "Business Unit", "Severity", "Owner", "SLA", "Due Date"];
    const rows = findings.map((finding) => [
      finding.id,
      finding.cve,
      finding.asset,
      finding.businessUnit,
      finding.severity,
      finding.owner,
      finding.slaStatus,
      finding.dueDate,
    ]);
    const csv = [headers, ...rows]
      .map((row) => row.map((cell) => `"${cell.replace(/"/g, '""')}"`).join(","))
      .join("\n");
    downloadTextFile("vulnboard-findings.csv", csv, "text/csv");
    setStatus("CSV export generated.");
  }

  function exportMemo() {
    const memo = [
      "Fischer Product Lab - VulnBoard Executive Memo",
      "",
      ...executiveMemo.map((item) => `${item.title}: ${item.copy}`),
    ].join("\n");
    downloadTextFile("vulnboard-executive-memo.txt", memo);
    setStatus("Executive memo exported.");
  }

  function printReport() {
    setStatus("PDF export prepared as a mock portfolio action. Full PDF generation is a roadmap item.");
  }

  return (
    <div>
      <div className="export-row">
        <button className="text-button" onClick={exportCsv} type="button">
          Export CSV
        </button>
        <button className="text-button secondary" onClick={printReport} type="button">
          Print/PDF
        </button>
        <button className="text-button" onClick={exportMemo} type="button">
          Export Memo
        </button>
      </div>
      <div className="control-feedback compact" role="status" aria-live="polite">
        {status}
      </div>
    </div>
  );
}
