import CheckboxGroup from './checkbox-group.vue'
import type { ProButtonProps } from '../../button'
import type { ProCheckboxProps } from '../../checkbox'
import type { ProInputProps } from '../../input'
import type { Writable } from 'component-library-utils/types'
import type { CheckboxGroupInstance, CheckboxGroupProps } from 'element-plus'

/* 扩展的属性 */
type CheckboxGroupExtendedProps = {
  /* 新增的 v-model 属性 */
  checkboxes?: ProCheckboxProps[]
  /* 新增的属性 */
  addable?: boolean
  addButtonProps?: ProButtonProps
  addInputProps?: ProInputProps
  defaultSlotName?: string
  /* 对应已有事件的属性 */
  change?: (value?: string[] | number[]) => void
}
/* 可传递的属性 */
type ProCheckboxGroupProps = Writable<Partial<CheckboxGroupProps>> &
  CheckboxGroupExtendedProps
/* 实例 */
type ProCheckboxGroupInstance = InstanceType<typeof CheckboxGroup>

export type {
  /* 属性 */
  CheckboxGroupProps,
  CheckboxGroupExtendedProps,
  ProCheckboxGroupProps,
  /* 实例 */
  CheckboxGroupInstance,
  ProCheckboxGroupInstance,
}
