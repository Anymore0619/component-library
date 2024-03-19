import VirtualizedTree from './virtualized-tree.vue'
import type { ProButtonProps } from '../../button'
import type { ProInputProps } from '../../input'
import type { TreeNodeAction } from '../../tree'
import { ElTreeV2 } from 'element-plus'
import type { Writable } from 'component-library-utils/types'
import type {
  CheckedInfo,
  TreeData as VirtualizedTreeData,
  TreeNode,
  TreeNodeData,
  TreeOptionProps as VirtualizedTreeOptionProps,
  TreeProps,
} from 'element-plus/es/components/tree-v2/src/types'

/* 已有的属性 */
type VirtualizedTreeProps = TreeProps
/* 扩展的属性 */
type VirtualizedTreeExtendedProps = {
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
  height?: number
  hideLoadMoreButton?: boolean
  hideSearchInput?: boolean
  highlightSearchText?: boolean
  loadMoreButtonProps?: ProButtonProps
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
  data?: VirtualizedTreeData
  expandOnClickNode?: boolean
  filterMethod?: (
    query?: string,
    data?: TreeNodeData
  ) => boolean | Record<string, any>[]
  highlightCurrent?: boolean
  props?: VirtualizedTreeOptionProps
  /* 对应已有事件的属性 */
  check?: (data?: TreeNodeData, treeCheckedStatusObject?: CheckedInfo) => void
  checkChange?: (data?: TreeNodeData, checked?: boolean) => void
  currentChange?: (data?: TreeNodeData, node?: TreeNode) => void
  nodeClick?: (data?: TreeNodeData, node?: TreeNode, event?: MouseEvent) => void
  nodeCollapse?: (data?: TreeNodeData, node?: TreeNode) => void
  nodeContextmenu?: (
    event?: MouseEvent,
    data?: TreeNodeData,
    node?: TreeNode
  ) => void
  nodeExpand?: (data?: TreeNodeData, node?: TreeNode) => void
}
/* 可传递的属性 */
type ProVirtualizedTreeProps = Writable<Partial<VirtualizedTreeProps>> &
  VirtualizedTreeExtendedProps
/* 可注入的属性 */
type ProVirtualizedTreeInjects = {
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
type VirtualizedTreeInstance = InstanceType<typeof ElTreeV2>
type ProVirtualizedTreeInstance = InstanceType<typeof VirtualizedTree>

export type {
  /* 其他 */
  CheckedInfo,
  VirtualizedTreeData,
  TreeNode,
  TreeNodeData,
  /* 属性 */
  VirtualizedTreeProps,
  VirtualizedTreeExtendedProps,
  ProVirtualizedTreeProps,
  ProVirtualizedTreeInjects,
  /* 实例 */
  VirtualizedTreeInstance,
  ProVirtualizedTreeInstance,
}
