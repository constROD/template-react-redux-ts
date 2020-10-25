import { useState } from "react";
import { IFieldArray, IForm } from "shared/interfaces/utils/form";

export const useForm = <I>({ initialValues }: IForm<I>) => {
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

export const useFieldArray = <D>({
  fieldName,
  defaultValue,
  initialValues,
  setFieldValue,
}: IFieldArray<D>) => {
  const [values, setValues] = useState(initialValues || [defaultValue]);

  const add = () => {
    const newList = [...values];
    newList.push(defaultValue);
    setValues(newList);
  };

  const remove = (index: number) => {
    const newList = [...values];
    newList.splice(index, 1);
    setValues(newList);
  };

  const handleChangeArray = (idx: number, name: string, value: any) => {
    const newList = [...values];
    newList[idx] = { ...newList[idx], [name]: value };
    setValues(newList);
    setFieldValue(fieldName, newList);
  };

  return {
    values,
    add,
    remove,
    handleChangeArray,
  };
};
