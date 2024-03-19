import type { Meta, StoryObj } from '@storybook/vue3'
/* 开发时引入方式（按需引入） */
import ProInputNumber from 'component-library-components/input-number'
/* 打包后引入方式（按需引入） */
// import { ProInputNumber } from 'component-library'

const meta: Meta = {
  title: 'Base Components/ProInputNumber',
  component: ProInputNumber,
  argTypes: {
    /* attributes -> new attributes */
    align: {
      control: 'radio',
      description: '水平排列方式',
      options: ['left', 'center', 'right'],
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
        type: {
          summary: `"left" | "center" | "right"`,
        },
      },
    },
    keyupEnter: {
      control: false,
      description: '按下回车时触发',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
        type: {
          summary: '(event?: KeyboardEvent) => void',
        },
      },
    },
    /* attributes -> attributes corresponding existing attributes */
    controls: {
      description: '是否显示控制按钮',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing attributes',
      },
    },
    /* attributes -> attributes corresponding existing events */
    blur: {
      control: false,
      description: '失去焦点时触发',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing events',
        type: {
          summary: '(event?: FocusEvent) => void',
        },
      },
    },
    change: {
      control: false,
      description: 'modelValue 值改变时触发',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing events',
        type: {
          summary: '(currentValue?: number, oldValue?: number) => void',
        },
      },
    },
    focus: {
      control: false,
      description: '获取焦点时触发',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing events',
        type: {
          summary: '(event?: FocusEvent) => void',
        },
      },
    },
    /* exposes -> new expose */
    ref: {
      description: '数字输入框的实例',
      table: {
        category: 'exposes',
        subcategory: 'new expose',
        type: {
          summary: 'InputNumberInstance',
        },
      },
    },
  },
}
export default meta

import { ref } from 'vue'

export const UseCase: StoryObj<typeof ProInputNumber> = {
  render: args => ({
    components: {
      ProInputNumber,
    },
    setup() {
      const value = ref(0)
      return {
        args,
        value,
      }
    },
    template: `
      <pro-input-number
        v-bind="args"
        v-model="value"
      />
    `,
  }),
  args: {
    /* attributes -> new attributes */
    align: 'left',
    keyupEnter: event => {
      console.log(event)
    },
    /* attributes -> attributes corresponding existing attributes */
    controls: false,
    /* attributes -> attributes corresponding existing events */
    blur: event => {
      console.log(event)
    },
    change: (currentValue, oldValue) => {
      console.log(currentValue)
      console.log(oldValue)
    },
    focus: event => {
      console.log(event)
    },
  },
}
