import React from 'react';
import { Switch, Route } from 'react-router-dom';

import PatientRegister from '../pages/PatientRegister';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={PatientRegister} />
    </Switch>
  );
}
