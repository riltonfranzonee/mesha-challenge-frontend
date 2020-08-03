import { all, takeLatest, put, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import { CREATE, FINISH, ADD_PROBLEM, ADD_PROCEDURE } from './constants';

import api from '../../../services/api';
import history from '../../../services/history';

import {
  createServiceSuccess,
  finishServiceSuccess,
  addProblemSuccess,
  addProcedureSuccess,
} from './actions';

function* createService({ payload }) {
  try {
    const { data } = yield call(api.post, 'patients', payload);

    yield put(createServiceSuccess(data));
    history.push('/service');
  } catch (err) {
    toast.error(err.response.data.message);
  }
}

function* addProblem({ payload }) {
  try {
    const { data } = yield call(api.post, 'problems', {
      name: payload.toLowerCase(),
    });

    yield put(addProblemSuccess(data));
  } catch (err) {
    toast.error('Ocorreu um erro ao adicionar a queixa, tente novamente');
  }
}

function* addProcedure({ payload }) {
  try {
    const { name, duration, price } = payload;

    const { data } = yield call(api.post, 'procedures', {
      name: name.toLowerCase(),
      duration,
      price,
    });

    yield put(addProcedureSuccess(data));
  } catch (err) {
    toast.error('Ocorreu um erro ao adicionar o tratamento, tente novamente');
  }
}

function* finishService({ payload }) {
  try {
    const { service_id, problems_id, procedures_id } = payload;

    yield call(api.put, 'services', { service_id, problems_id, procedures_id });
    history.push('/');
    yield put(finishServiceSuccess());
  } catch (err) {
    toast.error('Ocorreu um erro ao finalizar o atendimento, tente novamente');
  }
}

export default all([
  takeLatest(CREATE.REQUEST, createService),
  takeLatest(FINISH.REQUEST, finishService),
  takeLatest(ADD_PROBLEM.REQUEST, addProblem),
  takeLatest(ADD_PROCEDURE.REQUEST, addProcedure),
]);
