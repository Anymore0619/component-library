import type { Meta, StoryObj } from '@storybook/vue3'
/* 开发时引入方式（按需引入） */
import ProDialog from 'component-library-components/dialog'
/* 打包后引入方式（按需引入） */
// import { ProDialog } from 'component-library'

const meta: Meta = {
  title: 'Base Components/ProDialog',
  component: ProDialog,
  argTypes: {
    /* attributes -> new v-model attributes */
    loading: {
      description: '对话框加载中状态',
      table: {
        category: 'attributes',
        subcategory: 'new v-model attributes',
      },
    },
    /* attributes -> new attributes */
    cancelButtonProps: {
      description: '取消按钮的属性',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
        type: {
          summary: 'ProButtonProps',
        },
      },
    },
    confirmButtonProps: {
      description: '确定按钮的属性',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
        type: {
          summary: 'ProButtonProps',
        },
      },
    },
    defaultSlotName: {
      control: false,
      description: '对话框内容的插槽名称（优先级 defaultSlotName > default）',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
      },
    },
    footerSlotName: {
      control: false,
      description: '对话框底部内容的插槽名称（优先级 footerSlotName > footer）',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
      },
    },
    headerSlotName: {
      control: false,
      description: '对话框顶部内容的插槽名称（优先级 headerSlotName > header）',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
      },
    },
    hideFooter: {
      description: '隐藏对话框底部内容',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
      },
    },
    hideCancelButton: {
      description: '隐藏取消按钮',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
      },
    },
    hideConfirmButton: {
      description: '隐藏确定按钮',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
      },
    },
    titleSlotName: {
      control: false,
      description: '对话框标题内容的插槽名称（优先级 titleSlotName > title）',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
      },
    },
    /* attributes -> attributes corresponding existing attributes */
    appendToBody: {
      description: '是否插入至 body 元素',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing attributes',
      },
    },
    beforeClose: {
      control: false,
      description: '关闭弹窗前回调的方法',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing attributes',
        type: {
          summary: '() => void',
        },
      },
    },
    destroyOnClose: {
      description: '是否在关闭时销毁',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing attributes',
      },
    },
    draggable: {
      description: '是否可拖拽',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing attributes',
      },
    },
    /* attributes -> attributes corresponding existing events */
    close: {
      control: false,
      description: '对话框关闭时触发',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing events',
        type: {
          summary: '() => void',
        },
      },
    },
    closeAutoFocus: {
      control: false,
      description: '焦点从对话框失焦时触发',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing events',
        type: {
          summary: '() => void',
        },
      },
    },
    closed: {
      control: false,
      description: '对话框关闭动画结束时触发',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing events',
        type: {
          summary: '() => void',
        },
      },
    },
    open: {
      control: false,
      description: '对话框打开时触发',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing events',
        type: {
          summary: '() => void',
        },
      },
    },
    openAutoFocus: {
      control: false,
      description: '焦点从对话框聚焦时触发',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing events',
        type: {
          summary: '() => void',
        },
      },
    },
    opened: {
      control: false,
      description: '对话框打开动画结束时触发',
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
      description: '对话框的实例',
      table: {
        category: 'exposes',
        subcategory: 'new expose',
        type: {
          summary: 'DialogInstance',
        },
      },
    },
  },
}
export default meta

import { ref } from 'vue'

export const UseCase: StoryObj<typeof ProDialog> = {
  render: args => ({
    components: {
      ProDialog,
    },
    setup() {
      const title = 'dialog-title'
      const value = ref(true)
      const openProDialog = () => {
        value.value = true
      }
      return {
        args,
        title,
        value,
        openProDialog,
      }
    },
    template: `
      <el-button
        @click="openProDialog"
      >
        open
      </el-button>
      <pro-dialog
        v-bind="args"
        v-model="value"
        v-model:loading="args.loading"
        :title="title"
      >
        dialog-content
      </pro-dialog>
    `,
  }),
  args: {
    /* attributes -> new v-model attributes */
    loading: false,
    /* attributes -> new attributes */
    cancelButtonProps: {},
    confirmButtonProps: {},
    hideCancelButton: false,
    hideConfirmButton: false,
    hideFooter: false,
    /* attributes -> attributes corresponding existing attributes */
    appendToBody: true,
    beforeClose: () => {
      console.log('beforeClose')
    },
    destroyOnClose: true,
    draggable: true,
    /* attributes -> attributes corresponding existing events */
    close: () => {
      console.log('close')
    },
    closed: () => {
      console.log('closed')
    },
    closeAutoFocus: () => {
      console.log('closeAutoFocus')
    },
    open: () => {
      console.log('open')
    },
    opened: () => {
      console.log('opened')
    },
    openAutoFocus: () => {
      console.log('openAutoFocus')
    },
  },
}
