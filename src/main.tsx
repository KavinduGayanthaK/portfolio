import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter

createRoot(document.getElementById('root')!).render(
  <BrowserRouter basename="/portfolio">
    <App />
  </BrowserRouter>
);
