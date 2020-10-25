import { useState } from "react";
import { IFormProps } from "shared/interfaces/utils/form";

export const useForm = <I>({ initialValues }: IFormProps<I>) => {
  const [values, setValues] = useState(initialValues);

  const setFieldValue = <V>(name: string, value: V) => {
    setValues({ ...values, [name]: value });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { type, name, checked } = e.target;
    const getValue = () => {
      if (type === "checkbox") return checked;
      return e.target.value;
    };

    setValues({ ...values, [name]: getValue() });
  };

  return {
    values,
    setValues,
    setFieldValue,
    handleChange,
  };
};
