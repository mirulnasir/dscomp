import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { libInjectCss } from 'vite-plugin-lib-inject-css';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
  libInjectCss(),
  dts({
    include: ['lib'],
    exclude: ['lib/**/*.css.ts']
  }), vanillaExtractPlugin()],

  build: {
    lib: {
      entry: {
        index: resolve(__dirname, 'lib/index.ts'),
        button: resolve(__dirname, 'lib/components/Button/index.tsx'),
        input: resolve(__dirname, 'lib/components/Input/index.tsx'),
      },
      formats: ['es']
    },
    copyPublicDir: false,
    rollupOptions: {

      external: ['react', 'react/jsx-runtime'],
      // input: Object.fromEntries(
      //   glob.sync('lib/**/*.{ts,tsx}', {
      //     ignore: ["lib/**/*.d.ts", "lib/**/*.css.ts"],
      //   }).map(file => [
      //     // The name of the entry point
      //     // lib/nested/foo.ts becomes nested/foo
      //     relative(
      //       'lib',
      //       file.slice(0, file.length - extname(file).length)
      //     ),
      //     // The absolute path to the entry file
      //     // lib/nested/foo.ts becomes /project/lib/nested/foo.ts
      //     fileURLToPath(new URL(file, import.meta.url))
      //   ])
      // )
      // ,
      output: {
        chunkFileNames: 'chunks/[name].[hash].js',
        assetFileNames: 'assets/[name][extname]',
        entryFileNames: '[name].js',
      }
    }
  },

})
