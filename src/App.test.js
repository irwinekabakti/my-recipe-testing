import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

const mockRecipes = {
  recipes: [
    {
      id: 1,
      image: "image-url",
      name: "Recipe 1",
      rating: 4.5,
      tags: ["Tag1", "Tag2"],
    },
    {
      id: 2,
      image: "image-url-2",
      name: "Recipe 2",
      rating: 4.7,
      tags: ["Tag3", "Tag4"],
    },
  ],
};

beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockRecipes),
    })
  );
});

test("renders the App and fetches recipes", async () => {
  render(<App />);

  const banner = screen.getByTestId("image-banner");
  expect(banner).toBeInTheDocument();
  expect(banner).toHaveAttribute(
    "src",
    "https://www.instacart.com/company/wp-content/uploads/2022/11/cooking-statistics-hero.jpg"
  );
  expect(banner).toHaveAttribute("alt", "banner");

  await waitFor(() => {
    const card1 = screen.getByTestId("title-recipe-1");
    expect(card1).toHaveTextContent("Recipe 1");
  });

  await waitFor(() => {
    const card2 = screen.getByTestId("title-recipe-2");
    expect(card2).toHaveTextContent("Recipe 2");
  });

  expect(screen.getByTestId("my-recipe")).toBeInTheDocument();
  expect(screen.getByTestId("img-recipe-1")).toBeInTheDocument();
  expect(screen.getByTestId("footer-text")).toBeInTheDocument();
});
