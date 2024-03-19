import type { Meta, StoryObj } from '@storybook/vue3'
/* 开发时引入方式（按需引入） */
import ProButton from 'component-library-components/button'
import ProSearchTableDialog from 'component-library-components/search-table-dialog'
/* 打包后引入方式（按需引入） */
// import { ProButton, ProSearchTableDialog } from 'component-library'

const meta: Meta = {
  title: 'Business Components/ProSearchTableDialog',
  component: ProSearchTableDialog,
  argTypes: {
    /* attributes -> new v-model attributes */
    loading: {
      description: '搜索表格弹窗加载中状态',
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
    businessType: {
      control: false,
      description: '业务类型',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
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
    searchTableProps: {
      control: false,
      description: '搜索表格的属性',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
        type: {
          summary: 'ProSearchTableProps',
        },
      },
    },
    /* exposes -> new expose */
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
    proSearchTableRef: {
      description: '搜索表格的实例',
      table: {
        category: 'exposes',
        subcategory: 'new expose',
        type: {
          summary: 'ProSearchTableInstance',
        },
      },
    },
  },
}
export default meta

import { ref, nextTick } from 'vue'

export const UseCase: StoryObj<typeof ProSearchTableDialog> = {
  render: args => ({
    components: {
      ProButton,
      ProSearchTableDialog,
    },
    setup() {
      const proSearchTableDialogRef = ref()
      const openSearchTableDialog = () => {
        args.show = true
        nextTick(() => {
          proSearchTableDialogRef.value!.proSearchTableRef!.query()
        })
      }
      return {
        args,
        proSearchTableDialogRef,
        openSearchTableDialog,
      }
    },
    template: `
      <pro-button label="open" @click="openSearchTableDialog" />
      <pro-search-table-dialog
        ref="proSearchTableDialogRef"
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
    businessType: '',
    dialogProps: {
      title: 'search-table-dialog-title',
      beforeClose: () => {
        console.log('beforeClose')
      },
    },
    searchTableProps: {
      formProps: {
        model: {
          prop1: 'input',
        },
      },
      requestApi: () => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            if (Math.random() > 0.5) {
              resolve({
                data: [
                  {
                    key: 'key1',
                    prop1: 'prop1-1',
                    prop2: 'prop1-2',
                    prop3: 'prop1-3',
                  },
                  {
                    key: 'key2',
                    prop1: 'prop2-1',
                    prop2: 'prop2-2',
                    prop3: 'prop2-3',
                  },
                ],
                total: 100,
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
          data: response.data,
          total: response.total,
        }
      },
      tableProps: {
        columns: [
          {
            formItemProps: {
              itemType: 'input',
              span: 6,
            },
            label: 'label 1',
            prop: 'prop1',
            remoteSortable: true,
            remoteSortOrder: '',
          },
        ],
        currentRow: {
          key: 'key2',
          prop1: 'prop2-1',
          prop2: 'prop2-2',
          prop3: 'prop2-3',
        },
        rowKey: 'key',
      },
    },
  },
}
