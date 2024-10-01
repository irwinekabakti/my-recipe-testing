import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Footer from "../components/Footer";

describe("Footer Component", () => {
  test("renders Footer component with correct elements", () => {
    render(<Footer />);

    const footerText = screen.getByTestId("footer-text");
    expect(footerText).toBeInTheDocument();
    expect(footerText).toHaveTextContent(
      "© 2024 Company, Inc. All rights reserved."
    );

    const facebookLink = screen.getByTestId("link-facebook");
    expect(facebookLink).toBeInTheDocument();
    expect(facebookLink).toHaveAttribute("href", "https://facebook.com");

    const xLink = screen.getByTestId("link-x");
    expect(xLink).toBeInTheDocument();
    expect(xLink).toHaveAttribute("href", "https://x.com");

    const instagramLink = screen.getByTestId("link-instagram");
    expect(instagramLink).toBeInTheDocument();
    expect(instagramLink).toHaveAttribute("href", "https://instagram.com/");
  });
});
