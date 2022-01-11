import React, { useMemo } from "react";

import { Header } from "../components/Header";
import { ExchangeRates } from "../components/ExchangeRates";
import { ConvertForm } from "../components/ConvertForm";
import { Loading } from "../components/Loading";
import { useExchangeRates } from "../data/rates";
import { TCurrency } from "../models";
import { Page, PageContent } from "../components/Page/Page";

export function ExchangeRatesPage() {
  const { isLoading, data: rates } = useExchangeRates();
  const currencies = useMemo(() => {
    const result = new Set<TCurrency>();
    rates?.forEach((rate) => result.add(rate.code));
    return Array.from(result);
  }, [rates]);
  return (
    <Page>
      <Header />
      <PageContent>
        <ConvertForm rates={rates ?? []} currencies={currencies} />
        {isLoading ? <Loading /> : <ExchangeRates rates={rates || []} />}
      </PageContent>
    </Page>
  );
}
