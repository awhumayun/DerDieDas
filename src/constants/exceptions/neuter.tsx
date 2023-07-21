const masculineEndings: string[] = [
  "Genus",
  "Korpus",
  "Labor",
  "Tempus",
  "Virus",
  "Tor",
];

const strongVerbsMasculine: string[] = [
  "Grab",
  "Lied",
  "Maß",
  "Schloss",
  "Verbot",
];

const feminineEndings: string[] = [
  "Sofa",
  "Genie",
  "Atlantik",
  "Pazifik",
  "Mosaik",
  "Abitur",
  "Futur",
  "Purpur",
];

const eEndings: string[] = [
  "Auge",
  "Ende",
  "Erbe",
  "Finale",
  "Image",
  "Interesse",
  "Prestige",
  "Regime",
];

export const neuterExceptions = [
  ...masculineEndings,
  ...strongVerbsMasculine,
  ...feminineEndings,
  ...eEndings,
];
