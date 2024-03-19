import type { Meta, StoryObj } from '@storybook/vue3'
/* 开发时引入方式（按需引入） */
import ProTag from 'component-library-components/tag'
/* 打包后引入方式（按需引入） */
// import { ProTag } from 'component-library'

const meta: Meta = {
  title: 'Base Components/ProTag',
  component: ProTag,
  argTypes: {
    /* attributes -> new attributes */
    defaultSlotName: {
      control: false,
      description:
        '标签内容的插槽名称（优先级 defaultSlotName > default > label）',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
      },
    },
    label: {
      description: '标签文本（优先级 defaultSlotName > default > label）',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
      },
    },
    /* attributes -> attributes corresponding existing attributes */
    disableTransitions: {
      control: false,
      description: '是否禁用渐变动画',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing attributes',
      },
    },
    /* attributes -> attributes corresponding existing events */
    click: {
      control: false,
      description: '点击标签时触发',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing events',
        type: {
          summary: '(event?: MouseEvent) => void',
        },
      },
    },
    close: {
      control: false,
      description: '关闭标签时触发',
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
      description: '标签的实例',
      table: {
        category: 'exposes',
        subcategory: 'new expose',
        type: {
          summary: 'TagInstance',
        },
      },
    },
  },
}
export default meta

export const UseCase: StoryObj<typeof ProTag> = {
  render: args => ({
    components: {
      ProTag,
    },
    setup() {
      return {
        args,
      }
    },
    template: `
      <pro-tag
        v-bind="args"
      />
    `,
  }),
  args: {
    /* attributes -> new attributes */
    defaultSlotName: '',
    label: 'tag',
    /* attributes -> attributes corresponding existing attributes */
    disableTransitions: true,
    /* attributes -> attributes corresponding existing events */
    click: event => {
      console.log(event)
    },
    close: event => {
      console.log(event)
    },
  },
}
