import { render, screen } from "@testing-library/react";
import InputModal from "./InputModal";
import { Genders } from "../../constants/genders";
import "@testing-library/jest-dom/extend-expect";

describe("<InputModal />", () => {
  test("it should mount", () => {
    render(
      <InputModal wordGender={Genders.Masculine} setWordGender={() => {}} />
    );

    const inputModal = screen.getByTestId("InputModal");

    expect(inputModal).toBeInTheDocument();
  });
});
