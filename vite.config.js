import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    server: {
        port: 5173, // Ganti port sesuai kebutuhan
        strictPort: true, // Jika port 5173 sudah terpakai, akan menyebabkan error
        hmr: {
            protocol: 'ws', // Gunakan WebSocket untuk HMR (Hot Module Replacement)
            host: 'localhost',
        },
    },
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
    ],
});
