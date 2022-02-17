import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './styles/index.css';
//import StarMatchApp from './game-components/StarMatchApp';
import LandingPage from './landing-page/LandingPage';
import StarMatchApp from './game-components/StarMatchApp';

//TODO updated port with env to avoid error
// dev dependencies in package.json?
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/game" element={<StarMatchApp />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

