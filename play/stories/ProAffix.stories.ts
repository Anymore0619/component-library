import type { Meta, StoryObj } from '@storybook/vue3'
/* 开发时引入方式（按需引入） */
import ProAffix from 'component-library-components/affix'
/* 打包后引入方式（按需引入） */
// import { ProAffix } from 'component-library'

const meta: Meta = {
  title: 'Base Components/ProAffix',
  component: ProAffix,
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
    /* attributes -> attributes corresponding existing events */
    change: {
      control: false,
      description: '固定状态改变时触发',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing events',
        type: {
          summary: '(fixed?: boolean) => void',
        },
      },
    },
    scroll: {
      control: false,
      description: '滚动时触发',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing events',
        type: {
          summary: '(value?: { scrollTop?: number; fixed?: boolean }) => void',
        },
      },
    },
    /* exposes -> new expose */
    ref: {
      description: '固钉的实例',
      table: {
        category: 'exposes',
        subcategory: 'new expose',
        type: {
          summary: 'AffixInstance',
        },
      },
    },
  },
}
export default meta

export const UseCase: StoryObj<typeof ProAffix> = {
  render: args => ({
    components: {
      ProAffix,
    },
    setup() {
      return {
        args,
      }
    },
    template: `
      <pro-affix
        style="height: 75rem; margin-top: 5rem;"
        v-bind="args"
      >
        affix
      </pro-affix>
    `,
  }),
  args: {
    /* attributes -> new attributes */
    defaultSlotName: '',
    /* attributes -> attributes corresponding existing events */
    change: fixed => {
      console.log(fixed)
    },
    scroll: value => {
      console.log(value)
    },
  },
}
