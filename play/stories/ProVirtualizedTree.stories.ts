import type { Meta, StoryObj } from '@storybook/vue3'
/* 开发时引入方式（按需引入） */
import ProVirtualizedTree from 'component-library-components/virtualized-tree'
/* 打包后引入方式（按需引入） */
// import { ProVirtualizedTree } from 'component-library'

const meta: Meta = {
  title: 'Base Components/ProVirtualizedTree',
  component: ProVirtualizedTree,
  argTypes: {
    /* attributes -> new v-model attributes */
    checkedNodes: {
      description: '树当前选中节点（传递 node-key 时生效）',
      table: {
        category: 'attributes',
        subcategory: 'new v-model attributes',
        type: {
          summary: 'Record<string, any>[]',
        },
      },
    },
    currentNode: {
      description: '树当前节点（传递 node-key 时生效）',
      table: {
        category: 'attributes',
        subcategory: 'new v-model attributes',
        type: {
          summary: 'Record<string, any>',
        },
      },
    },
    loading: {
      description: '树加载中状态',
      table: {
        category: 'attributes',
        subcategory: 'new v-model attributes',
      },
    },
    /* attributes -> new attributes */
    actions: {
      control: false,
      description: '树节点操作渲染的数组',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
        type: {
          summary: 'Action[]',
        },
      },
    },
    actionLabel: {
      control: false,
      description: '树节点操作的文本',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
        type: {
          summary: '操作',
        },
      },
    },
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
    beforeSearchInputEnter: {
      control: false,
      description: '搜索输入框回车之前的回调方法',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
        type: {
          summary: '() => void',
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
    defaultSlotName: {
      control: false,
      description: '树节点内容的插槽名称（优先级 defaultSlotName > default）',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
      },
    },
    emptySlotName: {
      control: false,
      description: '树无节点时内容的插槽名称（优先级 emptySlotName > empty）',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
      },
    },
    height: {
      description: '树的最大高度',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
      },
    },
    hideLoadMoreButton: {
      description: '隐藏加载更多按钮',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
      },
    },
    hideSearchInput: {
      description: '隐藏搜索输入框',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
      },
    },
    highlightSearchText: {
      description: '高亮搜索文本',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
      },
    },
    loadMoreButtonProps: {
      description: '加载更多按钮的属性',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
      },
    },
    nodeActionSlotName: {
      control: false,
      description:
        '树节点操作的插槽名称（优先级 nodeActionSlotName > node-action）',
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
          summary:
            '{ pageSize?: number, props?: { currentPage?: string, pageSize?: string }}',
        },
      },
    },
    requestApi: {
      control: false,
      description: '请求 API（优先级 requestApi > filterNodeMethod > data）',
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
    searchInputProps: {
      description: '搜索输入框的属性',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
      },
    },
    /* attributes -> attributes corresponding existing attributes */
    data: {
      control: false,
      description:
        '树渲染的数组（优先级 requestApi > filterNodeMethod > data）',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing attributes',
      },
    },
    expandOnClickNode: {
      description: '是否在点击树节点时展开',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing attributes',
      },
    },
    filterMethod: {
      control: false,
      description:
        '筛选树节点时执行的方法（优先级 requestApi > filterMethod > data）',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing attributes',
        type: {
          summary: '(query?: string, data?: TreeNodeData) => boolean',
        },
      },
    },
    highlightCurrent: {
      description: '是否高亮选中节点',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing attributes',
      },
    },
    props: {
      description: '树节点配置项',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing attributes',
        type: {
          summary: 'VirtualizedTreeOptionProps',
        },
      },
    },
    /* attributes -> attributes corresponding existing events */
    check: {
      control: false,
      description: '点击树节点复选框时触发',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing events',
        type: {
          summary:
            '(data?: TreeNodeData, treeCheckedStatusObject?: CheckedInfo) => void',
        },
      },
    },
    checkChange: {
      control: false,
      description: '树当前选中节点变化时触发',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing events',
        type: {
          summary: '(data?: TreeNodeData, checked?: boolean) => void',
        },
      },
    },
    currentChange: {
      control: false,
      description: '当前选中节点改变时触发',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing events',
        type: {
          summary: '(data?: TreeNodeData, node?: TreeNode) => void',
        },
      },
    },
    nodeClick: {
      control: false,
      description: '点击树节点时触发',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing events',
        type: {
          summary:
            '(data?: TreeNodeData, node?: TreeNode, event?: MouseEvent) => void',
        },
      },
    },
    nodeCollapse: {
      control: false,
      description: '折叠树节点时触发',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing events',
        type: {
          summary: '(data?: TreeNodeData, node?: TreeNode) => void',
        },
      },
    },
    nodeContextmenu: {
      control: false,
      description: '右击树节点时触发',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing events',
        type: {
          summary:
            '(event?: MouseEvent, data?: TreeNodeData, node?: TreeNode) => void',
        },
      },
    },
    nodeExpand: {
      control: false,
      description: '展开树节点时触发',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing events',
        type: {
          summary: '(data?: TreeNodeData, node?: TreeNode) => void',
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
    ref: {
      description: '树的实例',
      table: {
        category: 'exposes',
        subcategory: 'new expose',
        type: {
          summary: 'TreeInstance',
        },
      },
    },
  },
}
export default meta

