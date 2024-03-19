import type { Meta, StoryObj } from '@storybook/vue3'
/* 开发时引入方式（按需引入） */
import ProButton from 'component-library-components/button'
import ProFormDialog from 'component-library-components/form-dialog'
/* 打包后引入方式（按需引入） */
// import { ProButton, ProFormDialog } from 'component-library'

const meta: Meta = {
  title: 'Business Components/ProFormDialog',
  component: ProFormDialog,
  argTypes: {
    /* attributes -> new v-model attributes */
    loading: {
      description: '表单弹窗加载中状态',
      table: {
        category: 'attributes',
        subcategory: 'new v-model attributes',
      },
    },
    show: {
      description: '显示 / 隐藏表单弹窗',
      table: {
        category: 'attributes',
        subcategory: 'new v-model attributes',
      },
    },
    /* attributes -> new attributes */
    afterRequest: {
      control: false,
      description:
        '请求之后的回调方法（优先级 beforeRequest > onRequestSuccess > onRequestComplete > afterRequest）',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
        type: {
          summary: '() => void',
        },
      },
    },
    beforeRequest: {
      control: false,
      description:
        '请求之前的回调方法（优先级 beforeRequest > onRequestSuccess > onRequestComplete > afterRequest）',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
        type: {
          summary: '(params?: any) => void',
        },
      },
    },
    businessType: {
      control: false,
      description: '业务类型',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
      },
    },
    customRequestParams: {
      control: false,
      description: '自定义请求参数',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
        type: {
          summary: '(params?: any) => any',
        },
      },
    },
    dialogProps: {
      control: false,
      description: '对话框的属性',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
        type: {
          summary: 'ProDialogProps',
        },
      },
    },
    formProps: {
      control: false,
      description: '表单的属性',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
        type: {
          summary: 'ProFormProps',
        },
      },
    },
    hideRequestSuccessMessage: {
      description: '隐藏请求成功消息提示',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
      },
    },
    onRequestComplete: {
      control: false,
      description:
        '请求成功时的方法（优先级 beforeRequest > onRequestSuccess > onRequestComplete > afterRequest）',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
        type: {
          summary: '(response?: any, params?: any) => void',
        },
      },
    },
    onRequestError: {
      control: false,
      description: '请求失败时的方法',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
        type: {
          summary: '(error?: any) => void',
        },
      },
    },
    onRequestSuccess: {
      control: false,
      description:
        '请求成功时的方法（优先级 beforeRequest > onRequestSuccess > onRequestComplete > afterRequest）',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
        type: {
          summary: '(response?: any, params?: any) => void',
        },
      },
    },
    requestApi: {
      control: false,
      description: '请求 API',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
        type: {
          summary: '(params?: any) => Promise<any>',
        },
      },
    },
    responseMapping: {
      control: false,
      description: '响应的映射',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
        type: {
          summary: '(response?: any, params?: any) => { message?: string }',
        },
      },
    },
    /* exposes -> new expose */
    getParams: {
      description: '获取请求参数',
      table: {
        category: 'exposes',
        subcategory: 'new expose',
        type: {
          summary: '() => Record<string, any>',
        },
      },
    },
    proDialogRef: {
      description: '对话框的实例',
      table: {
        category: 'exposes',
        subcategory: 'new expose',
        type: {
          summary: 'ProDialogInstance',
        },
      },
    },
    proFormRef: {
      description: '表单的实例',
      table: {
        category: 'exposes',
        subcategory: 'new expose',
        type: {
          summary: 'ProFormInstance',
        },
      },
    },
    submit: {
      description: '提交',
      table: {
        category: 'exposes',
        subcategory: 'new expose',
        type: {
          summary: '() => void',
        },
      },
    },
  },
}
export default meta

export const UseCase: StoryObj<typeof ProFormDialog> = {
  render: args => ({
    components: {
      ProButton,
      ProFormDialog,
    },
    setup() {
      const openFormDialog = () => {
        args.show = true
      }
      return {
        args,
        openFormDialog,
      }
    },
    template: `
      <pro-button label="open" @click="openFormDialog" />
      <pro-form-dialog
        v-bind="args"
        v-model:loading="args.loading"
        v-model:show="args.show"
      />
    `,
  }),
  args: {
    /* attributes -> new v-model attributes */
    loading: false,
    show: false,
    /* attributes -> new attributes */
    afterRequest: () => {
      console.log('afterRequest')
    },
    beforeRequest: params => {
      console.log(params)
    },
    businessType: '',
    customRequestParams: params => {
      const { prop1 } = params
      return {
        customParam: prop1,
      }
    },
    dialogProps: {
      title: 'form-dialog-title',
      beforeClose: () => {
        console.log('beforeClose')
      },
    },
    formProps: {
      items: [
        {
          itemType: 'input',
          label: 'label-1',
          prop: 'prop1',
        },
      ],
      model: {
        prop1: null,
      },
    },
    hideRequestSuccessMessage: false,
    onRequestComplete: response => {
      console.log(response)
    },
    onRequestError: error => {
      console.log(error)
    },
    onRequestSuccess: response => {
      console.log(response)
    },
    requestApi: () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (Math.random() > 0.5) {
            resolve({
              msg: 'success',
            })
          } else {
            reject({
              msg: 'error',
            })
          }
        }, 1000)
      })
    },
    responseMapping: response => {
      return {
        message: response.msg,
      }
    },
  },
}
