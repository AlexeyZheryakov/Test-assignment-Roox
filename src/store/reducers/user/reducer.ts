import { AnyAction } from 'redux';
import {
  SET_ERROR,
  SET_LOADING,
  SET_USER,
  SET_USERS,
  SORTING_USERS_BY_CITY,
  SORTING_USERS_BY_COMPANY,
} from '../../constants/user';
import { sortScheme } from '../../utils';
import { IUsersStore } from './types';

const initialState: IUsersStore = {
  user: null,
  users: [],
  isLoading: false,
  error: '',
};

// eslint-disable-next-line @typescript-eslint/default-param-last
const userReducer = (state: IUsersStore = initialState, { type, payload }: AnyAction): IUsersStore => {
  switch (type) {
    case SET_USERS:
      return { ...state, users: payload, isLoading: false };
    case SET_USER:
      return { ...state, user: payload, isLoading: false };
    case SET_ERROR:
      return { ...state, error: payload };
    case SET_LOADING:
      return { ...state, isLoading: payload };
    case SORTING_USERS_BY_CITY:
      const sortingUsersByCity = state.users.sort(({ address: { city: cityA } }, { address: { city: cityB } }) => {
        return sortScheme(cityA, cityB);
      });
      return { ...state, users: sortingUsersByCity };
    case SORTING_USERS_BY_COMPANY:
      const sortingUsersByCompany = state.users.sort(
        ({ company: { name: companyA } }, { company: { name: companyB } }) => {
          return sortScheme(companyA, companyB);
        }
      );
      return { ...state, users: sortingUsersByCompany };
    default:
      return state;
  }
};

export default userReducer;
