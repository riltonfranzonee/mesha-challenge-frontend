import React from 'react';
import { Switch, Route } from 'react-router-dom';

import PatientRegister from '../pages/PatientRegister';
import Service from '../pages/Service';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={PatientRegister} />
      <Route path="/service" exact component={Service} />
    </Switch>
  );
}
