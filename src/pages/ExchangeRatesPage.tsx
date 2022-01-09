import React, { useMemo } from "react";
import Styled from "styled-components";

import { Header } from "../Header";
import { ExchangeRates } from "../ExchangeRates";
import { ConvertForm } from "../ConvertForm";
import { Loading } from "../Loading";
import { useExchangeRates } from "../data/rates";
import { TCurrency } from "../models";

const AppContent = Styled.main`
  max-width: 900px;
  min-height: 100%;
  margin: 0 auto;
  background: white;
  padding: 20px;
`;

export function ExchangeRatesPage() {
  const { isLoading, data: rates } = useExchangeRates();
  const currencies = useMemo(() => {
    const result = new Set<TCurrency>();
    rates?.forEach((rate) => result.add(rate.code));
    return Array.from(result);
  }, [rates]);
  return (
    <>
      <Header />
      <AppContent>
        <ConvertForm rates={rates ?? []} currencies={currencies} />
        {isLoading ? <Loading /> : <ExchangeRates rates={rates || []} />}
      </AppContent>
    </>
  );
}
