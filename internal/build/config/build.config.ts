// 按需引入打包
import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    vue(),
    dts({
      // 打包到最外层
      root: resolve(__dirname, '..', '..', '..'),
      include: ['packages'],
    }),
  ],
  resolve: {
    alias: {
      'component-library-hooks': resolve(
        __dirname,
        '..',
        '..',
        '..',
        'packages',
        'hooks'
      ),
      'component-library-utils': resolve(
        __dirname,
        '..',
        '..',
        '..',
        'packages',
        'utils'
      ),
    },
  },
  build: {
    minify: false,
    emptyOutDir: true,
    lib: {
      // 入口相对路径
      entry: [
        resolve(__dirname, '..', '..', '..', 'packages/components/index.ts'),
        resolve(
          __dirname,
          '..',
          '..',
          '..',
          'packages/unplugin-resolver/index.ts'
        ),
      ],
    },
    rollupOptions: {
      external: ['vue', 'element-plus', '@element-plus/icons-vue'],
      output: [
        {
          format: 'es',
          entryFileNames: '[name].mjs',
          preserveModules: true,
          dir: resolve(__dirname, '..', '..', '..', 'dist'),
          exports: 'named',
        },
        {
          format: 'cjs',
          entryFileNames: '[name].cjs',
          preserveModules: true,
          dir: resolve(__dirname, '..', '..', '..', 'dist'),
          exports: 'named',
        },
      ],
    },
  },
})
