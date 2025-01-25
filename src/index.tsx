// src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);  // root가 HTMLElement로 타입 캐스팅 필요

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
