import Progress from './progress.vue'
import type { Writable } from 'component-library-utils/types'
import type { ProgressInstance, ProgressProps } from 'element-plus'

/* 扩展的属性 */
type ProgressExtendedProps = {
  /* 新增的属性 */
  defaultSlotName?: string
}
/* 可传递的属性 */
type ProProgressProps = Writable<Partial<ProgressProps>> & ProgressExtendedProps
/* 实例 */
type ProProgressInstance = InstanceType<typeof Progress>

export type {
  /* 属性 */
  ProgressProps,
  ProgressExtendedProps,
  ProProgressProps,
  /* 实例 */
  ProgressInstance,
  ProProgressInstance,
}
