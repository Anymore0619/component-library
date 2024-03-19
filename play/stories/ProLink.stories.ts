import type { Meta, StoryObj } from '@storybook/vue3'
/* 开发时引入方式（按需引入） */
import ProLink from 'component-library-components/link'
/* 打包后引入方式（按需引入） */
// import { ProLink } from 'component-library'

const meta: Meta = {
  title: 'Base Components/ProLink',
  component: ProLink,
  argTypes: {
    /* attributes -> new attributes */
    defaultSlotName: {
      control: false,
      description:
        '链接内容的插槽名称（优先级 defaultSlotName > default > label）',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
      },
    },
    label: {
      description: '文本（优先级 defaultSlotName > default > label）',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
      },
    },
    /* attributes -> attributes corresponding existing attributes */
    icon: {
      control: false,
      description: '链接显示的图标',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing attributes',
        type: {
          summary: 'Component',
        },
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
      description: '链接的实例',
      table: {
        category: 'exposes',
        subcategory: 'new expose',
        type: {
          summary: 'LinkInstance',
        },
      },
    },
  },
}
export default meta

export const UseCase: StoryObj<typeof ProLink> = {
  render: args => ({
    components: {
      ProLink,
    },
    setup() {
      return {
        args,
      }
    },
    template: `
      <pro-link
        v-bind="args"
      />
    `,
  }),
  args: {
    /* attributes -> new attributes */
    defaultSlotName: '',
    label: 'link',
    /* attributes -> attributes corresponding existing attributes */
    icon: undefined,
    /* attributes -> attributes corresponding existing events */
    click: event => {
      console.log(event)
    },
  },
}
