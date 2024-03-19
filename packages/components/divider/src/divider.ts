import Divider from './divider.vue'
import type { Writable } from 'component-library-utils/types'
import type { DividerInstance, DividerProps } from 'element-plus'

/* 扩展的属性 */
type DividerExtendedProps = {
  /* 新增的属性 */
  defaultSlotName?: string
}
/* 可传递的属性 */
type ProDividerProps = Writable<Partial<DividerProps>> & DividerExtendedProps
/* 实例 */
type ProDividerInstance = InstanceType<typeof Divider>

export type {
  /* 属性 */
  DividerProps,
  DividerExtendedProps,
  ProDividerProps,
  /* 实例 */
  DividerInstance,
  ProDividerInstance,
}
