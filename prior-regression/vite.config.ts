import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { federation } from '@module-federation/vite';
import { dependencies } from './package.json';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'remote-app',
      filename: 'remoteEntry-[hash].js',
      manifest: true,
      exposes: {
        './entrypoint': './src/ExposedEntryPoint.tsx',
      },
      shared: {
        react: {
          requiredVersion: dependencies.react,
        },
        'react-dom': {
          requiredVersion: dependencies['react-dom'],
        },
      }
    }),
  ],
})
