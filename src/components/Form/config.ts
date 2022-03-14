import * as yup from 'yup';
import { IUser } from '../../api/types';

const regexString = /^[a-zA-Z\s\.\_]+$/;
const regexPhone = /^[0-9\-\()\x\s\.]+$/;
const regexZipcode = /^[0-9\-]+$/;
const regexWebsite = /^[a-zA-Z\.]+$/;

const validationSchema = yup.object().shape({
  name: yup.string().required().matches(regexString),
  username: yup.string().required().matches(regexString),
  email: yup.string().email().required(),
  street: yup.string().required().matches(regexString),
  city: yup.string().required().matches(regexString),
  zipcode: yup.string().required().matches(regexZipcode),
  phone: yup.string().required().matches(regexPhone),
  website: yup.string().required().matches(regexWebsite),
});

export interface IValues {
  name: string;
  username: string;
  email: string;
  street: string;
  city: string;
  zipcode: string;
  phone: string;
  website: string;
  comment: string;
}

export enum InputNames {
  name = 'Name',
  username = 'User Name',
  email = 'E-mail',
  street = 'Street',
  city = 'City',
  zipcode = 'Zip code',
  phone = 'Phone',
  website = 'Website',
}

export const setInitialValues = ({
  name,
  username,
  email,
  address: { street, city, zipcode },
  phone,
  website,
}: IUser) => ({
  name,
  username,
  email,
  street,
  city,
  zipcode,
  phone,
  website,
  comment: '',
});

export type TInputLabelNames = keyof typeof InputNames;

export default validationSchema;
