import React from 'react';
import ReactDOM from 'react-dom/client';

import App from '#src/App.jsx';
import Boundary from '#src/components/boundary.jsx';
import '#src/index.css';

const { document } = globalThis;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Boundary>
      <App />
    </Boundary>
  </React.StrictMode>
);
