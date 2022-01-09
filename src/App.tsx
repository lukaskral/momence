import React from "react";
import Styled from "styled-components";
import { Header } from "./Header";
import { ExchangeRates } from "./ExchangeRates";

import { rates } from "./__mocks__/rates";

const AppContainer = Styled.div`
`;

const AppContent = Styled.main`
  max-width: 900px;
  min-height: 100%;
  margin: 0 auto;
  background: white;
  padding: 20px;
`;

export function App() {
  return (
    <AppContainer>
      <Header />
      <AppContent>
        <ExchangeRates rates={rates} />
      </AppContent>
    </AppContainer>
  );
}
