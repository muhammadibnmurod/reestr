import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    server: {
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
                changeOrigin: true,
            },
            '/public': {
                target: 'http://localhost:3000',
                changeOrigin: true,
            },
        },
        host: '0.0.0.0',
    },
    plugins: [react()],
})
