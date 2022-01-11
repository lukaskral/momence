import React, { useMemo } from "react";
import Styled from "styled-components";

import { Header } from "../components/Header";
import { ExchangeRates } from "../components/ExchangeRates";
import { ConvertForm } from "../components/ConvertForm";
import { Loading } from "../components/Loading";
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
