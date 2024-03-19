import type { Meta, StoryObj } from '@storybook/vue3'
/* 开发时引入方式（按需引入） */
import ProCheckboxGroup from 'component-library-components/checkbox-group'
/* 打包后引入方式（按需引入） */
// import { ProCheckboxGroup } from 'component-library'

const meta: Meta = {
  title: 'Base Components/ProCheckboxGroup',
  component: ProCheckboxGroup,
  argTypes: {
    /* attributes -> new v-model attributes */
    checkboxes: {
      description:
        '多选框组渲染的数组（优先级 defaultSlotName > default > checkboxes）',
      table: {
        category: 'attributes',
        subcategory: 'new v-model attributes',
        type: {
          summary: 'ProCheckboxProps[]',
        },
      },
    },
    /* attributes -> new attributes */
    addable: {
      description: '是否可新增',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
      },
    },
    addButtonProps: {
      description: '新增按钮的属性',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
        type: {
          summary: 'ProButtonProps',
        },
      },
    },
    addInputProps: {
      description: '新增输入框的属性',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
        type: {
          summary: 'ProInputProps',
        },
      },
    },
    defaultSlotName: {
      control: false,
      description:
        '多选框组内容的插槽名称（优先级 defaultSlotName > default > checkboxes）',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
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
          summary: '(value?: string[] | number[]) => void',
        },
      },
    },
    /* exposes -> new expose */
    proCheckboxRef: {
      description: '多选框的实例',
      table: {
        category: 'exposes',
        subcategory: 'new expose',
        type: {
          summary: 'ProCheckboxInstance[]',
        },
      },
    },
    ref: {
      description: '多选框组的实例',
      table: {
        category: 'exposes',
        subcategory: 'new expose',
        type: {
          summary: 'CheckboxGroupInstance',
        },
      },
    },
  },
}
export default meta

import { ref } from 'vue'

export const UseCase: StoryObj<typeof ProCheckboxGroup> = {
  render: args => ({
    components: {
      ProCheckboxGroup,
    },
    setup() {
      const value = ref([])
      return {
        args,
        value,
      }
    },
    template: `
      <pro-checkbox-group
        v-bind="args"
        v-model="value"
        v-model:checkboxes="args.checkboxes"
      />
    `,
  }),
  args: {
    /* attributes -> new v-model attributes */
    checkboxes: [
      {
        label: 'checkbox-1',
        value: 'checkbox-1',
      },
      {
        label: 'checkbox-2',
        value: 'checkbox-2',
      },
      {
        label: 'checkbox-3',
        value: 'checkbox-3',
      },
    ],
    /* attributes -> new attributes */
    addable: false,
    addButtonProps: {},
    addInputProps: {},
    defaultSlotName: '',
    /* attributes -> attributes corresponding existing events */
    change: value => {
      console.log(value)
    },
  },
}
