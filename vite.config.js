import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/site.css', 'resources/js/app.js'],
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
        tailwindcss(),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './resources/js'),
            '@/components': path.resolve(__dirname, './resources/js/components'),
            '@/pages': path.resolve(__dirname, './resources/js/Pages'),
            '@/types': path.resolve(__dirname, './resources/js/types'),
            '@/utils': path.resolve(__dirname, './resources/js/utils'),
            '@/stores': path.resolve(__dirname, './resources/js/stores'),
            '@/assets': path.resolve(__dirname, './resources/js/assets'),
        },
    },
    server: {
        https: false,
        host: true,
        port: 5173,
        strictPort: true,
        hmr: {
            host: 'localhost',
            port: 5173,
        },
        watch: {
            usePolling: true,
        },
        cors: true,
    },
    build: {
        rollupOptions: {
            output: {
                manualChunks: {
                    vendor: ['vue', '@inertiajs/vue3'],
                    utils: ['lodash-es'],
                },
            },
        },
        manifest: 'manifest.json',
        outDir: 'public/build',
        emptyOutDir: true,
    },
});
