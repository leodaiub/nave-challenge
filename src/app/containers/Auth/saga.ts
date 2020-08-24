import { call, put, takeLatest } from 'redux-saga/effects';
import { actions } from './slice';
import api from 'utils/api';

function* login({ payload }) {
  try {
    const res = yield call(api.post, '/users/login', payload);
    localStorage.setItem('token', res.data.token);
    yield put(actions.loggedIn(res.data));
  } catch {
    yield put(actions.error());
  }
}

export function* authSaga() {
  yield takeLatest(actions.login, login);
}
