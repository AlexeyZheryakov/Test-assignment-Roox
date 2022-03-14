import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api';
import { IUser } from '../../api/types';

const getUsers = createAsyncThunk<IUser[]>('users/getUsers', async (_, { rejectWithValue }) => {
  try {
    return (await api.getUsers()).data;
  } catch (error) {
    return rejectWithValue((error as Error).message);
  }
});

const getUser = createAsyncThunk<IUser, string>('users/getUserById', async (id, { rejectWithValue }) => {
  try {
    return (await api.getUserById(id)).data;
  } catch (error) {
    return rejectWithValue((error as Error).message);
  }
});

export { getUsers, getUser };
