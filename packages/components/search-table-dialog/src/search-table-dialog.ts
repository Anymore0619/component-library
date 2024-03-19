import SearchTableDialog from './search-table-dialog.vue'
import type { ProDialogProps } from '../../dialog'
import type {
  ProSearchTableProps,
  SearchTableFormProps,
  SearchTablePaginationProps,
  SearchTableTableColumnProps,
  SearchTableTableProps,
} from '../../search-table'

/* 组件内弹窗的属性 */
type SearchTableDialogDialogProps = ProDialogProps
/* 组件内搜索表格的属性 */
type SearchTableDialogSearchTableProps = ProSearchTableProps
/* 组件内搜索表格表单的属性 */
type SearchTableDialogSearchTableFormProps = SearchTableFormProps
/* 组件内搜索表格分页的属性 */
type SearchTableDialogSearchTablePaginationProps = SearchTablePaginationProps
/* 组件内搜索表格表格列的属性 */
type SearchTableDialogSearchTableTableColumnProps = SearchTableTableColumnProps
/* 组件内搜索表格表格的属性 */
type SearchTableDialogSearchTableTableProps = SearchTableTableProps
/* 扩展的属性 */
type SearchTableDialogExtendedProps = {
  /* 新增的 v-model 属性 */
  loading?: boolean
  show?: boolean
  /* 新增的属性 */
  businessType?: string
  dialogProps?: SearchTableDialogDialogProps
  searchTableProps?: SearchTableDialogSearchTableProps
}
/* 可传递的属性 */
type ProSearchTableDialogProps = SearchTableDialogExtendedProps
/* 可注入的属性 */
type ProSearchTableDialogInjects = {
  searchTableProps?: {
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
}
/* 实例 */
type ProSearchTableDialogInstance = InstanceType<typeof SearchTableDialog>

export type {
  /* 属性 */
  SearchTableDialogDialogProps,
  SearchTableDialogSearchTableProps,
  SearchTableDialogSearchTableFormProps,
  SearchTableDialogSearchTablePaginationProps,
  SearchTableDialogSearchTableTableColumnProps,
  SearchTableDialogSearchTableTableProps,
  SearchTableDialogExtendedProps,
  ProSearchTableDialogProps,
  ProSearchTableDialogInjects,
  /* 实例 */
  ProSearchTableDialogInstance,
}
