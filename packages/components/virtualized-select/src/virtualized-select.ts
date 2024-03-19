import VirtualizedSelect from './virtualized-select.vue'
import { ElSelectV2 } from 'element-plus'
import type { Writable } from 'component-library-utils/types'
import type { SelectProps as selectProps } from 'element-plus/es/components/select-v2/src/defaults'
import type { OptionType } from 'element-plus/es/components/select-v2/src/select.types.ts'
import type { ExtractPropTypes } from 'vue'

/* 已有的属性 */
type VirtualizedSelectProps = ExtractPropTypes<typeof selectProps>
/* 扩展的属性 */
type VirtualizedSelectExtendedProps = {
  /* 新增的属性 */
  defaultSlotName?: string
  emptySlotName?: string
  prefixSlotName?: string
  /* 对应已有属性的属性 */
  clearable?: boolean
  filterable?: boolean
  options?: OptionType[]
  placeholder?: string
  /* 对应已有事件的属性 */
  blur?: (event?: FocusEvent) => void
  change?: (value?: string | number | boolean | object | any[]) => void
  clear?: () => void
  focus?: (event?: FocusEvent) => void
  removeTag?: (value?: string | number | boolean | object | any[]) => void
  visibleChange?: (visible?: boolean) => void
}
/* 可传递的属性 */
type ProVirtualizedSelectProps = Writable<Partial<VirtualizedSelectProps>> &
  VirtualizedSelectExtendedProps
/* 实例 */
type VirtualizedSelectInstance = InstanceType<typeof ElSelectV2>
type ProVirtualizedSelectInstance = InstanceType<typeof VirtualizedSelect>

export type {
  /* 属性 */
  VirtualizedSelectProps,
  VirtualizedSelectExtendedProps,
  ProVirtualizedSelectProps,
  /* 实例 */
  VirtualizedSelectInstance,
  ProVirtualizedSelectInstance,
}
