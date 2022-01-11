import React from "react";
import Styled from "styled-components";

const HeaderContainer = Styled.header`
    background: rgb(2,0,36);
    background: linear-gradient(149deg, rgba(2,0,36,1) 0%, rgba(112,9,121,1) 42%, rgba(247,0,255,1) 100%);
    color: white;
    margin: 0;
    padding: 10px 20px;
`;

export function Header() {
  return (
    <HeaderContainer>
      <h1>Momence Currency App</h1>
    </HeaderContainer>
  );
}
