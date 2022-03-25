import { put, takeEvery, call } from 'redux-saga/effects';
import api from '../../api';
import { setError, setLoading, setUser, setUsers } from '../actions/user';
import { GET_USERS, GET_USER_BY_ID } from '../constants/user';
import { errorTextCreator } from '../utils';

const getUserById = (id: string) => () => api.getUserById(id);

function* getUsersWorker() {
  yield put(setLoading(true));

  try {
    const { data } = yield call(api.getUsers);
    yield put(setUsers(data));
  } catch (error) {
    yield put(setError(errorTextCreator(error)));
  }
}

function* getUserByIdWorker({ payload: id }: any) {
  yield put(setLoading(true));

  try {
    const { data } = yield call(getUserById(id));
    yield put(setUser(data));
  } catch (error) {
    yield put(setError(errorTextCreator(error)));
  }
}

export function* userWatcher() {
  yield takeEvery(GET_USERS, getUsersWorker);
  yield takeEvery(GET_USER_BY_ID, getUserByIdWorker);
}
