import TableColumn from './table-column.vue'
import tableColumnProps from 'element-plus/es/components/table/src/table-column/defaults'
import type { ProIconProps } from '../../icon'
import type { TagType } from '../../tag'
import type { ProTooltipProps } from '../../tooltip'
import type { Writable } from 'component-library-utils/types'
import type { TableColumnCtx, TableColumnInstance } from 'element-plus'
import type { ExtractPropTypes, VNode } from 'vue'

/* 列 */
type Column = TableColumnCtx<Record<string, any>>
/* 列操作 */
type ColumnAction = {
  click?: (row?: Record<string, any>) => void
  hidden?: (row?: Record<string, any>) => boolean
  label?: string
}
/* 列对象 */
type ColumnObject = {
  column?: Column
  $index?: number
}
/* 远程排序规则 */
type RemoteSortOrder = 'asc' | 'desc' | ''
/* 已有的属性 */
type TableColumnProps = ExtractPropTypes<typeof tableColumnProps>
/* 扩展的属性 */
type TableColumnExtendedProps = {
  /* 新增的属性 */
  actions?: ColumnAction[]
  childColumns?: ProTableColumnProps[]
  contentSlotName?: string
  dict?: Record<string, any>[]
  dictMapping?: {
    label?: string
    value?: string
  }
  displayable?: boolean
  displayed?: boolean
  headerSlotName?: string
  hidden?: boolean
  maxActionNumber?: number
  noValueText?: string
  remoteSortable?: boolean
  remoteSortIndex?: number
  remoteSortOrder?: RemoteSortOrder
  showTip?: boolean
  tagType?: (
    row?: Record<string, any>,
    column?: Column,
    cellValue?: any,
    index?: number
  ) => TagType
  tipIconProps?: ProIconProps
  tipTooltipProps?: Omit<ProTooltipProps, 'popperStyle' | 'style'>
  /* 对应已有属性的属性 */
  formatter?: (
    row?: Record<string, any>,
    column?: Column,
    cellValue?: any,
    index?: number
  ) => VNode | string
  label?: string
  prop?: string
  renderHeader?: (columnObject?: ColumnObject) => VNode
  sortable?: boolean | string
  type?: 'action' | 'expand' | 'group' | 'index' | 'selection' | 'tag'
}
/* 可传递的属性 */
type ProTableColumnProps = Writable<Partial<TableColumnProps>> &
  TableColumnExtendedProps
/* 实例 */
type ProTableColumnInstance = InstanceType<typeof TableColumn>

export type {
  /* 其他 */
  Column,
  ColumnAction,
  ColumnObject,
  RemoteSortOrder,
  /* 属性 */
  TableColumnProps,
  TableColumnExtendedProps,
  ProTableColumnProps,
  /* 实例 */
  TableColumnInstance,
  ProTableColumnInstance,
}
