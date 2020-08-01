import { all } from 'redux-saga/effects';

import service from './service/sagas';

export default function* rootSaga() {
  return yield all([service]);
}
