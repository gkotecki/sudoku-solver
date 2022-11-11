import React from 'react';
import ReactDOM from 'react-dom/client';
import { Board } from './components/Board';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <main className="flex h-screen w-screen flex-col items-center justify-center gap-8 bg-neutral-900">
      <Board />
    </main>
  </React.StrictMode>
);
