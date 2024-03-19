import type { Meta, StoryObj } from '@storybook/vue3'
/* 开发时引入方式（按需引入） */
import ProTooltip from 'component-library-components/tooltip'
/* 打包后引入方式（按需引入） */
// import { ProTooltip } from 'component-library'

const meta: Meta = {
  title: 'Base Components/ProTooltip',
  component: ProTooltip,
  argTypes: {
    /* attributes -> new attributes */
    contentSlotName: {
      control: false,
      description: '文字提示内容的插槽名称（优先级 contentSlotName > content）',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
      },
    },
    defaultSlotName: {
      control: false,
      description: '触发文字提示的插槽名称（优先级 defaultSlotName > default）',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
      },
    },
    /* exposes -> new expose */
    ref: {
      description: '文字提示的实例',
      table: {
        category: 'exposes',
        subcategory: 'new expose',
        type: {
          summary: 'TooltipInstance',
        },
      },
    },
  },
}
export default meta

import { ref } from 'vue'

export const UseCase: StoryObj<typeof ProTooltip> = {
  render: args => ({
    components: {
      ProTooltip,
    },
    setup() {
      const content = ref('tooltip')
      return {
        args,
        content,
      }
    },
    template: `
      <pro-tooltip
        v-bind="args"
        :content="content"
      >
        tooltip
      </pro-tooltip>
    `,
  }),
  args: {
    /* attributes -> new attributes */
    contentSlotName: '',
    defaultSlotName: '',
  },
}
