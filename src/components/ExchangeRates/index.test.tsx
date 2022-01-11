import React from "react";
import { render, screen } from "@testing-library/react";
import { ExchangeRates } from ".";

import { rates } from "../../__fixtures__/rates";

describe("ExchangeRates table", () => {
  it("renders table", async () => {
    render(<ExchangeRates rates={rates} />);
    expect(screen.getByText("Currency")).toBeInTheDocument();
    expect(screen.getByText("Amount")).toBeInTheDocument();
    expect(screen.getByText("Rate")).toBeInTheDocument();

    const exchangeRateList = screen.getByTestId("exchange-rate-list");
    expect(exchangeRateList).toBeInTheDocument();
    expect(exchangeRateList.childNodes.length).toEqual(rates.length);

    expect(
      exchangeRateList.childNodes[0].textContent?.includes("GBP")
    ).toBeTruthy();
    expect(
      exchangeRateList.childNodes[0].textContent?.includes("29.291")
    ).toBeTruthy();
  });
});
