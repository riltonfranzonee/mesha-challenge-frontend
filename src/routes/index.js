import React from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

import PatientRegister from '../pages/PatientRegister';
import Service from '../pages/Service';

export default function Routes() {
  const service = useSelector(state => state.service.service);
  return (
    <Switch>
      <Route path="/" exact component={PatientRegister} />
      <Route path="/service" exact>
        {service ? <Service /> : <Redirect to="/" />}
      </Route>
    </Switch>
  );
}
