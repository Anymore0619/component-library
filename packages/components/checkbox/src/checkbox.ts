import Checkbox from './checkbox.vue'
import type { Writable } from 'component-library-utils/types'
import type { CheckboxInstance, CheckboxProps } from 'element-plus'

/* 扩展的属性 */
type CheckboxExtendedProps = {
  /* 新增的属性 */
  contentSlotName?: string
  hidden?: boolean
  /* 对应已有属性的属性 */
  label?: string
  /* 对应已有事件的属性 */
  change?: (value?: string | number | boolean) => void
}
/* 可传递的属性 */
type ProCheckboxProps = Writable<Partial<CheckboxProps>> & CheckboxExtendedProps
/* 实例 */
type ProCheckboxInstance = InstanceType<typeof Checkbox>

export type {
  /* 属性 */
  CheckboxProps,
  CheckboxExtendedProps,
  ProCheckboxProps,
  /* 实例 */
  CheckboxInstance,
  ProCheckboxInstance,
}
