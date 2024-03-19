import type { Meta, StoryObj } from '@storybook/vue3'
/* 开发时引入方式（按需引入） */
import ProPopover from 'component-library-components/popover'
/* 打包后引入方式（按需引入） */
// import { ProPopover } from 'component-library'

const meta: Meta = {
  title: 'Base Components/ProPopover',
  component: ProPopover,
  argTypes: {
    /* attributes -> new attributes */
    defaultSlotName: {
      control: false,
      description: '弹出框内容的插槽名称（优先级 defaultSlotName > default）',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
      },
    },
    referenceSlotName: {
      control: false,
      description:
        '触发弹出框的元素的插槽名称（优先级 referenceSlotName > reference）',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
      },
    },
    /* attributes -> attributes corresponding existing events */
    afterEnter: {
      control: false,
      description: '弹出框显示动画结束后触发',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing events',
        type: {
          summary: '() => void',
        },
      },
    },
    afterLeave: {
      control: false,
      description: '弹出框隐藏动画结束后触发',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing events',
        type: {
          summary: '() => void',
        },
      },
    },
    beforeEnter: {
      control: false,
      description: '弹出框显示动画播放前触发',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing events',
        type: {
          summary: '() => void',
        },
      },
    },
    beforeLeave: {
      control: false,
      description: '弹出框隐藏动画结束前触发',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing events',
        type: {
          summary: '() => void',
        },
      },
    },
    hide: {
      control: false,
      description: '弹出框隐藏时触发',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing events',
        type: {
          summary: '() => void',
        },
      },
    },
    show: {
      control: false,
      description: '弹出框显示时触发',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing events',
        type: {
          summary: '() => void',
        },
      },
    },
    /* exposes -> new expose */
    ref: {
      description: '弹出框的实例',
      table: {
        category: 'exposes',
        subcategory: 'new expose',
        type: {
          summary: 'PopoverInstance',
        },
      },
    },
  },
}
export default meta

export const UseCase: StoryObj<typeof ProPopover> = {
  render: args => ({
    components: {
      ProPopover,
    },
    setup() {
      return {
        args,
      }
    },
    template: `
      <pro-popover
        v-bind="args"
      >
        popover
        <template #reference>popover</template>
      </pro-popover>
    `,
  }),
  args: {
    /* attributes -> new attributes */
    defaultSlotName: '',
    referenceSlotName: '',
    /* attributes -> attributes corresponding existing events */
    afterEnter: () => {
      console.log('after-enter')
    },
    afterLeave: () => {
      console.log('after-leave')
    },
    beforeEnter: () => {
      console.log('before-enter')
    },
    beforeLeave: () => {
      console.log('before-leave')
    },
    hide: () => {
      console.log('hide')
    },
    show: () => {
      console.log('show')
    },
  },
}
