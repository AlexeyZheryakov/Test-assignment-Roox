import { IUser } from '../../api/types';

export interface IUsersStore {
  user: IUser | null;
  users: IUser[];
  isLoading: boolean;
  error: string;
}

export enum Filters {
  city = 'city',
  company = 'company',
}
