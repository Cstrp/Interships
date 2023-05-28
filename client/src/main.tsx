import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { App } from './App';
import './view/styles/index.scss';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(<StrictMode children={<App />} />);
