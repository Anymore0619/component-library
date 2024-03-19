import type { Meta, StoryObj } from '@storybook/vue3'
/* 开发时引入方式（按需引入） */
import ProIcon from 'component-library-components/icon'
/* 打包后引入方式（按需引入） */
// import { ProIcon } from 'component-library'

const meta: Meta = {
  title: 'Base Components/ProIcon',
  component: ProIcon,
  argTypes: {
    /* attributes -> new attributes */
    defaultSlotName: {
      control: false,
      description: '图标内容的插槽名称（优先级 defaultSlotName > default）',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
      },
    },
    name: {
      description: '图标名称',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
      },
    },
    /* attributes -> attributes corresponding existing events */
    click: {
      control: false,
      description: '点击时触发',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing events',
        type: {
          summary: '(event?: MouseEvent) => void',
        },
      },
    },
    /* exposes -> new expose */
    ref: {
      description: '图标的实例',
      table: {
        category: 'exposes',
        subcategory: 'new expose',
        type: {
          summary: 'IconInstance',
        },
      },
    },
  },
}
export default meta

export const UseCase: StoryObj<typeof ProIcon> = {
  render: args => ({
    components: {
      ProIcon,
    },
    setup() {
      return {
        args,
      }
    },
    template: `
      <pro-icon
        v-bind="args"
      />
    `,
  }),
  args: {
    /* attributes -> new attributes */
    defaultSlotName: '',
    name: 'Plus',
    /* attributes -> attributes corresponding existing events */
    click: event => {
      console.log(event)
    },
  },
}
