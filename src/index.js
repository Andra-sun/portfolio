import React from 'react';
import ReactDOM from 'react-dom/client';
import './static/css/index.css';
import App from './App';
import Aside from './components/Aside';
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
