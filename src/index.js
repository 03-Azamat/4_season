import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./Redux/Store";
import { StrictMode } from "react";
import "./../src/styles/media.css"


const rootElement = document.getElementById("root");

ReactDOM.render(
  <BrowserRouter>
      <Provider store={store}>

              <App />

      </Provider>
 
  </BrowserRouter>,

  document.getElementById('root')
);

reportWebVitals();
