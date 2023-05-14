import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Flag from "./flag";
import { Genders } from "../../constants/genders";

describe("<Flag />", () => {
  test("it should mount", () => {
    render(<Flag wordGender={Genders.None} />);

    const flag = screen.getByTestId("Flag");

    expect(flag).toBeInTheDocument();
  });
});
