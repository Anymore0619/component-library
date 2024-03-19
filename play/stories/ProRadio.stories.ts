import type { Meta, StoryObj } from '@storybook/vue3'
/* 开发时引入方式（按需引入） */
import ProRadio from 'component-library-components/radio'
/* 打包后引入方式（按需引入） */
// import { ProRadio } from 'component-library'

const meta: Meta = {
  title: 'Base Components/ProRadio',
  component: ProRadio,
  argTypes: {
    /* attributes -> new attributes */
    contentSlotName: {
      control: false,
      description:
        '单选框内容的插槽名称（优先级 contentSlotName > content > label）',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
      },
    },
    hidden: {
      description: '隐藏单选框',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
      },
    },
    type: {
      control: 'radio',
      description: '单选框类型',
      options: ['radio', 'radioButton'],
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
        type: {
          summary: `"radio" | "radioButton"`,
        },
      },
    },
    /* attributes -> attributes corresponding existing attributes */
    label: {
      description: '单选框文本（优先级 contentSlotName > content > label）',
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
        '单选框内容的插槽（优先级 contentSlotName > content > label）（default 插槽与 pro-radio-group 中的 default 插槽存在重名冲突，使用 content 插槽替代）',
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
      description: '单选框的实例',
      table: {
        category: 'exposes',
        subcategory: 'new expose',
        type: {
          summary: 'RadioInstance',
        },
      },
    },
  },
}
export default meta

import { ref } from 'vue'

export const UseCase: StoryObj<typeof ProRadio> = {
  render: args => ({
    components: {
      ProRadio,
    },
    setup() {
      const value = ref(false)
      return {
        args,
        value,
      }
    },
    template: `
      <pro-radio
        v-bind="args"
        v-model="value"
        :value="true"
      />
    `,
  }),
  args: {
    /* attributes -> new attributes */
    contentSlotName: '',
    hidden: false,
    type: 'radio',
    /* attributes -> attributes corresponding existing attributes */
    label: 'radio',
    /* attributes -> attributes corresponding existing events */
    change: value => {
      console.log(value)
    },
  },
}
