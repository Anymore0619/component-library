import type { Meta, StoryObj } from '@storybook/vue3'
/* 开发时引入方式（按需引入） */
import ProVirtualizedSelect from 'component-library-components/virtualized-select'
/* 打包后引入方式（按需引入） */
// import { ProVirtualizedSelect } from 'component-library'

const meta: Meta = {
  title: 'Base Components/ProVirtualizedSelect',
  component: ProVirtualizedSelect,
  argTypes: {
    /* attributes -> new attributes */
    defaultSlotName: {
      control: false,
      description:
        '选择器内容的插槽名称（优先级 defaultSlotName > default > options）',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
      },
    },
    emptySlotName: {
      control: false,
      description:
        '选择器无选项时内容的插槽名称（优先级 emptySlotName > empty）',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
      },
    },
    prefixSlotName: {
      control: false,
      description: '选择器头部内容的插槽名称（优先级 prefixSlotName > prefix）',
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
    filterable: {
      description: '是否可搜索',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing attributes',
      },
    },
    options: {
      description:
        '选择器渲染的数组（优先级 defaultSlotName > default > options）',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing attributes',
        type: {
          summary: 'OptionType[]',
        },
      },
    },
    placeholder: {
      description: '选择器占位文本',
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
            '(value?: string | number | boolean | object | any[]) => void',
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
    removeTag: {
      control: false,
      description: '多选模式下删除选项时触发',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing events',
        type: {
          summary:
            '(value?: string | number | boolean | object | any[]) => void',
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
      description: '选择器的实例',
      table: {
        category: 'exposes',
        subcategory: 'new expose',
        type: {
          summary: 'SelectInstance',
        },
      },
    },
  },
}
export default meta

import { ref } from 'vue'

export const UseCase: StoryObj<typeof ProVirtualizedSelect> = {
  render: args => ({
    components: {
      ProVirtualizedSelect,
    },
    setup() {
      const value = ref(null)
      return {
        args,
        value,
      }
    },
    template: `
      <pro-virtualized-select
        style="width: 15rem;"
        v-bind="args"
        v-model="value"
      />
    `,
  }),
  args: {
    /* attributes -> new attributes */
    defaultSlotName: '',
    emptySlotName: '',
    prefixSlotName: '',
    /* attributes -> attributes corresponding existing attributes */
    clearable: true,
    filterable: true,
    options: [
      {
        label: 'option1',
        value: 'option1',
      },
      {
        label: 'option2',
        value: 'option2',
      },
      {
        label: 'option3',
        value: 'option3',
      },
      {
        label: 'option4',
        value: 'option4',
      },
      {
        label: 'option5',
        value: 'option5',
      },
    ],
    placeholder: '请选择',
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
    removeTag: value => {
      console.log(value)
    },
    visibleChange: visible => {
      console.log(visible)
    },
  },
}
