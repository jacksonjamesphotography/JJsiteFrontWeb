"use client";

export default function PrintButton() {
  return (
    <div className="pdf-print-bar fixed top-0 inset-x-0 z-[100] flex items-center justify-between gap-4 px-4 py-3 md:px-8 bg-[#2E2E2E]/95 text-white backdrop-blur-sm">
      <p
        className="text-[10px] sm:text-xs uppercase tracking-[0.18em] font-light opacity-90"
        style={{ fontFamily: "var(--font-family-body)" }}
      >
        A4 Portrait · Background graphics ON · Print / Save as PDF
      </p>
      <button
        type="button"
        onClick={() => window.print()}
        className="shrink-0 px-4 py-2 border border-white/60 text-[10px] sm:text-xs uppercase tracking-[0.2em] font-light hover:bg-white hover:text-[#2E2E2E] transition-colors cursor-pointer"
        style={{ fontFamily: "var(--font-family-body)" }}
      >
        Print / Save PDF
      </button>
    </div>
  );
}
