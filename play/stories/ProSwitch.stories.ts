import type { Meta, StoryObj } from '@storybook/vue3'
/* 开发时引入方式（按需引入） */
import ProSwitch from 'component-library-components/switch'
/* 打包后引入方式（按需引入） */
// import { ProSwitch } from 'component-library'

const meta: Meta = {
  title: 'Base Components/ProSwitch',
  component: ProSwitch,
  argTypes: {
    /* attributes -> attributes corresponding existing attributes */
    activeIcon: {
      control: false,
      description: '开关开启时显示的图标',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing attributes',
        type: {
          summary: 'Component',
        },
      },
    },
    inactiveIcon: {
      control: false,
      description: '开关关闭时显示的图标',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing attributes',
        type: {
          summary: 'Component',
        },
      },
    },
    /* attributes -> attributes corresponding existing events */
    change: {
      control: false,
      description: 'modelValue 值改变时触发',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing events',
        type: {
          summary: '(value?: string | number | boolean) => void',
        },
      },
    },
    /* exposes -> new expose */
    ref: {
      description: '开关的实例',
      table: {
        category: 'exposes',
        subcategory: 'new expose',
        type: {
          summary: 'SwitchInstance',
        },
      },
    },
  },
}
export default meta

import { ref } from 'vue'

export const UseCase: StoryObj<typeof ProSwitch> = {
  render: args => ({
    components: {
      ProSwitch,
    },
    setup() {
      const value = ref(false)
      return {
        args,
        value,
      }
    },
    template: `
      <pro-switch
        v-bind="args"
        v-model="value"
      />
    `,
  }),
  args: {
    /* attributes -> attributes corresponding existing attributes */
    activeIcon: undefined,
    inactiveIcon: undefined,
  },
}
