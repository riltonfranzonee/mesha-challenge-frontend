import { CREATE } from './constants';

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
