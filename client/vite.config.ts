import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/lm-code-intro-react-router-fakelandia/",
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: "./../client/src/tests/setup",
  },
});
