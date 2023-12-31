import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import 'bootstrap/scss/bootstrap.scss';
import { AppProvider } from './globalState/AppState';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppProvider>
        <App />
      </AppProvider>
    </BrowserRouter>
  </React.StrictMode>
);
