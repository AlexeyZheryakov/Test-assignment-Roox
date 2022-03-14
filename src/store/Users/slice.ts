import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getUsers, getUser } from './thunks';
import { Filters, IUsersStore } from './types';
import { sortScheme } from './utils';

const initialState: IUsersStore = {
  user: null,
  users: [],
  isLoading: false,
  error: '',
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    sortUsers(state, { payload: filter }: PayloadAction<Filters>) {
      switch (filter) {
        case Filters.city:
          state.users = state.users.sort(({ address: { city: cityA } }, { address: { city: cityB } }) => {
            return sortScheme(cityA, cityB);
          });
          break;
        case Filters.company:
          state.users = state.users.sort(({ company: { name: companyA } }, { company: { name: companyB } }) => {
            return sortScheme(companyA, companyB);
          });
          break;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.fulfilled, (state, { payload: users }) => {
        state.error = '';
        state.isLoading = false;
        state.users = users;
      })
      .addCase(getUser.fulfilled, (state, { payload: user }) => {
        state.error = '';
        state.isLoading = false;
        state.user = user;
      })
      .addMatcher(
        (action) => action.type.endsWith('pending'),
        (state) => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        (action) => {
          return action.type.endsWith('rejected');
        },
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      );
  },
});

export const { sortUsers } = usersSlice.actions;

export default usersSlice.reducer;
