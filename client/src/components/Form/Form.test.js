import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Form from "./index";

describe("RENDER", () => {
  test("renders input boxes on /home", () => {
    const { getByLabelText, getByTestId } = render(<Form />);

    getByLabelText("First Name*");
    getByLabelText("Last Name*");
    getByLabelText("E-mail*");
    getByLabelText("Phone number*");
    getByLabelText("Address");
    getByLabelText("Message*");

    getByTestId("submit");
  });
});
