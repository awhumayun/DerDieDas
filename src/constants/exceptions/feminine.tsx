const neuterEndings: string[] = [
  "Firma",
  "Streusel",
  "Irrtum",
  "Reichtum",
  "Konsum",
];

const geBeginnings: string[] = [
  "Gebärde",
  "Gebühr",
  "Geburt",
  "Geduld",
  "Gefahr",
  "Gemeinde",
  "Geschichte",
  "Geschwulst",
  "Gestalt",
  "Gewähr",
  "Gewalt",
];

const foreignOrgins: string[] = ["Manier", "Moral", "Person"];

export const feminineExceptions = [
  ...neuterEndings,
  ...geBeginnings,
  ...foreignOrgins,
];
