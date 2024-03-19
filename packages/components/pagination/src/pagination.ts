import Pagination from './pagination.vue'
import { ElPagination } from 'element-plus'
import type { Writable } from 'component-library-utils/types'
import type { PaginationProps } from 'element-plus'

/* 扩展的属性 */
type PaginationExtendedProps = {
  /* 新增的属性 */
  defaultSlotName?: string
  maxTotal?: number
  /* 对应已有属性的属性 */
  background?: boolean
  layout?: string
  pageSizes?: number[]
  total?: number
  /* 对应已有事件的属性 */
  currentChange?: (currentPage?: number) => void
  nextClick?: (oldCurrentPage?: number) => void
  prevClick?: (oldCurrentPage?: number) => void
  sizeChange?: (pageSize?: number) => void
}
/* 可传递的属性 */
type ProPaginationProps = Writable<Partial<PaginationProps>> &
  PaginationExtendedProps
/* 实例 */
type PaginationInstance = InstanceType<typeof ElPagination>
type ProPaginationInstance = InstanceType<typeof Pagination>

export type {
  /* 属性 */
  PaginationProps,
  PaginationExtendedProps,
  ProPaginationProps,
  /* 实例 */
  PaginationInstance,
  ProPaginationInstance,
}
