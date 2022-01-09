import React from "react";
import Styled from "styled-components";

import { Header } from "../Header";
import { ExchangeRates } from "../ExchangeRates";
import { Loading } from "../Loading";
import { useExchangeRates } from "../data/rates";

const AppContent = Styled.main`
  max-width: 900px;
  min-height: 100%;
  margin: 0 auto;
  background: white;
  padding: 20px;
`;

export function ExchangeRatesPage() {
  const { isLoading, data: rates } = useExchangeRates();
  return (
    <>
      <Header />
      <AppContent>
        {isLoading ? <Loading /> : <ExchangeRates rates={rates || []} />}
      </AppContent>
    </>
  );
}
