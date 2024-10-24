import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { initializeApp } from 'firebase/app';

import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const firebaseConfig = {
  apiKey: "AIzaSyCCNpiu8oOj-RAvYsOGNzpXRrH31luJr3o",
  authDomain: "mirjam-sysshop-webshop-example.firebaseapp.com",
  projectId: "mirjam-sysshop-webshop-example",
  storageBucket: "mirjam-sysshop-webshop-example.appspot.com",
  messagingSenderId: "348664012394",
  appId: "1:348664012394:web:d8165cf5bd0f64a66d3413"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
