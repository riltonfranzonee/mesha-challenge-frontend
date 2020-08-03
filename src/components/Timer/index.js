import * as React from 'react';
import ReactStopwatch from 'react-stopwatch';

import { Container } from './styles';

const Stopwatch = React.memo(() => (
  <ReactStopwatch
    seconds={0}
    minutes={0}
    hours={0}
    render={({ formatted }) => {
      return <Container>{formatted}</Container>;
    }}
  />
));

export default Stopwatch;
