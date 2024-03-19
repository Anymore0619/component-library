import Radio from './radio.vue'
import type { Writable } from 'component-library-utils/types'
import type { RadioInstance, RadioProps } from 'element-plus'

/* 扩展的属性 */
type RadioExtendedProps = {
  /* 新增的属性 */
  contentSlotName?: string
  hidden?: boolean
  type?: 'radio' | 'radioButton'
  /* 对应已有属性的属性  */
  label?: string
  /* 对应已有事件的属性 */
  change?: (value?: string | number | boolean) => void
}
/* 可传递的属性 */
type ProRadioProps = Writable<Partial<RadioProps>> & RadioExtendedProps
/* 实例 */
type ProRadioInstance = InstanceType<typeof Radio>

export type {
  /* 属性 */
  RadioProps,
  RadioExtendedProps,
  ProRadioProps,
  /* 实例 */
  RadioInstance,
  ProRadioInstance,
}
