export interface IForm<I> {
  initialValues: I;
}

export interface IFieldArray<D> {
  fieldName: string;
  defaultValue: D;
  initialValues?: D[];
  setFieldValue: (name: string, value: any) => void;
}
