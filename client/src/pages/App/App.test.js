import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./index";

describe("RENDER", () => {
  test("renders the header", () => {
    const { getByText } = render(<App />);
    getByText("Contact Us");
  });
});
