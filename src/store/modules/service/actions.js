import {
  CREATE,
  ADD_PROBLEM,
  ADD_PROCEDURE,
  REMOVE_PROCEDURE,
  FINISH,
} from './constants';

export function createService(patientData) {
  return {
    type: CREATE.REQUEST,
    payload: patientData,
  };
}

export function createServiceSuccess({ patient, service }) {
  return {
    type: CREATE.SUCCESS,
    payload: {
      patient,
      service,
    },
  };
}

export function addProblem(name) {
  return {
    type: ADD_PROBLEM.REQUEST,
    payload: name,
  };
}

export function addProblemSuccess(problem) {
  return {
    type: ADD_PROBLEM.SUCCESS,
    payload: problem,
  };
}

export function addProcedure({ name, duration, price }) {
  return {
    type: ADD_PROCEDURE.REQUEST,
    payload: {
      name,
      duration,
      price,
    },
  };
}

export function addProcedureSuccess(procedure) {
  return {
    type: ADD_PROCEDURE.SUCCESS,
    payload: procedure,
  };
}

export function removeProcedure(id) {
  return {
    type: REMOVE_PROCEDURE.SUCCESS,
    payload: id,
  };
}

export function finishService({ problems_id, procedures_id, service_id }) {
  return {
    type: FINISH.REQUEST,
    payload: {
      service_id,
      procedures_id,
      problems_id,
    },
  };
}

export function finishServiceSuccess() {
  return {
    type: FINISH.SUCCESS,
  };
}
