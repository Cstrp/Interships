import { defineConfig } from 'vite';
import { defineConfig as config } from 'vitest/config';
import react from '@vitejs/plugin-react';
import * as path from 'path';

export default defineConfig &&
  config({
    plugins: [react()],
    test: {
      globals: true,
      environment: 'jsdom',
      coverage: {
        enabled: true,
        provider: 'c8',
        all: true,
      },
    },
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src'),
      },
    },
  });
