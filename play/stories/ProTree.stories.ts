import type { Meta, StoryObj } from '@storybook/vue3'
/* 开发时引入方式（按需引入） */
import ProTree from 'component-library-components/tree'
/* 打包后引入方式（按需引入） */
// import { ProTree } from 'component-library'

const meta: Meta = {
  title: 'Base Components/ProTree',
  component: ProTree,
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
    maxHeight: {
      description: '树的最大高度',
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
    filterNodeMethod: {
      control: false,
      description:
        '筛选树节点时执行的方法（优先级 requestApi > filterNodeMethod > data）',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing attributes',
        type: {
          summary:
            '(value?: string | number, data?: Record<string, any>, node?: Node) => boolean | Record<string, any>[]',
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
    nodeKey: {
      description: '树节点唯一标识',
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
          summary: 'TreeOptionProps',
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
            '(data?: Record<string, any>, treeCheckedStatusObject?: TreeCheckedStatusObject) => void',
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
          summary:
            '(data?: Record<string, any>, checked?: boolean, indeterminate?: boolean) => void',
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
          summary: '(data?: Record<string, any>, node?: Node) => void',
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
            '(data?: Record<string, any>, node?: Node, instance?: ComponentInternalInstance, event?: MouseEvent) => void',
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
          summary:
            '(data?: Record<string, any>, node?: Node, instance?: ComponentInternalInstance) => void',
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
            '(event?: MouseEvent, data?: Record<string, any>, node?: Node, instance?: ComponentInternalInstance) => void',
        },
      },
    },
    nodeDrop: {
      control: false,
      description: '拖拽成功完成时触发',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing events',
        type: {
          summary:
            "(draggedNode?: Node, enteredNode?: Node, position?: 'after' | 'before' | 'inner', event?: DragEvent) => void",
        },
      },
    },
    nodeDragEnd: {
      control: false,
      description: '拖拽结束时触发',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing events',
        type: {
          summary:
            "(draggedNode?: Node, enteredNode?: Node, position?: 'after' | 'before' | 'inner', event?: DragEvent) => void",
        },
      },
    },
    nodeDragEnter: {
      control: false,
      description: '拖拽节点进入其他节点时触发',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing events',
        type: {
          summary:
            '(draggedNode?: Node, enteredNode?: Node, event?: DragEvent) => void',
        },
      },
    },
    nodeDragLeave: {
      control: false,
      description: '拖拽节点离开某个节点时触发',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing events',
        type: {
          summary:
            '(draggedNode?: Node, leftNode?: Node, event?: DragEvent) => void',
        },
      },
    },
    nodeDragOver: {
      control: false,
      description: '拖拽节点进入某个节点或其子元素时触发',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing events',
        type: {
          summary:
            '(draggedNode?: Node, enteredNode?: Node, event?: DragEvent) => void',
        },
      },
    },
    nodeDragStart: {
      control: false,
      description: '拖拽节点开始时触发',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing events',
        type: {
          summary: '(draggedNode?: Node, event?: DragEvent) => void',
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
          summary:
            '(data?: Record<string, any>, node?: Node, instance?: ComponentInternalInstance) => void',
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

export const UseCase: StoryObj<typeof ProTree> = {
  render: args => ({
    components: {
      ProTree,
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
      <pro-tree
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
    hideLoadMoreButton: false,
    hideSearchInput: false,
    loadMoreButtonProps: {},
    maxHeight: 200,
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
    filterNodeMethod: undefined,
    highlightCurrent: true,
    highlightSearchText: false,
    nodeKey: 'value',
    props: {
      label: 'label',
    },
    /* attributes -> attributes corresponding existing events */
    check: (data, treeCheckedStatusObject) => {
      console.log(data)
      console.log(treeCheckedStatusObject)
    },
    checkChange: (data, checked, indeterminate) => {
      console.log(data)
      console.log(checked)
      console.log(indeterminate)
    },
    currentChange: (data, node) => {
      console.log(data)
      console.log(node)
    },
    nodeClick: (data, node, instance, event) => {
      console.log(data)
      console.log(node)
      console.log(instance)
      console.log(event)
    },
    nodeCollapse: (data, node, instance) => {
      console.log(data)
      console.log(node)
      console.log(instance)
    },
    nodeContextmenu: (event, data, node, instance) => {
      console.log(event)
      console.log(data)
      console.log(node)
      console.log(instance)
    },
    nodeDrop: (draggedNode, enteredNode, position, event) => {
      console.log(draggedNode)
      console.log(enteredNode)
      console.log(position)
      console.log(event)
    },
    nodeDragEnd: (draggedNode, enteredNode, position, event) => {
      console.log(draggedNode)
      console.log(enteredNode)
      console.log(position)
      console.log(event)
    },
    nodeDragEnter: (draggedNode, enteredNode, event) => {
      console.log(draggedNode)
      console.log(enteredNode)
      console.log(event)
    },
    nodeDragLeave: (draggedNode, leftNode, event) => {
      console.log(draggedNode)
      console.log(leftNode)
      console.log(event)
    },
    nodeDragOver: (draggedNode, enteredNode, event) => {
      console.log(draggedNode)
      console.log(enteredNode)
      console.log(event)
    },
    nodeDragStart: (draggedNode, event) => {
      console.log(draggedNode)
      console.log(event)
    },
    nodeExpand: (data, node, instance) => {
      console.log(data)
      console.log(node)
      console.log(instance)
    },
  },
}
