import React from "react";
import { render } from "@testing-library/react";
import {
  Router,
  createHistory,
  createMemorySource,
  LocationProvider,
} from "@reach/router";
import App from "./index";

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

test("renders the header and mocked data on /admin", () => {});
