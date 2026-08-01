/** Convert an ISO 3166-1 alpha-2 country code into its flag emoji. */
export function flagEmoji(countryCode: string): string {
  const cc = countryCode.trim().toUpperCase();
  if (cc.length !== 2) return "🏳️";
  const A = 0x1f1e6;
  const chars = [...cc].map((c) => A + (c.charCodeAt(0) - 65));
  return String.fromCodePoint(...chars);
}

/** Format an ISO date (YYYY-MM-DD) as e.g. "Jun 2026". */
export function formatMonthYear(iso: string): string {
  const d = new Date(iso + "T00:00:00");
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}
