import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Aside from './Aside';
import './i18n';
import reportWebVitals from './reportWebVitals';
import StarryBackground from './StarryBackground';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StarryBackground/>
    <Aside />
    <App />
  </React.StrictMode>
);

reportWebVitals();
