import Cascader from './cascader.vue'
import { cascaderProps } from 'element-plus'
import type { Arrayable, Writable } from 'component-library-utils/types'
import type { CascaderInstance } from 'element-plus'
import type { ExtractPropTypes } from 'vue'

/* 已有的属性 */
type CascaderProps = ExtractPropTypes<typeof cascaderProps>
/* 扩展的属性 */
type CascaderExtendedProps = {
  /* 新增的属性 */
  defaultSlotName?: string
  emptySlotName?: string
  /* 对应已有属性的属性 */
  clearable?: boolean
  filterable?: boolean
  placeholder?: string
  props?: Record<string, any>
  /* 对应已有事件的属性 */
  blur?: (event?: FocusEvent) => void
  change?: (value?: Arrayable<string> | Arrayable<number> | null) => void
  expandChange?: (value?: string[] | number[]) => void
  focus?: (event?: FocusEvent) => void
  removeTag?: (value?: string[] | number[]) => void
  visibleChange?: (visible?: boolean) => void
}
/* 可传递的属性 */
type ProCascaderProps = Writable<Partial<CascaderProps>> & CascaderExtendedProps
/* 实例 */
type ProCascaderInstance = InstanceType<typeof Cascader>

export type {
  /* 属性 */
  CascaderProps,
  CascaderExtendedProps,
  ProCascaderProps,
  /* 实例 */
  CascaderInstance,
  ProCascaderInstance,
}
