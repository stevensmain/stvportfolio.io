import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { AppRouter } from 'router/AppRouter';
import './assets/styles/styles.scss';

ReactDOM.render(
  <>
    <AppRouter />
  </>,
  document.getElementById('root')
);

