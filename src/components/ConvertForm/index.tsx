import React, { useCallback, useState } from "react";
import { Formik, FormikErrors } from "formik";
import Styled from "styled-components";

import { TCurrency, IExchangeRate } from "../../models";
import { Button } from "../Common/Button";
import { Form, Label, SelectField, TextField } from "../Common/Form";

const Result = Styled.span`
  font-size: 1.3em;
  font-weight: bold;
  text-align: right;
  height: 40px;
  flex-grow: 1;
  justify-content: center;
`;

interface ConvertFormProps {
  rates: IExchangeRate[];
  currencies: TCurrency[];
}

interface ConvertFormFields {
  value: string;
  currency: string;
}

export function ConvertForm({ rates, currencies }: ConvertFormProps) {
  const [convertedValue, setConvertedValue] = useState<
    undefined | { amount: number; currency: string }
  >(undefined);

  const validate = useCallback((values) => {
    const errors: FormikErrors<ConvertFormFields> = {};
    if (!values.value) {
      errors.value = "This field is required";
    }
    if (isNaN(parseFloat(values.value))) {
      errors.value = "This must be a number";
    }
    if (!values.currency) {
      errors.currency = "This field is required";
    }
    return errors;
  }, []);

  const onSubmit = useCallback(
    (values) => {
      const value = parseFloat(values.value.replace(",", ".").replace(" ", ""));
      const rate = rates.find((r) => r.code === values.currency);
      if (!rate) {
        setConvertedValue(undefined);
        return;
      }
      setConvertedValue({
        amount: (rate.amount * value) / rate.rate,
        currency: values.currency,
      });
    },
    [rates]
  );

  return (
    <Formik<ConvertFormFields>
      initialValues={{ value: "0.0", currency: "EUR" }}
      validate={validate}
      onSubmit={onSubmit}
    >
      {({ submitForm }) => (
        <Form>
          <Label>
            <TextField name="value" /> <span>CZK</span>{" "}
          </Label>
          <Label>
            convert to&nbsp;
            <SelectField name="currency">
              {currencies.map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </SelectField>
          </Label>

          <Button onClick={submitForm}>Convert</Button>

          <Result>
            {convertedValue ? (
              `${convertedValue.amount.toFixed(2)} ${convertedValue.currency}`
            ) : (
              <>&nbsp;</>
            )}
          </Result>
        </Form>
      )}
    </Formik>
  );
}
