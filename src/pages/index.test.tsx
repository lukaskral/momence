import React from "react";
import { render, screen } from "@testing-library/react";
import { ExchangeRatesPage } from "./ExchangeRatesPage";
import * as rateHooks from "../data/rates";
import { rates } from "../__fixtures__/rates";

describe("Loading", () => {
  it("renders correctly loading state", async () => {
    jest.spyOn(rateHooks, "useExchangeRates").mockReturnValue({
      isLoading: true,
      data: [],
    } as any);
    render(<ExchangeRatesPage />);
    expect(screen.getByText("Loading")).toBeInTheDocument();
  });

  it("renders correctly loaded state", async () => {
    jest.spyOn(rateHooks, "useExchangeRates").mockReturnValue({
      isLoading: false,
      data: rates,
    } as any);
    render(<ExchangeRatesPage />);
    expect(screen.queryByText("Loading")).not.toBeInTheDocument();
    expect(screen.getByTestId("exchange-rate-list")).toBeInTheDocument();
  });
});
