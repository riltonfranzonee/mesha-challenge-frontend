import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

export default function RouteWrapper() {
  const service = useSelector(state => state.service.service);

  if (!service) {
    return <Redirect to="/" />;
  }

  return <Redirect to="/service" />;
}
