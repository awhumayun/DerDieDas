import {
  masculineEndings,
  feminineEndings,
  neuterEndings,
} from "../constants/endings";
import { Genders } from "../constants/genders";
import { masculineExceptions } from "../constants/exceptions/masculine";
import { feminineExceptions } from "../constants/exceptions/feminine";
import { neuterExceptions } from "../constants/exceptions/neuter";

export const determineGender = (word: string): Genders => {
  // Need to check exceptions first before checking endings
  if (isWordException(word, masculineExceptions)) {
    return Genders.Masculine;
  } else if (isWordException(word, feminineExceptions)) {
    return Genders.Feminine;
  } else if (isWordException(word, neuterExceptions)) {
    return Genders.Neuter;
  }

  if (doesWordHaveEnding(word, masculineEndings)) {
    return Genders.Masculine;
  } else if (doesWordHaveEnding(word, feminineEndings)) {
    return Genders.Feminine;
  } else if (doesWordHaveEnding(word, neuterEndings) || word.startsWith("Ge")) {
    return Genders.Neuter;
  } else {
    return Genders.Invalid;
  }
};

const doesWordHaveEnding = (word: string, endings: string[]): boolean => {
  return endings.filter((ending: string) => word.endsWith(ending)).length > 0;
};

const isWordException = (word: string, exceptions: string[]): boolean => {
  return exceptions.includes(word);
};
