import React from 'react';
import ReactDOM from 'react-dom/client';
import i18n from './i18n';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'leaflet/dist/leaflet.css';
import './index.css';
import App from './App';
import { I18nextProvider } from 'react-i18next'
import { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
     <I18nextProvider i18n={i18n}>
      <Suspense >
       <App />
      </Suspense>
     </I18nextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.querySelector('#root')
);


