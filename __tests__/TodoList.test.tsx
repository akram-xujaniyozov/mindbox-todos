import React from "react";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoList from "../src/components/TodoList";

describe("TodoList component", () => {
  it("renders no listitems if button is not submitted", () => {
    render(<TodoList />);

    const listItems = screen.queryAllByRole("listitem");
    expect(listItems).toHaveLength(0);
  });

  it("renders listItems if button is submitted", () => {
    render(<TodoList />);
    const inputElement = screen.getByRole("textbox");

    userEvent.click(inputElement);

    const listItems = screen.queryAllByRole("listitem");
    expect(listItems).not.toHaveLength(10);
  });

  it("renders no listItems if there are only completed todos and clear completed button is clicked", () => {
    render(<TodoList />);

    const clearComletedBtn = screen.getByText(/clear completed/i);
    userEvent.click(clearComletedBtn);

    const listItems = screen.queryAllByRole("listitem");
    expect(listItems).toHaveLength(0);
  });
});
