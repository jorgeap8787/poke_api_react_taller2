import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
//import Variables from './components/Variables';
//import Contador from './components/Contador';
import PeticionApi from './components/PeticionApi';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PeticionApi />
  </React.StrictMode>
);
