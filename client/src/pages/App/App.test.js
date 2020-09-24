import React from "react";
import { act, render } from "@testing-library/react";

import App from "./index";

describe("RENDER", () => {
  test("renders the header", () => {
    const { getByText } = render(<App />);
    getByText("Contact Us");
    getByText("Fetching from API...");
  });
});

describe("FETCH", () => {
  test("updates header with response from the API", async () => {
    act(() => {
      fetch.mockResponseOnce(
        JSON.stringify({ data: { message: "Mock test" } })
      );
    });

    const { findByText } = render(<App />);
    const element = await findByText("Mock test");
    expect(element).toBeInTheDocument();
  });
});
