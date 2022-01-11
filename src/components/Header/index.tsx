import React from "react";
import Styled from "styled-components";

const HeaderContainer = Styled.header`
  background: rgb(147,141,255);
  background: linear-gradient(149deg, rgba(147,141,255,1) 0%, rgba(207,138,255,1) 49%, rgba(147,141,255,1) 100%);
  color: white;
  margin: 0;
  padding: 10px 20px 150px 20px;
`;

const H1 = Styled.h1`
  margin: 0;
  padding: 0;
`;

export function Header() {
  return (
    <HeaderContainer>
      <H1>Momence Currency App</H1>
    </HeaderContainer>
  );
}
