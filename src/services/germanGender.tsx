import axios from "axios";
import { Genders } from "../constants/genders";

// Needed as the German Gender API has a CORS issue
const CORS_ANYWHERE = "https://cors-anywhere.herokuapp.com/";
const API_URL = "https://german-gender-api.deta.dev/api/v1/nouns/";

// Aasgeier (Vulture) = Masculine
// A = Feminine
// Tor (Gate) = Neuter
export const getGermanGender = async (word: string) => {
  try {
    const {
      data: { gender },
    } = await axios({
      method: "get",
      url: CORS_ANYWHERE + API_URL + word,
    });

    return gender && gender !== "tbd"
      ? ((gender.charAt(0).toUpperCase() + gender.slice(1)) as Genders)
      : Genders.Invalid;
  } catch {
    return Genders.Invalid;
  }
};
