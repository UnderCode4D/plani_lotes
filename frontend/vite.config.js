import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dns from 'dns';

dns.setDefaultResultOrder('verbatim');

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   proxy: {
  //     '/api/node': {
  //       target: 'http://localhost:3000',
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api\/node/, ''),
  //       secure: false,
  //     },
  //   },
  // },

  server: {
    watch: {
      usePolling: true, 
    },
    host: true, 
    port: 5173, 
  },
})
