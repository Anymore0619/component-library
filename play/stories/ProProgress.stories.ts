import type { Meta, StoryObj } from '@storybook/vue3'
/* 开发时引入方式（按需引入） */
import ProProgress from 'component-library-components/progress'
/* 打包后引入方式（按需引入） */
// import { ProProgress } from 'component-library'

const meta: Meta = {
  title: 'Base Components/ProProgress',
  component: ProProgress,
  argTypes: {
    /* attributes -> new attributes */
    defaultSlotName: {
      control: false,
      description: '进度条内容的插槽名称（优先级 defaultSlotName > default）',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
      },
    },
    /* exposes -> new expose */
    ref: {
      description: '进度条的实例',
      table: {
        category: 'exposes',
        subcategory: 'new expose',
        type: {
          summary: 'ProgressInstance',
        },
      },
    },
  },
}
export default meta

export const UseCase: StoryObj<typeof ProProgress> = {
  render: args => ({
    components: {
      ProProgress,
    },
    setup() {
      return {
        args,
      }
    },
    template: `
      <pro-progress
        style="width: 25rem;"
        v-bind="args"
      />
    `,
  }),
  args: {
    /* attributes -> new attributes */
    defaultSlotName: '',
  },
}
