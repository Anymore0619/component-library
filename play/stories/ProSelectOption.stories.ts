import type { Meta, StoryObj } from '@storybook/vue3'
/* 开发时引入方式（按需引入） */
import ProSelect from 'component-library-components/select'
import ProSelectOption from 'component-library-components/select-option'
/* 打包后引入方式（按需引入） */
// import { ProSelect, ProSelectOption } from 'component-library'

const meta: Meta = {
  title: 'Base Components/ProSelectOption',
  component: ProSelectOption,
  argTypes: {
    /* attributes -> new attributes */
    contentSlotName: {
      control: false,
      description:
        '选择器选项内容的插槽名称（优先级 contentSlotName > content > label）',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
      },
    },
    /* attributes -> attributes corresponding existing attributes */
    value: {
      control: false,
      description: '选择器选项的值',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing attributes',
        type: {
          summary: 'string | number | boolean | object',
        },
      },
    },
    /* exposes -> new expose */
    ref: {
      description: '选择器选项的实例',
      table: {
        category: 'exposes',
        subcategory: 'new expose',
        type: {
          summary: 'SelectOptionInstance',
        },
      },
    },
  },
}
export default meta

import { ref } from 'vue'

export const UseCase: StoryObj<typeof ProSelectOption> = {
  render: args => ({
    components: {
      ProSelect,
      ProSelectOption,
    },
    setup() {
      const value = ref(null)
      return {
        args,
        value,
      }
    },
    template: `
      <pro-select
        style="width: 15rem;"
        v-model="value"
      >
        <pro-select-option
          label="option1"
          value="option1"
        />
        <pro-select-option
          label="option2"
          value="option2"
        />
        <pro-select-option
          label="option3"
          value="option3"
        />
        <pro-select-option
          label="option4"
          value="option4"
        />
        <pro-select-option
          label="option5"
          value="option5"
        />
      </pro-select>
    `,
  }),
  args: {},
}
