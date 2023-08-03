import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './views';
import './views/styles/common.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
