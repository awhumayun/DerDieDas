const tEndings: string[] = [
  "Dienst",
  "Durst",
  "Frost",
  "Verdienst",
  "Verlust",
  "Gift",
];

const eEndings: string[] = [
  "Buchstabe",
  "Friede",
  "Funke",
  "Gedanke",
  "Glaube",
  "Haufe",
  "Name",
  "Same",
  "Wille",
  "Affe",
  "Bote",
  "Junge",
  "Löwe",
];

const geBeginnings: string[] = [
  "Gebrauch",
  "Gedanke",
  "Gefallen",
  "Gehalt",
  "Gehorsam",
  "Genuss",
  "Geruch",
  "Gesang",
  "Geschmack",
  "Gestank",
  "Gewinn",
];

const foreignOrgins: string[] = [
  "Altar",
  "Apparat",
  "Automat",
  "Kanal",
  "Kanton",
  "Kommentar",
  "Salat",
  "Senat",
  "Skandal",
];

export const masculineExceptions = [
  ...tEndings,
  ...eEndings,
  ...geBeginnings,
  ...foreignOrgins,
];
