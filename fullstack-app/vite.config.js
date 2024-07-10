// frontend/vite.config.js
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: '0.0.0.0',
    // port: 3000, // Ensure this is consistent with your Docker Compose setup
    port: 80, // Ensure this is consistent with your Docker Compose setup
    strictPort: true // Ensures Vite will only start if the port is available
  },
  plugins: [react()]
});

// todo: vite config options
// import react from '@vitejs/plugin-react';
// import { defineConfig } from 'vite';

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     port: 3000
//   },
//   // build: {
//   //   outDir: 'build'
//   // },
//   build: {
//     rollupOptions: {
//       output: {
//         format: 'es',
//         strict: false,
//         // entryFileNames: '[name].js',
//         dir: 'dist/'
//       }
//     }
//   }
// });
