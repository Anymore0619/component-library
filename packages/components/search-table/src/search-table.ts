import SearchTable from './search-table.vue'
import type { ProFormProps } from '../../form'
import type { ProFormItemProps } from '../../form-item'
import type { ProPaginationProps } from '../../pagination'
import type { ProTableProps } from '../../table'
import type { ProTableColumnProps } from '../../table-column'

/* 组件内可展示表格列的属性 */
type DisplayableTableColumnProps = SearchTableTableColumnProps & {
  index?: number
}
/* 组件内表单的属性 */
type SearchTableFormProps = ProFormProps
/* 组件内分页的属性 */
type SearchTablePaginationProps = ProPaginationProps & {
  props?: {
    currentPage?: string
    pageSize?: string
  }
}
/* 组件内表格列的属性 */
type SearchTableTableColumnProps = ProTableColumnProps & {
  formItemProps?: ProFormItemProps
  hideInForm?: boolean
}
/* 组件内表格的属性 */
type SearchTableTableProps = Omit<ProTableProps, 'columns'> & {
  columns?: SearchTableTableColumnProps[]
  showToolbar?: boolean
  toolbarHeight?: number
}
/* 扩展的属性 */
type SearchTableExtendedProps = {
  /* 新增的 v-model 属性 */
  loading?: boolean
  /* 新增的属性 */
  afterRequest?: () => void
  beforeRequest?: (params?: any) => void
  customRequestParams?: (params?: any) => any
  formProps?: SearchTableFormProps
  hideForm?: boolean
  hideTable?: boolean
  hidePagination?: boolean
  onRequestComplete?: (response?: any, params?: any) => void
  onRequestError?: (error?: any) => void
  onRequestSuccess?: (response?: any, params?: any) => void
  paginationProps?: SearchTablePaginationProps
  requestApi?: (params?: any) => Promise<any>
  responseMapping?: (
    response?: any,
    params?: any
  ) => {
    data?: any
    total?: number
  } | void
  tableProps?: SearchTableTableProps
}
/* 可传递的属性 */
type ProSearchTableProps = SearchTableExtendedProps
/* 可注入的属性 */
type ProSearchTableInjects = {
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
  tableProps?: {
    rowKey?: string
    showToolbar?: boolean
  }
}
/* 实例 */
type ProSearchTableInstance = InstanceType<typeof SearchTable>

export type {
  /* 属性 */
  DisplayableTableColumnProps,
  SearchTableFormProps,
  SearchTablePaginationProps,
  SearchTableTableColumnProps,
  SearchTableTableProps,
  SearchTableExtendedProps,
  ProSearchTableProps,
  ProSearchTableInjects,
  /* 实例 */
  ProSearchTableInstance,
}
