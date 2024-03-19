import type { Meta, StoryObj } from '@storybook/vue3'
/* 开发时引入方式（按需引入） */
import ProTimePicker from 'component-library-components/time-picker'
/* 打包后引入方式（按需引入） */
// import { ProTimePicker } from 'component-library'

const meta: Meta = {
  title: 'Base Components/ProTimePicker',
  component: ProTimePicker,
  argTypes: {
    /* attributes -> attributes corresponding existing attributes */
    clearable: {
      description: '是否可清空',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing attributes',
      },
    },
    endPlaceholder: {
      description: '范围选择时结束时间的输入框占位文本',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing attributes',
      },
    },
    placeholder: {
      description: '非范围选择时的输入框占位文本',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing attributes',
      },
    },
    startPlaceholder: {
      description: '范围选择时开始时间的输入框占位文本',
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
          summary:
            '(value?: string | number | Date | [string, string] | [number, number] | [Date, Date]) => void',
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
    visibleChange: {
      control: false,
      description: '下拉列表显示 / 隐藏时触发',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing events',
        type: {
          summary: '(visible?: boolean) => void',
        },
      },
    },
    /* exposes -> new expose */
    ref: {
      description: '时间选择器的实例',
      table: {
        category: 'exposes',
        subcategory: 'new expose',
        type: {
          summary: 'TimepickerInstance',
        },
      },
    },
  },
}
export default meta

import { ref } from 'vue'

export const UseCase: StoryObj<typeof ProTimePicker> = {
  render: args => ({
    components: {
      ProTimePicker,
    },
    setup() {
      const value = ref(new Date())
      return {
        args,
        value,
      }
    },
    template: `
      <pro-time-picker
        v-bind="args"
        v-model="value"
      />
    `,
  }),
  args: {
    /* attributes -> attributes corresponding existing attributes */
    clearable: true,
    endPlaceholder: '请选择',
    placeholder: '请选择',
    startPlaceholder: '请选择',
    /* attributes -> attributes corresponding existing events */
    blur: event => {
      console.log(event)
    },
    change: value => {
      console.log(value)
    },
    focus: event => {
      console.log(event)
    },
    visibleChange: visible => {
      console.log(visible)
    },
  },
}
