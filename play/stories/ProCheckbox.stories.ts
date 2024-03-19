import type { Meta, StoryObj } from '@storybook/vue3'
/* 开发时引入方式（按需引入） */
import ProCheckbox from 'component-library-components/checkbox'
/* 打包后引入方式（按需引入） */
// import { ProCheckbox } from 'component-library'

const meta: Meta = {
  title: 'Base Components/ProCheckbox',
  component: ProCheckbox,
  argTypes: {
    /* attributes -> new attributes */
    contentSlotName: {
      control: false,
      description:
        '多选框内容的插槽名称（优先级 contentSlotName > content > label）',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
      },
    },
    hidden: {
      description: '隐藏多选框',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
      },
    },
    /* attributes -> attributes corresponding existing attributes */
    label: {
      description: '多选框文本（优先级 contentSlotName > content > label）',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing attributes',
        type: {
          summary: 'string',
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
    /* slots -> new slot */
    content: {
      control: false,
      description:
        '多选框内容的插槽（优先级 contentSlotName > content > label）（default 插槽与 pro-checkbox-group 中的 default 插槽存在重名冲突，使用 content 插槽替代）',
      table: {
        category: 'slots',
        subcategory: 'new slots',
        type: {
          summary: 'Slot',
        },
      },
    },
    /* exposes -> new expose */
    ref: {
      description: '多选框的实例',
      table: {
        category: 'exposes',
        subcategory: 'new expose',
        type: {
          summary: 'CheckboxInstance',
        },
      },
    },
  },
}
export default meta

import { ref } from 'vue'

export const UseCase: StoryObj<typeof ProCheckbox> = {
  render: args => ({
    components: {
      ProCheckbox,
    },
    setup() {
      const value = ref(false)
      return {
        args,
        value,
      }
    },
    template: `
      <pro-checkbox
        v-bind="args"
        v-model="value"
      />
    `,
  }),
  args: {
    /* attributes -> new attributes */
    contentSlotName: '',
    hidden: false,
    /* attributes -> attributes corresponding existing attributes */
    label: 'checkbox',
    /* attributes -> attributes corresponding existing events */
    change: value => {
      console.log(value)
    },
  },
}
