import type { Meta, StoryObj } from '@storybook/vue3'
/* 开发时引入方式（按需引入） */
import ProTabs from 'component-library-components/tabs'
/* 打包后引入方式（按需引入） */
// import { ProTabs } from 'component-library'

const meta: Meta = {
  title: 'Base Components/ProTabs',
  component: ProTabs,
  argTypes: {
    /* attributes -> new attributes */
    defaultSlotName: {
      control: false,
      description:
        '标签页内容的插槽名称（优先级 defaultSlotName > default > panes）',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
      },
    },
    disabled: {
      description: '是否禁用标签页',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
      },
    },
    panes: {
      description:
        '标签页渲染的数组（优先级 defaultSlotName > default > panes）',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
        type: {
          summary: 'ProTabPaneProps[]',
        },
      },
    },
    /* attributes -> attributes corresponding existing events */
    edit: {
      control: false,
      description: '点击新增 / 移除按钮时触发',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing events',
        type: {
          summary:
            "(name?: string | number, action?: 'add' | 'remove') => void",
        },
      },
    },
    tabAdd: {
      control: false,
      description: '点击新增按钮时触发',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing events',
        type: {
          summary: '() => void',
        },
      },
    },
    tabChange: {
      control: false,
      description: 'modelValue 改变时触发',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing events',
        type: {
          summary: '(name?: string | number) => void',
        },
      },
    },
    tabClick: {
      control: false,
      description: '点击标签页时触发',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing events',
        type: {
          summary: '(pane?: TabsPaneContext, event?: Event) => void',
        },
      },
    },
    tabRemove: {
      control: false,
      description: '点击移除按钮时触发',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing events',
        type: {
          summary: '(name?: string | number) => void',
        },
      },
    },
    /* exposes -> new expose */
    proTabPaneRef: {
      description: '标签页窗口的实例',
      table: {
        category: 'exposes',
        subcategory: 'new expose',
        type: {
          summary: 'ProTabPaneInstance[]',
        },
      },
    },
    ref: {
      description: '标签页的实例',
      table: {
        category: 'exposes',
        subcategory: 'new expose',
        type: {
          summary: 'TabsInstance',
        },
      },
    },
  },
}
export default meta

import { ref } from 'vue'

export const UseCase: StoryObj<typeof ProTabs> = {
  render: args => ({
    components: {
      ProTabs,
    },
    setup() {
      const value = ref('tab-pane-1')
      return {
        args,
        value,
      }
    },
    template: `
      <pro-tabs
        v-bind="args"
        v-model="value"
      />
    `,
  }),
  args: {
    /* attributes -> new attributes */
    defaultSlotName: '',
    disabled: false,
    panes: [
      {
        label: 'tab-pane-1',
        name: 'tab-pane-1',
      },
      {
        label: 'tab-pane-2',
        name: 'tab-pane-2',
      },
      {
        label: 'tab-pane-3',
        name: 'tab-pane-3',
      },
    ],
    /* attributes -> attributes corresponding existing events */
    edit: (name, action) => {
      console.log(name)
      console.log(action)
    },
    tabAdd: () => {
      console.log('tabAdd')
    },
    tabChange: name => {
      console.log(name)
    },
    tabClick: (pane, event) => {
      console.log(pane)
      console.log(event)
    },
    tabRemove: name => {
      console.log(name)
    },
  },
}
