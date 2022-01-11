import React from "react";
import { render, screen } from "@testing-library/react";
import { Header } from ".";

describe("Header", () => {
  it("renders correctly", async () => {
    render(<Header />);
    expect(screen.getByText("Momence Currency App")).toBeInTheDocument();
  });
});
