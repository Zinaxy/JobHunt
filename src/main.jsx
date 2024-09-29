import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import MyRouter from './routes/MyRouter.jsx';
import { ContextProvider } from './context/ContextProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      {' '}
      <BrowserRouter>
        <MyRouter />
      </BrowserRouter>
    </ContextProvider>
  </React.StrictMode>
);
