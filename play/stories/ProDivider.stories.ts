import type { Meta, StoryObj } from '@storybook/vue3'
/* 开发时引入方式（按需引入） */
import ProDivider from 'component-library-components/divider'
/* 打包后引入方式（按需引入） */
// import { ProDivider } from 'component-library'

const meta: Meta = {
  title: 'Base Components/ProDivider',
  component: ProDivider,
  argTypes: {
    /* attributes -> new attributes */
    defaultSlotName: {
      control: false,
      description: '默认内容的插槽名称（优先级 defaultSlotName > default）',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
      },
    },
    /* exposes -> new expose */
    ref: {
      description: '分割线的实例',
      table: {
        category: 'exposes',
        subcategory: 'new expose',
        type: {
          summary: 'DividerInstance',
        },
      },
    },
  },
}
export default meta

export const UseCase: StoryObj<typeof ProDivider> = {
  render: args => ({
    components: {
      ProDivider,
    },
    setup() {
      return {
        args,
      }
    },
    template: `
      text-1
      <pro-divider
        v-bind="args"
      />
      text-2
    `,
  }),
  args: {
    /* attributes -> new attributes */
    defaultSlotName: '',
  },
}
