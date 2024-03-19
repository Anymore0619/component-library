import type { Meta, StoryObj } from '@storybook/vue3'
/* 开发时引入方式（按需引入） */
import ProSearchTable from 'component-library-components/search-table'
/* 打包后引入方式（按需引入） */
// import { ProSearchTable } from 'component-library'

const meta: Meta = {
  title: 'Business Components/ProSearchTable',
  component: ProSearchTable,
  argTypes: {
    /* attributes -> new v-model attributes */
    loading: {
      description: '表单弹窗加载中状态',
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
    hideForm: {
      description: '隐藏表单',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
      },
    },
    hidePagination: {
      description: '隐藏分页',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
      },
    },
    hideTable: {
      description: '隐藏表格',
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
    paginationProps: {
      control: false,
      description: '分页的属性',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
        type: {
          summary: 'ProPaginationProps',
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
          summary:
            '(response?: any, params?: any) => { data?: any, total?: number }',
        },
      },
    },
    tableProps: {
      control: false,
      description: '表格的属性',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
        type: {
          summary: 'ProTableProps',
        },
      },
    },
    /* slots -> new slot */
    'over-table': {
      control: false,
      description: '表格上方内容的插槽',
      table: {
        category: 'slots',
        subcategory: 'new slots',
        type: {
          summary: 'Slot',
        },
      },
    },
    'under-table': {
      control: false,
      description: '表格下方内容的插槽',
      table: {
        category: 'slots',
        subcategory: 'new slots',
        type: {
          summary: 'Slot',
        },
      },
    },
    /* exposes -> new expose */
    clearTableData: {
      description: '清空表格数据',
      table: {
        category: 'exposes',
        subcategory: 'new expose',
        type: {
          summary: '() => void',
        },
      },
    },
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
    getTableData: {
      description: '获取表格数据',
      table: {
        category: 'exposes',
        subcategory: 'new expose',
        type: {
          summary: '() => Record<string, any>[]',
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
    proPaginationRef: {
      description: '分页的实例',
      table: {
        category: 'exposes',
        subcategory: 'new expose',
        type: {
          summary: 'ProPaginationInstance',
        },
      },
    },
    proTableRef: {
      description: '表格的实例',
      table: {
        category: 'exposes',
        subcategory: 'new expose',
        type: {
          summary: 'ProTableInstance',
        },
      },
    },
    query: {
      description: '查询',
      table: {
        category: 'exposes',
        subcategory: 'new expose',
        type: {
          summary: '() => void',
        },
      },
    },
    queryByPageNumber: {
      description: '根据页数查询',
      table: {
        category: 'exposes',
        subcategory: 'new expose',
        type: {
          summary: '(pageNumber: number) => void',
        },
      },
    },
  },
}
export default meta

import { ref, onMounted } from 'vue'

export const UseCase: StoryObj<typeof ProSearchTable> = {
  render: args => ({
    components: {
      ProSearchTable,
    },
    setup() {
      const searchTableRef = ref()
      onMounted(() => {
        searchTableRef.value.query()
      })
      return {
        args,
        searchTableRef,
      }
    },
    template: `
      <pro-search-table
        ref="searchTableRef"
        style="width: 75rem;"
        v-bind="args"
        v-model:checked-rows="args.tableProps.checkedRows"
        v-model:current-page="args.paginationProps.currentPage"
        v-model:current-row="args.tableProps.currentRow"
        v-model:loading="args.loading"
        v-model:page-size="args.paginationProps.pageSize"
        v-model:total="args.paginationProps.total"
      />
    `,
  }),
  args: {
    /* attributes -> new v-model attributes */
    loading: false,
    /* attributes -> new attributes */
    afterRequest: () => {
      console.log('afterRequest')
    },
    beforeRequest: params => {
      console.log(params)
    },
    customRequestParams: params => {
      const { pageNum, pageSize, prop1, remoteSortColumns } = params
      return {
        customParam: prop1,
        pageNum,
        pageSize,
        remoteSortColumns,
      }
    },
    formProps: {
      model: {
        prop1: 'input',
      },
    },
    hideForm: false,
    hideTable: false,
    hidePagination: false,
    onRequestComplete: response => {
      console.log(response)
    },
    onRequestError: error => {
      console.log(error)
    },
    onRequestSuccess: response => {
      console.log(response)
    },
    paginationProps: {
      currentPage: 1,
      pageSize: 20,
      props: {
        currentPage: 'pageNum',
      },
      total: 0,
    },
    requestApi: () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (Math.random() > 0.5) {
            resolve({
              dataNeedMapping: [
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
              totalNeedMapping: 100,
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
        data: response.dataNeedMapping,
        total: response.totalNeedMapping,
      }
    },
    tableProps: {
      checkedRows: [],
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
        {
          formItemProps: {
            itemType: 'input',
            span: 6,
          },
          label: 'label 2',
          prop: 'prop2',
        },
        {
          formItemProps: {
            itemType: 'input',
            span: 6,
          },
          label: 'label 3',
          prop: 'prop3',
        },
        {
          label: 'label 4',
          prop: 'prop4',
        },
        {
          displayable: true,
          displayed: false,
          label: 'label 5',
          prop: 'prop5',
        },
        {
          displayable: false,
          label: 'label 6',
          prop: 'prop6',
        },
        {
          childColumns: [
            {
              label: 'label 7-1',
              prop: 'prop7-1',
            },
            {
              label: 'label 7-2',
              prop: 'prop7-2',
            },
          ],
          label: 'label 7',
          type: 'group',
        },
        {
          actions: [
            {
              click: row => {
                console.log(row)
              },
              hidden: row => {
                return row!.prop1 === 'prop1-1'
              },
              label: 'action-1',
            },
            {
              click: row => {
                console.log(row)
              },
              label: 'action-2',
            },
            {
              click: row => {
                console.log(row)
              },
              label: 'action-3',
            },
            {
              click: row => {
                console.log(row)
              },
              label: 'action-4',
            },
          ],
          align: 'center',
          fixed: 'right',
          label: 'action',
          type: 'action',
          width: 240,
        },
      ],
      currentRow: {},
      rowKey: 'key',
      showToolbar: true,
    },
  },
}
