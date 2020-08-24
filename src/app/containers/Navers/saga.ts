import { call, put, takeLatest } from 'redux-saga/effects';
import { actions } from './slice';
import api from 'utils/api';
import { hide, show as showModal } from 'redux-modal';

function* index() {
  try {
    const res = yield call(api.get, '/navers');
    yield put(actions.getNaversSuccess(res.data));
  } catch {
    yield put(
      showModal('infoDialog', {
        title: 'Ocorreu um erro',
        message: 'Tente novamente',
      }),
    );
    yield put(actions.error());
  }
}

function* show({ payload }) {
  try {
    const res = yield call(api.get, `/navers/${payload}`);
    yield put(actions.showNaverSuccess(res.data));
  } catch {
    yield put(
      showModal('infoDialog', {
        title: 'Ocorreu um erro',
        message: 'Tente novamente',
      }),
    );
    yield put(actions.error());
  }
}

function* create({ payload }) {
  try {
    const res = yield call(api.post, '/navers', payload.data);
    yield put(actions.createNaverSuccess(res.data));
    yield put(hide('deleteDialog'));
    yield put(hide('naverModal'));
    yield put(
      showModal('infoDialog', {
        title: 'Naver criado',
        message: 'Naver adicionado com sucesso!',
      }),
    );
  } catch {
    yield put(
      showModal('infoDialog', {
        title: 'Ocorreu um erro',
        message: 'Tente novamente',
      }),
    );
    yield put(actions.error());
  }
}

function* update({ payload }) {
  try {
    const res = yield call(api.put, `/navers/${payload.id}`, payload.data);
    yield put(actions.updateNaverSuccess(res.data));
    yield put(hide('deleteDialog'));
    yield put(hide('naverModal'));
    yield put(
      showModal('infoDialog', {
        title: 'Naver atualizado',
        message: 'Naver atualizado com sucesso!',
      }),
    );
  } catch {
    yield put(
      showModal('infoDialog', {
        title: 'Ocorreu um erro',
        message: 'Tente novamente',
      }),
    );
    yield put(actions.error());
  }
}

function* deleteNaver({ payload }) {
  try {
    yield call(api.delete, `/navers/${payload}`);
    yield put(actions.deleteNaverSuccess(payload));
    yield put(hide('deleteDialog'));
    yield put(hide('naverModal'));
    yield put(
      showModal('infoDialog', {
        title: 'Naver excluído',
        message: 'Naver excluído com sucesso!',
      }),
    );
  } catch {
    yield put(
      showModal('infoDialog', {
        title: 'Ocorreu um erro',
        message: 'Tente novamente',
      }),
    );
    yield put(actions.error());
  }
}

export function* naversSaga() {
  yield takeLatest(actions.getNavers, index);
  yield takeLatest(actions.showNaver, show);
  yield takeLatest(actions.createNaver, create);
  yield takeLatest(actions.updateNaver, update);
  yield takeLatest(actions.deleteNaver, deleteNaver);
}
