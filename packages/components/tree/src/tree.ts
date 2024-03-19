import Tree from './tree.vue'
import { ElTree } from 'element-plus'
import type { ProButtonProps } from '../../button'
import type { ProInputProps } from '../../input'
import type { Writable } from 'component-library-utils/types'
import type {
  TreeComponentProps,
  TreeData,
  TreeOptionProps,
} from 'element-plus/es/components/tree/src/tree.type'
import type Node from 'element-plus/es/components/tree/src/model/node'
import type { ComponentInternalInstance } from 'vue'

/* 树选中状态对象 */
type TreeCheckedStatusObject = {
  checkedKeys: string[]
  checkedNodes: Record<string, any>[]
  halfCheckedKeys: string[]
  halfCheckedNodes: Record<string, any>[]
}
/* 树节点操作 */
type TreeNodeAction = {
  click?: (node?: Node, data?: Record<string, any>) => void
  hidden?: (node?: Node, data?: Record<string, any>) => boolean
  label?: string
}
/* 已有的属性 */
type TreeProps = TreeComponentProps
/* 扩展的属性 */
type TreeExtendedProps = {
  /* 新增的 v-model 属性 */
  checkedNodes?: Record<string, any>[]
  currentNode?: Record<string, any>
  loading?: boolean
  /* 新增的属性 */
  actionLabel?: string
  actions?: TreeNodeAction[]
  afterRequest?: () => void
  beforeRequest?: (params?: any) => void
  beforeSearchInputEnter?: () => void
  customRequestParams?: (params?: any) => any
  defaultSlotName?: string
  emptySlotName?: string
  hideLoadMoreButton?: boolean
  hideSearchInput?: boolean
  highlightSearchText?: boolean
  loadMoreButtonProps?: ProButtonProps
  maxHeight?: number
  nodeActionSlotName?: string
  onRequestComplete?: (response?: any, params?: any) => void
  onRequestError?: (error?: any) => void
  onRequestSuccess?: (response?: any, params?: any) => void
  paginationProps?: {
    pageSize?: number
    props?: {
      currentPage?: string
      pageSize?: string
    }
  }
  requestApi?: (params?: any) => Promise<any>
  responseMapping?: (
    response?: any,
    params?: any
  ) => {
    data?: any
    total?: number
  }
  searchInputProps?: ProInputProps
  /* 对应已有属性的属性 */
  data?: TreeData
  expandOnClickNode?: boolean
  filterNodeMethod?: (
    value?: string | number,
    data?: Record<string, any>,
    node?: Node
  ) => boolean | Record<string, any>[]
  highlightCurrent?: boolean
  nodeKey?: string
  props?: TreeOptionProps
  /* 对应已有事件的属性 */
  check?: (
    data?: Record<string, any>,
    treeCheckedStatusObject?: TreeCheckedStatusObject
  ) => void
  checkChange?: (
    data?: Record<string, any>,
    checked?: boolean,
    indeterminate?: boolean
  ) => void
  currentChange?: (data?: Record<string, any>, node?: Node) => void
  nodeClick?: (
    data?: Record<string, any>,
    node?: Node,
    instance?: ComponentInternalInstance,
    event?: MouseEvent
  ) => void
  nodeCollapse?: (
    data?: Record<string, any>,
    node?: Node,
    instance?: ComponentInternalInstance
  ) => void
  nodeContextmenu?: (
    event?: MouseEvent,
    data?: Record<string, any>,
    node?: Node,
    instance?: ComponentInternalInstance
  ) => void
  nodeDrop?: (
    draggedNode?: Node,
    enteredNode?: Node,
    position?: 'after' | 'before' | 'inner',
    event?: DragEvent
  ) => void
  nodeDragEnd?: (
    draggedNode?: Node,
    enteredNode?: Node,
    position?: 'after' | 'before' | 'inner',
    event?: DragEvent
  ) => void
  nodeDragEnter?: (
    draggedNode?: Node,
    enteredNode?: Node,
    event?: DragEvent
  ) => void
  nodeDragLeave?: (
    draggedNode?: Node,
    leftNode?: Node,
    event?: DragEvent
  ) => void
  nodeDragOver?: (
    draggedNode?: Node,
    enteredNode?: Node,
    event?: DragEvent
  ) => void
  nodeDragStart?: (draggedNode?: Node, event?: DragEvent) => void
  nodeExpand?: (
    data?: Record<string, any>,
    node?: Node,
    instance?: ComponentInternalInstance
  ) => void
}
/* 可传递的属性 */
type ProTreeProps = Writable<Partial<TreeProps>> & TreeExtendedProps
/* 可注入的属性 */
type ProTreeInjects = {
  paginationProps?: {
    props?: {
      currentPage?: string
      pageSize?: string
    }
  }
  responseMapping?: (
    response?: any,
    params?: any
  ) => {
    data?: any
    total?: number
  }
}
/* 实例 */
type TreeInstance = InstanceType<typeof ElTree>
type ProTreeInstance = InstanceType<typeof Tree>

export type {
  /* 其他 */
  Node,
  TreeCheckedStatusObject,
  TreeData,
  TreeNodeAction,
  /* 属性 */
  TreeProps,
  TreeExtendedProps,
  ProTreeProps,
  ProTreeInjects,
  /* 实例 */
  TreeInstance,
  ProTreeInstance,
}
