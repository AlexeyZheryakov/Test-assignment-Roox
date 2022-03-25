import { IUser } from '../../api/types';
import {
  GET_USERS,
  GET_USER_BY_ID,
  SET_ERROR,
  SET_LOADING,
  SET_USER,
  SET_USERS,
  SORTING_USERS_BY_CITY,
  SORTING_USERS_BY_COMPANY,
} from '../constants/user';
import { createAction, createActionWithPayload } from '../utils';

export const usersFilterByCity = () => createAction(SORTING_USERS_BY_CITY);
export const usersFilterByCompany = () => createAction(SORTING_USERS_BY_COMPANY);
export const getUsers = () => createAction(GET_USERS);
export const setUsers = (payload: IUser[]) => createActionWithPayload(SET_USERS, payload);
export const setUser = (payload: IUser) => createActionWithPayload(SET_USER, payload);
export const getUserById = (payload: string) => createActionWithPayload(GET_USER_BY_ID, payload);
export const setError = (payload: string) => createActionWithPayload(SET_ERROR, payload);
export const setLoading = (payload: boolean) => createActionWithPayload(SET_LOADING, payload);
