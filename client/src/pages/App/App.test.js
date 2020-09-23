import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./index";

describe("RENDER", () => {
  test("renders the header and input boxes on /home", () => {
    const { getByLabelText, getByTestId, getByText } = render(<App />);
    getByText("Contact Us");

    getByLabelText("First Name*");
    getByLabelText("Last Name*");
    getByLabelText("E-mail*");
    getByLabelText("Phone number*");
    getByLabelText("Address");
    getByLabelText("Message*");

    getByTestId("submit");
  });
});
