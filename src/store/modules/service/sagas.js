import { all, takeLatest, put, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import { CREATE } from './constants';

import api from '../../../services/api';
import history from '../../../services/history';

import { createServiceSuccess } from './actions';

export function* createService({ payload }) {
  try {
    const { data } = yield call(api.post, 'patients', payload);

    yield put(createServiceSuccess(data));
    history.push('/service');
  } catch (err) {
    toast.error(err.response.data.message);
  }
}

export default all([takeLatest(CREATE.REQUEST, createService)]);
