import { CREATE, ADD_PROBLEM, ADD_PROCEDURE } from './constants';

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

export function addProcedure(name) {
  return {
    type: ADD_PROCEDURE.REQUEST,
    payload: name,
  };
}

export function addProcedureSuccess(procedure) {
  return {
    type: ADD_PROCEDURE.SUCCESS,
    payload: procedure,
  };
}
