import React from "react";
import Styled from "styled-components";
import { IExchangeRate } from "../../models";
import { TableRow } from "./TableRow";

const Table = Styled.table`
    width: 100%;
    font-size: 1.3em;
    border-collapse:collapse;
    margin-top: 20px;
`;

const HeaderCell = Styled.th`
    padding: 4px;
    justify: center;
    border-bottom: solid 1px #312054;
  
`;

interface IExchangeRatesProps {
  rates: IExchangeRate[];
}

export function ExchangeRates({ rates }: IExchangeRatesProps) {
  return (
    <Table>
      <thead>
        <tr>
          <HeaderCell>Currency</HeaderCell>
          <HeaderCell>Amount</HeaderCell>
          <HeaderCell>Rate</HeaderCell>
        </tr>
      </thead>
      <tbody data-testid="exchange-rate-list">
        {rates
          ? rates.map((rate) => <TableRow key={rate.code} {...rate} />)
          : null}
      </tbody>
    </Table>
  );
}
