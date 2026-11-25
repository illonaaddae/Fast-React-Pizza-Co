import { defineConfig } from 'vitest/config';

const publicUrl = process.env.PUBLIC_URL || '/';

export default defineConfig({
  base: publicUrl.endsWith('/') ? publicUrl : `${publicUrl}/`,
  server: {
    port: 3000,
  },
  build: {
    outDir: 'build',
  },
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.js'],
  },
});
