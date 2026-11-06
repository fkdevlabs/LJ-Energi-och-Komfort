export const formatPrice = (n: number) =>
  new Intl.NumberFormat('sv-SE', { style: 'currency', currency: 'SEK', maximumFractionDigits: 0 }).format(n);

// Icons for the selling points on the start page (SVG inner markup), cycled by index.
export const uspIcons = [
  '<path d="M12 2l2.4 4.9 5.4.8-3.9 3.8.9 5.4L12 14.3 7.2 16.9l.9-5.4L4.2 7.7l5.4-.8z"/>',
  '<rect x="4" y="4" width="16" height="16" rx="3"/><path d="M8 12h8M12 8v8"/>',
  '<path d="M4 7h16M4 12h16M4 17h10"/>',
  '<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L4 17v3h3l5.3-5.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.5-.5-.5-2.5z"/>',
];

// "Så går det till" steps on the start page.
export const steps = [
  { title: 'Kontakta oss', text: 'Fyll i formuläret eller ring – vi återkommer inom 24 timmar.' },
  { title: 'Rådgivning', text: 'Vi går igenom dina behov och rekommenderar rätt pump.' },
  { title: 'Fast offert', text: 'Du får ett tydligt, fast pris på värmepumpen.' },
  { title: 'Leverans', text: 'Vi levererar pumpen och finns kvar med service och support.' },
];
