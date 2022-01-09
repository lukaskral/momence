import React from "react";
import Styled from "styled-components";

import { QueryClient, QueryClientProvider } from "react-query";
import { ExchangeRatesPage } from "./pages/ExchangeRatesPage";

const AppContainer = Styled.div`
`;

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppContainer>
        <ExchangeRatesPage />
      </AppContainer>
    </QueryClientProvider>
  );
}
