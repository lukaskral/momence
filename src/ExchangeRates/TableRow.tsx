import React from "react";
import Styled from "styled-components";

const TableRowContainer = Styled.tr`
`;

const TableCell = Styled.td`
  padding: 4px;
`;

interface TableRowProps {
  amount: number;
  code: string;
  country: string;
  rate: number;
}

export function TableRow({ amount, code, country, rate }: TableRowProps) {
  return (
    <TableRowContainer>
      <TableCell>
        <span>{code}</span>&nbsp; (<em>{country}</em>)
      </TableCell>
      <TableCell>{amount}</TableCell>
      <TableCell>{rate}</TableCell>
    </TableRowContainer>
  );
}
