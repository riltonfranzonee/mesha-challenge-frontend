import './config/ReactotronConfig';

import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';

import history from './services/history';
import Routes from './routes';

import { store, persistor } from './store';

import GlobalStyle from './styles/global';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Router history={history}>
            <Routes />
            <GlobalStyle />
            <ToastContainer autoClose={3000} />
          </Router>
        </PersistGate>
      </Provider>
    );
  }
}
export default App;
