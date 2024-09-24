import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Aside from './Aside';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Aside />
    <App />
  </React.StrictMode>
);

reportWebVitals();
