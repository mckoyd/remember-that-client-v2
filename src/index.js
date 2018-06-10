import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './components/Layout';
import './index.css';

ReactDOM.render(
  <Provider>
    <Router>
      <Layout />
    </Router>
  </Provider>,
  document.getElementById('root')
);