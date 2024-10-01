import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import NavBar from "../components/NavBar";

const mockSearch = jest.fn();

test("renders navbar and handles search submission", () => {
  render(<NavBar search={mockSearch} />);

  const myRecipe = screen.getByTestId("my-recipe");
  expect(myRecipe).toBeInTheDocument();
  expect(myRecipe).toHaveTextContent("My Recipe");

  const input = screen.getByPlaceholderText("Recipe Name");
  const form = screen.getByTestId("form-search");

  fireEvent.change(input, { target: { value: "Pizza" } });
  expect(input.value).toBe("Pizza");
  expect(form).toBeInTheDocument();

  fireEvent.submit(form);
  expect(mockSearch).toHaveBeenCalledWith("Pizza");
  expect(input.value).toBe("");
});
