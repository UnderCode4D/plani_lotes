import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './assets/styles/tailwind.css'; // Asegúrate de que este sea el archivo generado por Tailwind
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
