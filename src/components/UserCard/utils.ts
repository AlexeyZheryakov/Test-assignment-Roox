import { UserСard } from '../../pages/Main/config';

type TValuesKeys = keyof typeof UserСard;

type TValues = Record<TValuesKeys, string>;

export const getOptions = (values: TValues) => {
  const keysOfValues = Object.keys(values) as [keyof TValues];
  return keysOfValues.map((key) => ({ title: UserСard[key], text: values[key] }));
};
