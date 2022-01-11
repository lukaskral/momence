import Styled from "styled-components";
import { Field, FieldProps } from "formik";

export const Form = Styled.div`
  background: rgba(255, 255, 255, 0.5);
  padding: 20px;
  margin: 0;
  display: flex;
  align-items: baseline;
`;

const formEl = `
  color: #312054;
  font-weight: 700;
  display: inline-block;
  margin-right: 10px;
`;

const formField = `
  ${formEl}
  text-align: right;
  height: 40px;
  border-radius: 5px;
  border: solid 0px transparent;
  padding: 5px;
  width: 150px;
`;

export const Label = Styled.label`
  ${formEl}
  height: 40px;
`;

export const Input = Styled.input`
  ${formField}
`;

interface InputFieldProps {
  name: string;
  children?: React.ReactChild | React.ReactChild[];
}

export const TextField = ({ name }: InputFieldProps) => {
  return (
    <Field name={name}>
      {({ field, form, meta }: FieldProps<any>) => (
        <>
          <Input type="text" {...field} />
          {meta.touched && meta.error && (
            <div className="error">{meta.error}</div>
          )}
        </>
      )}
    </Field>
  );
};

export const Select = Styled.select`
${formField}
`;

export const SelectField = ({ name, children }: InputFieldProps) => {
  return (
    <Field name={name}>
      {({ field, form, meta }: FieldProps<any>) => (
        <>
          <Select {...field}>{children}</Select>
          {meta.touched && meta.error && (
            <div className="error">{meta.error}</div>
          )}
        </>
      )}
    </Field>
  );
};
