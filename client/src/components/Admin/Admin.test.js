import React from "react";
import { act, render } from "@testing-library/react";

import Admin from "./index";

let fakeResults = [
  {
    message_id: "1",
    message_first_name: "Tester",
    message_last_name: "Oni",
    message_created_at: new Date(0),
    message_text: "test text",
  },
];

describe("FETCH", () => {
  test("renders the return from the /admin path ", async () => {
    act(() => {
      fetch.mockResponseOnce(JSON.stringify({ results: fakeResults }));
    });

    const { findByText } = render(<Admin />);
    findByText("Tester");
    findByText("Oni");
    findByText("1970");
    findByText("test text");
  });
});
