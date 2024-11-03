import { resolve } from 'path';
import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';

import { alias, bannerPlugin } from './helpers';

const outDir = './package/dist/main';

export default defineConfig({
  build: {
    target: 'ES6',
    assetsDir: '',
    outDir,
    minify: false,
    emptyOutDir: false,
    lib: {
      name: 'VanillaCalendarPro',
      formats: ['es', 'umd'],
      fileName: (format) => `index.${format === 'es' ? 'mjs' : 'js'}`,
      entry: [resolve(__dirname, '../package/src/index.ts')],
    },
  },
  resolve: { alias },
  plugins: [bannerPlugin(outDir), eslint()],
});
