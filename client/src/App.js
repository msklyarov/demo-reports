import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Route } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import 'bootstrap/dist/css/bootstrap.min.css';

import store, { history } from './store';
import RootComponent from './components/root';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div className="app">
            <Route path="/" component={RootComponent} />
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
