import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';

import { BrowserRouter } from "react-router-dom";

ReactDOM.render(

  <BrowserRouter basename="/kind2mind">
    <App />
  </BrowserRouter>,

  document.getElementById('root')
);