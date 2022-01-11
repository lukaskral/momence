import React from "react";
import { render, screen } from "@testing-library/react";
import { Loading } from ".";

describe("Loading", () => {
  it("renders correctly", async () => {
    render(<Loading />);
    expect(screen.getByText("Loading")).toBeInTheDocument();
  });
});
