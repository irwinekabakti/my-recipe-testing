import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Card from "../components/Card";

describe("Card Component", () => {
  const mockRecipe = {
    id: 1,
    name: "Test Recipe",
    image: "https://example.com/image.jpg",
    rating: 4.5,
    tags: ["Tag1", "Tag2"],
  };

  test("renders Card component with correct elements", () => {
    render(<Card el={mockRecipe} />);

    const img = screen.getByTestId("img-recipe-1");
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", "https://example.com/image.jpg");
    expect(img).toHaveAttribute("alt", "Test Recipe");

    const title = screen.getByTestId("title-recipe-1");
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent("Test Recipe");

    const rating = screen.getByTestId("rating-recipe-1");
    expect(rating).toBeInTheDocument();
    expect(rating).toHaveTextContent("4.5");

    const link = screen.getByTestId("link-recipe-1");
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "https://dummyjson.com/recipes/1");
  });
});
