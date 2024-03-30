import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    proxy:{
      '../backend': 
      {
        target: 'http://localhost:3001' || 'https://e-commerce-rust-nu.vercel.app',
        secure: false
      },
    },
  },
})
