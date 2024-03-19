import InputNumber from './input-number.vue'
import type { Writable } from 'component-library-utils/types'
import type { InputNumberInstance, InputNumberProps } from 'element-plus'

/* 扩展的属性 */
type InputNumberExtendedProps = {
  /* 新增的属性 */
  align?: 'left' | 'center' | 'right'
  keyupEnter?: (event?: KeyboardEvent) => void
  /* 对应已有属性的属性 */
  controls?: boolean
  /* 对应已有事件的属性 */
  blur?: (event?: FocusEvent) => void
  change?: (currentValue?: number, oldValue?: number) => void
  focus?: (event?: FocusEvent) => void
}
/* 可传递的属性 */
type ProInputNumberProps = Writable<Partial<InputNumberProps>> &
  InputNumberExtendedProps
/* 实例 */
type ProInputNumberInstance = InstanceType<typeof InputNumber>

export type {
  /* 属性 */
  InputNumberProps,
  InputNumberExtendedProps,
  ProInputNumberProps,
  /* 实例 */
  InputNumberInstance,
  ProInputNumberInstance,
}
