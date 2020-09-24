import React from "react";
import axios from "axios";
import { render, fireEvent, act, wait } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Form from "./index";

jest.mock("axios");

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

describe("POST", () => {
  test("for valid data, will submit all data required to /create", async () => {
    axios.post.mockImplementationOnce(() =>
      Promise.resolve({ status: 201, data: { msg: "quick test" } })
    );

    const { getByLabelText, getByTestId, getByText } = render(<Form />);

    // input into the text fields
    act(() => {
      fireEvent.change(getByLabelText("First Name*"), {
        target: { value: "first" },
      });
      fireEvent.change(getByLabelText("Last Name*"), {
        target: { value: "last" },
      });
      fireEvent.change(getByLabelText("E-mail*"), {
        target: { value: "a@b.com" },
      });
      fireEvent.change(getByLabelText("Phone number*"), {
        target: { value: "1234" },
      });
      fireEvent.change(getByLabelText("Address"), { target: { value: "" } });
      fireEvent.change(getByLabelText("Message*"), {
        target: { value: "My axios post test" },
      });
    });

    // click submit
    act(() => {
      fireEvent.click(getByTestId("submit"));
    });

    // check it's called once, that it's calling the correct path and data, and that the return message is rendered
    expect(axios.post).toHaveBeenCalledTimes(1);
    expect(axios.post).toHaveBeenCalledWith(
      "http://localhost:8080/create",
      expect.objectContaining({
        first_name: "first",
        last_name: "last",
        email: "a@b.com",
        phone: "1234",
        address: "",
        message_text: "My axios post test",
      })
    );
    await wait(() => {
      getByText("quick test");
    });
  });
});
