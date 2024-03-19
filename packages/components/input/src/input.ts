import Input from './input.vue'
import type { Writable } from 'component-library-utils/types'
import type { InputInstance, InputProps } from 'element-plus'

/* 扩展的属性 */
type InputExtendedProps = {
  /* 新增的属性 */
  appendSlotName?: string
  keyupEnter?: (event?: KeyboardEvent) => void
  prefixSlotName?: string
  prependSlotName?: string
  suffixSlotName?: string
  /* 对应已有属性的属性 */
  clearable?: boolean
  placeholder?: string
  /* 对应已有事件的属性 */
  blur?: (event?: FocusEvent) => void
  change?: (value?: string | number) => void
  clear?: () => void
  focus?: (event?: FocusEvent) => void
  input?: (event?: string | number) => void
}
/* 可传递的属性 */
type ProInputProps = Writable<Partial<Omit<InputProps, 'inputStyle'>>> &
  InputExtendedProps
/* 实例 */
type ProInputInstance = InstanceType<typeof Input>

export type {
  /* 属性 */
  InputProps,
  InputExtendedProps,
  ProInputProps,
  /* 实例 */
  InputInstance,
  ProInputInstance,
}
