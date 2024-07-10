// frontend/vite.config.js
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

import config from '#src/config.js';

export default defineConfig({
  // add env to process for react
  define: {
    'process.env': {}
  },
  server: {
    host: '0.0.0.0',
    port: config.port, // Ensure this is consistent with your Docker Compose setup
    strictPort: true // Ensures Vite will only start if the port is available
  },
  plugins: [react()]
});
