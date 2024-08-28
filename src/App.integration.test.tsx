import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { expect, test } from "vitest";
import Home from "./pages/Home";

test("Add item to TODO", async () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );
  const user = userEvent.setup();
  const button = screen.getByText("Add");
  const input = screen.getByPlaceholderText("Add a todo");
  const list = screen.getByTestId("list");

  await user.type(input, "Hello");
  await user.click(button);

  const nameText = screen.getByTestId("name");

  expect(list.children.length).toBe(1);

  expect(nameText.textContent).toBe("Hello");
});
