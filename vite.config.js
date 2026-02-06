import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                library: resolve(__dirname, 'library.html'),
                community: resolve(__dirname, 'community.html'),
                resources: resolve(__dirname, 'resources.html'),
            },
        },
    },
});
