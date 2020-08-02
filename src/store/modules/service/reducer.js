import produce from 'immer';
import { CREATE, ADD_PROBLEM, ADD_PROCEDURE } from './constants';

const INITIAL_STATE = {
  loading: false,
  service: null,
  problems: [],
  procedures: [],
  patient: null,
};

export default function service(state = INITIAL_STATE, action) {
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
      case ADD_PROBLEM.REQUEST: {
        draft.loading = true;
        break;
      }
      case ADD_PROBLEM.SUCCESS: {
        draft.loading = false;
        const index = draft.problems.findIndex(p => p.id === action.payload.id);
        if (index === -1) draft.problems.push(action.payload);
        break;
      }
      case ADD_PROCEDURE.REQUEST: {
        draft.loading = true;
        break;
      }
      case ADD_PROCEDURE.SUCCESS: {
        draft.loading = false;
        draft.procedures.push(action.payload);
        break;
      }
      default:
    }
  });
}
