import type { Meta, StoryObj } from '@storybook/vue3'
/* 开发时引入方式（按需引入） */
import ProButton from 'component-library-components/button'
/* 打包后引入方式（按需引入） */
// import { ProButton } from 'component-library'

const meta: Meta = {
  title: 'Base Components/ProButton',
  component: ProButton,
  argTypes: {
    /* attributes -> new attributes */
    defaultSlotName: {
      control: false,
      description:
        '按钮内容的插槽名称（优先级 defaultSlotName > default > label）',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
      },
    },
    iconSlotName: {
      control: false,
      description: '按钮图标内容的插槽名称（优先级 iconSlotName > icon）',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
      },
    },
    label: {
      description: '按钮文本（优先级 defaultSlotName > default > label）',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
        type: {
          summary: 'string',
        },
      },
    },
    loadingSlotName: {
      control: false,
      description:
        '按钮加载中图标内容的插槽名称（优先级 loadingSlotName > loading）',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
      },
    },
    /* attributes -> attributes corresponding existing attributes */
    circle: {
      description: '是否为圆形按钮',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing attributes',
      },
    },
    icon: {
      control: false,
      description: '按钮显示的图标',
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
      description: '按钮的实例',
      table: {
        category: 'exposes',
        subcategory: 'new expose',
        type: {
          summary: 'ButtonInstance',
        },
      },
    },
  },
}
export default meta

export const UseCase: StoryObj<typeof ProButton> = {
  render: args => ({
    components: {
      ProButton,
    },
    setup() {
      return {
        args,
      }
    },
    template: `
      <pro-button
        v-bind="args"
      />
    `,
  }),
  args: {
    /* attributes -> new attributes */
    defaultSlotName: '',
    iconSlotName: '',
    label: 'button',
    loadingSlotName: '',
    /* attributes -> attributes corresponding existing attributes */
    circle: false,
    icon: undefined,
    /* attributes -> attributes corresponding existing events */
    click: event => {
      console.log(event)
    },
  },
}
