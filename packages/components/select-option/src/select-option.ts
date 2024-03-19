import SelectOption from './select-option.vue'
import { ElOption } from 'element-plus'
import type { Writable } from 'component-library-utils/types'

/* 已有的属性 */
type SelectOptionProps = {
  disabled: boolean
  label: string | number
  value: string | number | boolean | object
}
/* 扩展的属性 */
type SelectOptionExtendedProps = {
  /* 新增的属性 */
  contentSlotName?: string
  /* 对应已有属性的属性 */
  value?: string | number | boolean | object
}
/* 可传递的属性 */
type ProSelectOptionProps = Writable<Partial<SelectOptionProps>> &
  SelectOptionExtendedProps
/* 实例 */
type SelectOptionInstance = InstanceType<typeof ElOption>
type ProSelectOptionInstance = InstanceType<typeof SelectOption>

export type {
  /* 属性 */
  SelectOptionProps,
  SelectOptionExtendedProps,
  ProSelectOptionProps,
  /* 实例 */
  SelectOptionInstance,
  ProSelectOptionInstance,
}
