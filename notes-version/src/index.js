import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import StarMatchApp from './components/StarMatchApp';

//TODO updated port with env to avoid error
// dev dependencies in package.json?
ReactDOM.render(
  <React.StrictMode>
    <StarMatchApp />
  </React.StrictMode>,
  document.getElementById('root')
);

