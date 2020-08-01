import produce from 'immer';
import { CREATE } from './constants';

const INITIAL_STATE = {
  loading: null,
  service: null,
  patient: null,
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case CREATE.REQUEST: {
        draft.loading = true;
        break;
      }
      case CREATE.SUCCESS: {
        draft.service = action.payload.service;
        draft.patient = action.payload.patient;
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
