import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './store'
import {Provider } from 'react-redux';

// Entry point for the React application
// - Wraps the app with Redux `Provider` so components can access the store
// - Keeps StrictMode commented out because some third-party libs may trigger duplicate effects during development
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  //</React.StrictMode>
);

