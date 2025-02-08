import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App';
import './index.css'; // Este archivo debe contener las directivas de Tailwind
import { AppProvider } from './context';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);
