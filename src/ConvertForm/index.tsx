import React, { useCallback, useState } from "react";
import { Field, Formik, FormikErrors, ErrorMessage } from "formik";
import Styled from "styled-components";

import { TCurrency, IExchangeRate } from "../models";

const FormContainer = Styled.div`
    border: solid 1px #ccc;
    border-radius: 10px;
    background: #eee;
    padding: 10px;
    margin: 20px 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
`;

const Button = Styled.button`
    font-size: 1.3em;
    background: white;
    border: solid 1px black;
    border-radius: 5px;
`;

const Result = Styled.span`
    font-size: 1.3em;
    font-weight: bold;
    text-align: right;
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
        <FormContainer>
          <label>
            <Field name="value" /> <span>CZK</span>{" "}
            <ErrorMessage name="value" />
          </label>
          <label>
            convert to&nbsp;
            <Field as="select" name="currency">
              {currencies.map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </Field>
            <ErrorMessage name="currency" />
          </label>

          <Button onClick={submitForm}>Convert</Button>

          <Result>
            {convertedValue
              ? `${convertedValue.amount.toFixed(2)} ${convertedValue.currency}`
              : ""}
          </Result>
        </FormContainer>
      )}
    </Formik>
  );
}
