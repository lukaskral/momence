import React from "react";
import Styled from "styled-components";

const LoadingContainer = Styled.div`
    text-align: center;
    color: #777;
`;

export function Loading() {
  return <LoadingContainer>Loading&hellip;</LoadingContainer>;
}
