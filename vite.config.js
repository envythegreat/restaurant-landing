import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import inject from "@rollup/plugin-inject";
// import fs from "fs";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    inject({
      // => that should be first under plugins array
      $: "jquery",
      jQuery: "jquery",
      'window.jQuery': 'jquery'
    }),
  ],
  define: {
    global: 'globalThis'
  },
  css: {
    preprocessorOptions: {
      scss: {
        includePaths: ['node_modules', './src/assets']
      }
    },
  },
  resolve: {
    alias: [
      {
        find: /^~.+/,
        replacement: (val) => {
          return val.replace(/^~/, "");
        },
      },
      { find: '@src', replacement: path.resolve(__dirname, 'src') },
      { find: '@assets', replacement: path.resolve(__dirname, 'src/assets') },
      { find: '@components', replacement: path.resolve(__dirname, 'src/components') },
      
    ],
  },
});
