import Table from './table.vue'
import tableDefaultProps from 'element-plus/es/components/table/src/table/defaults'
import type {
  Column,
  ProTableColumnProps,
  RemoteSortOrder,
} from '../../table-column'
import type { Writable } from 'component-library-utils/types'
import type { TableInstance } from 'element-plus'
import type { ExtractPropTypes } from 'vue'

/* 展开对象 */
type ExpandedObject = Record<string, any> | boolean
/* 远程排序列 */
type RemoteSortColumn = {
  index?: number
  order?: RemoteSortOrder
  prop?: string
}
/* 排序对象 */
type SortObject = {
  column?: Column
  order?: 'ascending' | 'descending' | null
  prop?: string
}
/* 已有的属性 */
type TableProps = ExtractPropTypes<typeof tableDefaultProps>
/* 扩展的属性 */
type TableExtendedProps = {
  /* 新增的 v-model 属性 */
  checkedRows?: Record<string, any>[]
  currentRow?: Record<string, any>
  /* 新增的属性 */
  appendSlotName?: ''
  columns?: ProTableColumnProps[]
  defaultSlotName?: ''
  emptySlotName?: ''
  loading?: boolean
  /* 对应已有属性的属性 */
  border?: boolean
  data?: Record<string, any>[]
  highlightCurrentRow?: boolean
  lazy?: boolean
  rowKey?: string
  stripe?: boolean
  /* 对应已有事件的属性 */
  cellClick?: (
    row?: Record<string, any>,
    column?: Column,
    cell?: any,
    event?: MouseEvent
  ) => void
  cellContextmenu?: (
    row?: Record<string, any>,
    column?: Column,
    cell?: any,
    event?: MouseEvent
  ) => void
  cellDblclick?: (
    row?: Record<string, any>,
    column?: Column,
    cell?: any,
    event?: MouseEvent
  ) => void
  cellMouseEnter?: (
    row?: Record<string, any>,
    column?: Column,
    cell?: any,
    event?: MouseEvent
  ) => void
  cellMouseLeave?: (
    row?: Record<string, any>,
    column?: Column,
    cell?: any,
    event?: MouseEvent
  ) => void
  currentChange?: (
    currentRow?: Record<string, any>,
    oldCurrentRow?: Record<string, any>
  ) => void
  expandChange?: (
    row?: Record<string, any>,
    expandedObject?: ExpandedObject
  ) => void
  filterChange?: (filters?: any) => void
  headerClick?: (column?: Column, event?: MouseEvent) => void
  headerContextmenu?: (column?: Column, event?: MouseEvent) => void
  headerDragend?: (
    newWidth?: number,
    oldWidth?: number,
    column?: Column,
    event?: MouseEvent
  ) => void
  rowClick?: (
    row?: Record<string, any>,
    column?: Column,
    event?: MouseEvent
  ) => void
  rowContextmenu?: (
    row?: Record<string, any>,
    column?: Column,
    event?: MouseEvent
  ) => void
  rowDblclick?: (
    row?: Record<string, any>,
    column?: Column,
    event?: MouseEvent
  ) => void
  select?: (
    selection?: Record<string, any>[],
    row?: Record<string, any>
  ) => void
  selectAll?: (selection?: Record<string, any>[]) => void
  selectChange?: (selection?: Record<string, any>[]) => void
  sortChange?: (sortObject?: SortObject) => void
}
/* 可传递的属性 */
type ProTableProps = Writable<Partial<TableProps>> & TableExtendedProps
/* 实例 */
type ProTableInstance = InstanceType<typeof Table>

export type {
  /* 其他 */
  ExpandedObject,
  RemoteSortColumn,
  SortObject,
  /* 属性 */
  TableProps,
  TableExtendedProps,
  ProTableProps,
  /* 实例 */
  TableInstance,
  ProTableInstance,
}
