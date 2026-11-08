export const formatPrice = (n: number) =>
  new Intl.NumberFormat('sv-SE', { style: 'currency', currency: 'SEK', maximumFractionDigits: 0 }).format(n);

// Icons for the service cards (SVG inner markup, 24×24 stroke icons). Keys match the CMS select.
export const serviceIcons: Record<string, string> = {
  snowflake: '<path d="M12 2v20M2 12h20M5 5l14 14M19 5 5 19M9 3l3 3 3-3M9 21l3-3 3 3M3 9l3 3-3 3M21 9l-3 3 3 3"/>',
  drop: '<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/><path d="M9 14a3 3 0 0 0 3 3"/>',
  document: '<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5M9 13h6M9 17h4"/>',
  wrench: '<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L4 17v3h3l5.3-5.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.5-.5-.5-2.5z"/>',
  wind: '<path d="M3 8h11a3 3 0 1 0-3-3M3 12h16a3 3 0 1 1-3 3M3 16h7"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  house: '<path d="M3 11 12 4l9 7M5 10v10h14V10"/><path d="M10 20v-6h4v6"/>',
  bolt: '<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>',
};
export const serviceIcon = (name?: string) => serviceIcons[name ?? ''] ?? serviceIcons.house;

// "Så går det till" steps on the start page.
export const steps = [
  { title: 'Kontakta oss', text: 'Fyll i formuläret eller ring – vi återkommer inom 48 timmar.' },
  { title: 'Rådgivning', text: 'Vi går igenom dina behov och rekommenderar rätt pump.' },
  { title: 'Fast offert', text: 'Du får ett tydligt, fast pris på värmepumpen.' },
  { title: 'Leverans', text: 'Vi levererar pumpen och finns kvar med service och support.' },
];
