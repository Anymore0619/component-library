import type { Meta, StoryObj } from '@storybook/vue3'
/* 开发时引入方式（按需引入） */
import ProTabPane from 'component-library-components/tab-pane'
import ProTabs from 'component-library-components/tabs'
/* 打包后引入方式（按需引入） */
// import { ProTabPane, ProTabs } from 'component-library'

const meta: Meta = {
  title: 'Base Components/ProTabPane',
  component: ProTabPane,
  argTypes: {
    /* attributes -> new attributes */
    contentSlotName: {
      control: false,
      description:
        '标签页窗口内容的插槽名称（优先级 contentSlotName > content）',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
      },
    },
    hidden: {
      control: false,
      description: '隐藏标签页窗口',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
      },
    },
    labelSlotName: {
      control: false,
      description:
        '标签页窗口标题内容的插槽名称（优先级 labelSlotName > label）',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
      },
    },
    /* slots -> new slot */
    content: {
      control: false,
      description:
        '标签页窗口内容的插槽（优先级 contentSlotName > content）（default 插槽与 pro-tabs 中的 default 插槽存在重名冲突，使用 content 插槽替代）',
      table: {
        category: 'slots',
        subcategory: 'new slots',
        type: {
          summary: 'Slot',
        },
      },
    },
    /* exposes -> new expose */
    ref: {
      description: '标签页窗口的实例',
      table: {
        category: 'exposes',
        subcategory: 'new expose',
        type: {
          summary: 'TabPaneInstance',
        },
      },
    },
  },
}
export default meta

import { ref } from 'vue'

export const UseCase: StoryObj<typeof ProTabPane> = {
  render: args => ({
    components: {
      ProTabPane,
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
      >
        <pro-tab-pane
          label="tab-pane-1"
          name="tab-pane-1"
        />
        <pro-tab-pane
          label="tab-pane-2"
          name="tab-pane-2"
        />
        <pro-tab-pane
          label="tab-pane-3"
          name="tab-pane-3"
        />
      </pro-tabs>
    `,
  }),
  args: {},
}
