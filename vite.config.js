import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/covid-tracker/',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true,
        type: 'module',
      },
      workbox: {
        clientsClaim: true,
        skipWaiting: true,
      },
      manifest: {
        name: 'Covid-Tracker',
        short_name: 'CovidTracker',
        icons: [
          {
            src: '/covid-tracker/assets/logo/maskable_icon.png',
            sizes: '196x196',
            type: 'image/png',
            purpose: 'any maskable',
          },
          {
            src: '/covid-tracker/assets/logo/1024.png',
            sizes: '1024x1024',
            type: 'image/png',
          },
          {
            src: '/covid-tracker/assets/logo/512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/covid-tracker/assets/logo/384.png',
            sizes: '384x384',
            type: 'image/png',
          },
          {
            src: '/covid-tracker/assets/logo/256.png',
            sizes: '256x256',
            type: 'image/png',
          },
          {
            src: '/covid-tracker/assets/logo/192.png',
            sizes: '192x192',
            type: 'image/png',
          },
        ],
        display: 'standalone',
        theme_color: '#000000',
        background_color: '#ffffff',
      },
    }),
  ],
});
