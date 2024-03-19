import type { Meta, StoryObj } from '@storybook/vue3'
/* 开发时引入方式（按需引入） */
import ProInput from 'component-library-components/input'
/* 打包后引入方式（按需引入） */
// import { ProInput } from 'component-library'

const meta: Meta = {
  title: 'Base Components/ProInput',
  component: ProInput,
  argTypes: {
    /* attributes -> new attributes */
    appendSlotName: {
      control: false,
      description: '输入框后置内容的插槽名称（优先级 appendSlotName > append）',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
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
    prefixSlotName: {
      control: false,
      description: '输入框头部内容的插槽名称（优先级 prefixSlotName > prefix）',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
      },
    },
    prependSlotName: {
      control: false,
      description:
        '输入框前置内容的插槽名称（优先级 prependSlotName > prepend）',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
      },
    },
    suffixSlotName: {
      control: false,
      description: '输入框尾部内容的插槽名称（优先级 suffixSlotName > suffix）',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
      },
    },
    /* attributes -> attributes corresponding existing attributes */
    clearable: {
      description: '是否可清空',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing attributes',
      },
    },
    placeholder: {
      description: '输入框占位文本',
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
          summary: '(value?: string | number) => void',
        },
      },
    },
    clear: {
      control: false,
      description: '点击清空时触发',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing events',
        type: {
          summary: '() => void',
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
    input: {
      control: false,
      description: 'input 值改变时触发',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing events',
        type: {
          summary: '(value?: string | number) => void',
        },
      },
    },
    /* exposes -> new expose */
    ref: {
      description: '输入框的实例',
      table: {
        category: 'exposes',
        subcategory: 'new expose',
        type: {
          summary: 'InputInstance',
        },
      },
    },
  },
}
export default meta

import { ref } from 'vue'

export const UseCase: StoryObj<typeof ProInput> = {
  render: args => ({
    components: {
      ProInput,
    },
    setup() {
      const value = ref(null)
      return {
        args,
        value,
      }
    },
    template: `
      <pro-input
        v-bind="args"
        v-model="value"
      />
    `,
  }),
  args: {
    /* attributes -> new attributes */
    appendSlotName: '',
    keyupEnter: event => {
      console.log(event)
    },
    prefixSlotName: '',
    prependSlotName: '',
    suffixSlotName: '',
    /* attributes -> attributes corresponding existing attributes */
    clearable: true,
    placeholder: '请输入',
    /* attributes -> attributes corresponding existing events */
    blur: event => {
      console.log(event)
    },
    change: value => {
      console.log(value)
    },
    clear: () => {
      console.log('clear')
    },
    focus: event => {
      console.log(event)
    },
    input: value => {
      console.log(value)
    },
  },
}
