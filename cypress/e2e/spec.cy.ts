import { Genders } from "../../src/constants/genders";

describe("Gender answers", () => {
  const inputId = "#default-input",
    answerId = "#genderAnswer";

  beforeEach(() => {
    cy.visit("http://localhost:3000/derdiedas");
  });

  it("masculine", () => {
    cy.get(inputId).type("Gebrauch");
    cy.get(answerId).should("have.text", Genders.Masculine);
  });

  it("feminine", () => {
    cy.get(inputId).type("Rose");
    cy.get(answerId).should("have.text", Genders.Feminine);
  });

  it("neuter", () => {
    cy.get(inputId).type("Mädchen");
    cy.get(answerId).should("have.text", Genders.Neuter);
  });

  it("invalid", () => {
    cy.get(inputId).type("asddasdsadasdas");
    cy.get(answerId).should("have.text", `${Genders.Invalid} Word`);
  });
});
