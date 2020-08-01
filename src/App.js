import React from 'react';
import { Router } from 'react-router-dom';

import GlobalStyle from './styles/global';

import history from './services/history';

import Routes from './routes';

class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <Routes />
        <GlobalStyle />
      </Router>
    );
  }
}
export default App;
