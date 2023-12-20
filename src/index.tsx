import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import 'bootstrap/scss/bootstrap.scss';
import { AppProvider } from './GlobalState/AppState';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);
