import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from "redux-persist/integration/react";
import store from "./redux/store";
import App from './App';
import styled, {createGlobalStyle} from 'styled-components'
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const Global = createGlobalStyle`
  *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }
`


root.render(
  <React.StrictMode>
    <Provider store={store.store}>
      <PersistGate loading={null} persistor={store.persist}>
        <Global/>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

