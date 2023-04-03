import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { createTheme, responsiveFontSizes, ThemeProvider } from "@mui/material";
import { myTheme } from "./theme.js";
import { BrowserRouter } from 'react-router-dom';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={responsiveFontSizes(createTheme(myTheme))}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