import { ref, onMounted } from 'vue'

export const UseCase: StoryObj<typeof ProVirtualizedTree> = {
  render: args => ({
    components: {
      ProVirtualizedTree,
    },
    setup() {
      const treeRef = ref()
      onMounted(() => {
        treeRef.value.query()
      })
      return {
        args,
        treeRef,
      }
    },
    template: `
      <pro-virtualized-tree
        ref="treeRef"
        style="width: 25rem;"
        v-bind="args"
        v-model:checked-nodes="args.checkedNodes"
        v-model:current-node="args.currentNode"
        v-model:loading="args.loading"
      />
    `,
  }),
  args: {
    /* attributes -> new v-model attributes */
    checkedNodes: [],
    currentNode: {},
    loading: false,
    /* attributes -> new attributes */
    actions: [
      {
        click: (node, data) => {
          console.log(node)
          console.log(data)
        },
        hidden: (node, data) => {
          return data!.label === 'node-1'
        },
        label: 'action-1',
      },
      {
        click: (node, data) => {
          console.log(node)
          console.log(data)
        },
        label: 'action-2',
      },
      {
        click: (node, data) => {
          console.log(node)
          console.log(data)
        },
        label: 'action-3',
      },
    ],
    actionLabel: '操作',
    afterRequest: () => {
      console.log('afterRequest')
    },
    beforeRequest: params => {
      console.log(params)
    },
    beforeSearchInputEnter: () => {
      console.log('beforeSearchInputEnter')
    },
    customRequestParams: params => {
      const { pageNum, pageSize, searchText } = params
      return {
        pageNum,
        pageSize,
        customParam: searchText,
      }
    },
    defaultSlotName: '',
    emptySlotName: '',
    height: 200,
    hideLoadMoreButton: false,
    hideSearchInput: false,
    highlightSearchText: false,
    loadMoreButtonProps: {},
    nodeActionSlotName: '',
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
      pageSize: 10,
      props: {
        currentPage: 'pageNum',
      },
    },
    requestApi: () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (Math.random() > 0) {
            resolve({
              dataNeedMapping: [
                {
                  label: 'node-1',
                  value: 'node-1',
                  children: [
                    {
                      label: 'node-1-1',
                      value: 'node-1-1',
                    },
                    {
                      label: 'node-1-2',
                      value: 'node-1-2',
                    },
                    {
                      label: 'node-1-3',
                      value: 'node-1-3',
                    },
                    {
                      label: 'node-1-4',
                      value: 'node-1-4',
                    },
                    {
                      label: 'node-1-5',
                      value: 'node-1-5',
                    },
                  ],
                },
                {
                  label: 'node-2',
                  value: 'node-2',
                },
                {
                  label: 'node-3',
                  value: 'node-3',
                },
                {
                  label: 'node-4',
                  value: 'node-4',
                },
                {
                  label: 'node-5',
                  value: 'node-5',
                },
              ],
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
        total: 10,
      }
    },
    searchInputProps: {
      modelValue: '',
    },
    /* attributes -> attributes corresponding existing attributes */
    data: [],
    expandOnClickNode: false,
    filterMethod: undefined,
    highlightCurrent: true,
    props: {
      label: 'label',
      value: 'value',
    },
    /* attributes -> attributes corresponding existing events */
    check: (data, treeCheckedStatusObject) => {
      console.log(data)
      console.log(treeCheckedStatusObject)
    },
    checkChange: (data, checked) => {
      console.log(data)
      console.log(checked)
    },
    currentChange: (data, node) => {
      console.log(data)
      console.log(node)
    },
    nodeClick: (data, node, event) => {
      console.log(data)
      console.log(node)
      console.log(event)
    },
    nodeCollapse: (data, node) => {
      console.log(data)
      console.log(node)
    },
    nodeContextmenu: (event, data, node) => {
      console.log(event)
      console.log(data)
      console.log(node)
    },
    nodeExpand: (data, node) => {
      console.log(data)
      console.log(node)
    },
  },
}
