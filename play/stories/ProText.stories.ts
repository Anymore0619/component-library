import type { Meta, StoryObj } from '@storybook/vue3'
/* 开发时引入方式（按需引入） */
import ProText from 'component-library-components/text'
/* 打包后引入方式（按需引入） */
// import { ProText } from 'component-library'

const meta: Meta = {
  title: 'Base Components/ProText',
  component: ProText,
  argTypes: {
    /* attributes -> new attributes */
    defaultSlotName: {
      control: false,
      description:
        '文本内容的插槽名称（优先级 defaultSlotName > default > label）',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
      },
    },
    label: {
      description:
        '文本（优先级 defaultSlotName > default > label）（form 中使用 items 时无效，可在 model 中设置文本）',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
      },
    },
    /* exposes -> new expose */
    ref: {
      description: '文本的实例',
      table: {
        category: 'exposes',
        subcategory: 'new expose',
        type: {
          summary: 'TextInstance',
        },
      },
    },
  },
}
export default meta

export const UseCase: StoryObj<typeof ProText> = {
  render: args => ({
    components: {
      ProText,
    },
    setup() {
      return {
        args,
      }
    },
    template: `
      <pro-text
        v-bind="args"
      />
    `,
  }),
  args: {
    /* attributes -> new attributes */
    defaultSlotName: '',
    label: 'text',
  },
}
