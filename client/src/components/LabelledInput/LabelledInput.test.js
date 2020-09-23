import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import LabelledInput from "./index";

describe("RENDER", () => {
  test("when type is submit, renders a button", () => {
    const { getByRole } = render(<LabelledInput type="submit" />);

    getByRole("button");
  });
  test("when type not submit, renders an input box and a label", () => {
    const { getByLabelText, getByRole } = render(
      <LabelledInput type="text" label="some label" />
    );

    getByLabelText("some label");
    getByRole("textbox");
  });
  test("shows controlValue text inside the text box", () => {
    const { getByDisplayValue } = render(
      <LabelledInput type="text" label="some label" controlValue="testValue" />
    );

    getByDisplayValue("testValue");
  });
  test("shows invalid input if input fails invalidInput regex", () => {
    const { getByText } = render(
      <LabelledInput
        type="text"
        label="some label"
        controlValue="testValue"
        invalidInput={/V/}
      />
    );

    getByText("invalid input");
  });
});
