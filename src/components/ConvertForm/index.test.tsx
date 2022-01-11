import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { ConvertForm } from ".";

import { rates } from "../../__fixtures__/rates";
import { currencies } from "../../__fixtures__/curencies";

describe("ConvertForm", () => {
  it("computes converted value", async () => {
    render(<ConvertForm rates={rates} currencies={currencies} />);
    const inputEl = screen.getByRole("textbox");
    expect(inputEl).toBeInTheDocument();
    const dropdownEl = screen.getByRole("combobox");
    expect(dropdownEl).toBeInTheDocument();
    const btnEl = screen.getByRole("button");
    expect(btnEl).toBeInTheDocument();

    fireEvent.change(inputEl, { target: { value: "100.0" } });
    fireEvent.change(dropdownEl, { target: { value: "EUR" } });
    fireEvent.click(btnEl);

    await screen.findByText("4.09 EUR");

    fireEvent.change(inputEl, { target: { value: "99 999" } });
    fireEvent.change(dropdownEl, { target: { value: "EUR" } });
    fireEvent.click(btnEl);

    await screen.findByText("4091.61 EUR");
  });

  it("validates text input", async () => {
    render(<ConvertForm rates={rates} currencies={currencies} />);
    const inputEl = screen.getByRole("textbox");
    expect(inputEl).toBeInTheDocument();
    const btnEl = screen.getByRole("button");
    expect(btnEl).toBeInTheDocument();

    fireEvent.change(inputEl, { target: { value: "abcd" } });
    fireEvent.click(btnEl);

    await screen.findByText("This must be a number");
  });
});
