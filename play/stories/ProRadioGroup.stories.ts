import type { Meta, StoryObj } from '@storybook/vue3'
/* 开发时引入方式（按需引入） */
import ProRadioGroup from 'component-library-components/radio-group'
/* 打包后引入方式（按需引入） */
// import { ProRadioGroup } from 'component-library'

const meta: Meta = {
  title: 'Base Components/ProRadioGroup',
  component: ProRadioGroup,
  argTypes: {
    /* attributes -> new attributes */
    radios: {
      description:
        '单选框组渲染的数组（优先级 defaultSlotName > default > radios）',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
        type: {
          summary: 'ProRadioProps[]',
        },
      },
    },
    defaultSlotName: {
      control: false,
      description:
        '单选框组内容的插槽名称（优先级 defaultSlotName > default > radios）',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
      },
    },
    type: {
      control: 'radio',
      description: '单选框组类型',
      options: ['radio', 'radioButton'],
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
        type: {
          summary: `"radio" | "radioButton"`,
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
    proRadioRef: {
      description: '单选框的实例',
      table: {
        category: 'exposes',
        subcategory: 'new expose',
        type: {
          summary: 'ProRadioInstance[]',
        },
      },
    },
    ref: {
      description: '单选框组的实例',
      table: {
        category: 'exposes',
        subcategory: 'new expose',
        type: {
          summary: 'RadioGroupInstance',
        },
      },
    },
  },
}
export default meta

import { ref } from 'vue'

export const UseCase: StoryObj<typeof ProRadioGroup> = {
  render: args => ({
    components: {
      ProRadioGroup,
    },
    setup() {
      const value = ref(null)
      return {
        args,
        value,
      }
    },
    template: `
      <pro-radio-group
        v-bind="args"
        v-model="value"
      />
    `,
  }),
  args: {
    radios: [
      {
        label: 'radio-1',
        value: 'radio-1',
      },
      {
        label: 'radio-2',
        value: 'radio-2',
      },
      {
        label: 'radio-3',
        value: 'radio-3',
      },
    ],
    defaultSlotName: '',
    type: 'radio',

    change: value => {
      console.log(value)
    },
  },
}
