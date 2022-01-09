import React from "react";
import Styled from "styled-components";
import { Header } from "./Header";

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
      <AppContent>Hello world</AppContent>
    </AppContainer>
  );
}
