import RadioGroup from './radio-group.vue'
import type { ProRadioProps } from '../../radio'
import type { Writable } from 'component-library-utils/types'
import type { RadioGroupInstance, RadioGroupProps } from 'element-plus'

/* 扩展的属性 */
type RadioGroupExtendedProps = {
  /* 新增的属性 */
  defaultSlotName?: string
  radios?: ProRadioProps[]
  type?: 'radio' | 'radioButton'
  /* 对应已有事件的属性 */
  change?: (value?: string | number | boolean) => void
}
/* 可传递的属性 */
type ProRadioGroupProps = Writable<Partial<RadioGroupProps>> &
  RadioGroupExtendedProps
/* 实例 */
type ProRadioGroupInstance = InstanceType<typeof RadioGroup>

export type {
  /* 属性 */
  RadioGroupProps,
  RadioGroupExtendedProps,
  ProRadioGroupProps,
  /* 实例 */
  RadioGroupInstance,
  ProRadioGroupInstance,
}
