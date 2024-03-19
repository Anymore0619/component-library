import type { Meta, StoryObj } from '@storybook/vue3'
/* 开发时引入方式（按需引入） */
import ProCascader from 'component-library-components/cascader'
/* 打包后引入方式（按需引入） */
// import { ProCascader } from 'component-library'

const meta: Meta = {
  title: 'Base Components/ProCascader',
  component: ProCascader,
  argTypes: {
    /* attributes -> new attributes */
    defaultSlotName: {
      control: false,
      description: '选项内容的插槽名称（优先级 defaultSlotName > default）',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
      },
    },
    emptySlotName: {
      control: false,
      description: '无匹配选项时内容的插槽名称（优先级 emptySlotName > empty）',
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
    placeholder: {
      description: '输入框占位文本',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing attributes',
      },
    },
    props: {
      description: '配置选项',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing attributes',
        type: {
          summary: 'Record<string, any>',
        },
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
          summary: '(Arrayable<string> | Arrayable<number> | null) => void',
        },
      },
    },
    expandChange: {
      control: false,
      description: '节点展开时触发',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing events',
        type: {
          summary: '(value?: string[] | number[]) => void',
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
          summary: '(value?: string[] | number[]) => void',
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
      description: '级联选择器的实例',
      table: {
        category: 'exposes',
        subcategory: 'new expose',
        type: {
          summary: 'CascaderInstance',
        },
      },
    },
  },
}
export default meta

import { ref } from 'vue'

export const UseCase: StoryObj<typeof ProCascader> = {
  render: args => ({
    components: {
      ProCascader,
    },
    setup() {
      const options = [
        {
          label: 'option-1',
          value: 'option-1',
          children: [
            {
              label: 'option-1-1',
              value: 'option-1-1',
            },
            {
              label: 'option-1-2',
              value: 'option-1-2',
            },
            {
              label: 'option-1-3',
              value: 'option-1-3',
            },
            {
              label: 'option-1-4',
              value: 'option-1-4',
            },
            {
              label: 'option-1-5',
              value: 'option-1-5',
            },
          ],
        },
        {
          label: 'option-2',
          value: 'option-2',
        },
        {
          label: 'option-3',
          value: 'option-3',
        },
        {
          label: 'option-4',
          value: 'option-4',
        },
        {
          label: 'option-5',
          value: 'option-5',
        },
      ]
      const value = ref([])
      return {
        args,
        options,
        value,
      }
    },
    template: `
      <pro-cascader
        v-bind="args"
        v-model="value"
        :options="options"
      />
    `,
  }),
  args: {
    /* attributes -> new attributes */
    defaultSlotName: '',
    emptySlotName: '',
    /* attributes -> attributes corresponding existing attributes */
    clearable: true,
    filterable: true,
    placeholder: '请输入',
    props: {},
    /* attributes -> attributes corresponding existing events */
    blur: event => {
      console.log(event)
    },
    change: value => {
      console.log(value)
    },
    expandChange: value => {
      console.log(value)
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
