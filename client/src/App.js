import React from 'react';
import { Provider } from 'react-redux';
import RootComponent from './components/root';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <RootComponent />
      </div>
    </Provider>
  );
}

export default App;
