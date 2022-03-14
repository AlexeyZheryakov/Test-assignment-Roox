import ApiClient from './ApiClient';
import { IUser } from './types';

const api = {
  getUsers: () => ApiClient.get<IUser[]>('/users'),
  getUserById: (id: string) => ApiClient.get<IUser>(`/users/${id}`),
};

export default api;
