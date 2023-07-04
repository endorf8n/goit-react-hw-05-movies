import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import GlobalCSS from 'styles/globalStyles';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/goit-react-hw-05-movies">
    <App />
    <GlobalCSS />
  </BrowserRouter>
);
