import { resolve } from 'path'
import { mergeConfig } from 'vite'
import type { StorybookConfig } from '@storybook/vue3-vite'

const config: StorybookConfig = {
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-links',
  ],
  core: {
    builder: '@storybook/builder-vite',
  },
  docs: {
    autodocs: 'tag',
  },
  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },
  stories: ['../stories/**/*.stories.@(js|jsx|ts|tsx)'],
  viteFinal: async config => {
    return mergeConfig(config, {
      build: {
        outDir: resolve(__dirname, '..', '..', 'dist-storybook'),
      },
    })
  },
}
export default config
