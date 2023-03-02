import React from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';
import App from './App';
import { HashRouter as Router } from 'react-router-dom';
import store from '@store/index'

import { Provider } from 'react-redux'
const domNode = document.getElementById('root');
createRoot(domNode!).render(<Provider store={store}>
  <Router>
    <App />
  </Router>
</Provider>);