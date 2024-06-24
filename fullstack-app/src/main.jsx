import React from 'react';
import ReactDOM from 'react-dom/client';

import App from '#src/App.jsx';
import '#src/index.css';

const { document } = globalThis;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
