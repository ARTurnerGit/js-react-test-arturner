import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import {
  Router,
  createHistory,
  createMemorySource,
  LocationProvider,
} from "@reach/router";
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

describe("INPUT VALIDITY", () => {
  test("error message for invalid first name input", () => {
    const { getByLabelText, queryByText } = render(<App />);
    const input = getByLabelText("First Name*");
    fireEvent.change(input, { target: { value: "name" } });
    expect(queryByText("invalid")).not.toBeInTheDocument();

    fireEvent.change(input, { target: { value: "n4m3" } });
    expect(queryByText("invalid input")).toBeInTheDocument();
  });
});

// test("renders the header and mocked data on /admin", () => {});
