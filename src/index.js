import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/css/common.less';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store'
import { Provider } from 'react-redux'
import './utils/init'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

