import { IUser } from '../../../api/types';

export interface IUsersStore {
  user: IUser | null;
  users: IUser[];
  isLoading: boolean;
  error: string;
}
