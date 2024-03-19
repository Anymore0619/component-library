import TimePicker from './time-picker.vue'
import { ElTimePicker } from 'element-plus'
import type { Writable } from 'component-library-utils/types'
import type { TimePickerDefaultProps } from 'element-plus'

/* 已有的属性 */
type TimePickerProps = TimePickerDefaultProps
/* 扩展的属性 */
type TimePickerExtendedProps = {
  /* 对应已有属性的属性 */
  clearable?: boolean
  endPlaceholder?: string
  placeholder?: string
  startPlaceholder?: string
  /* 对应已有事件的属性 */
  blur?: (event?: FocusEvent) => void
  change?: (
    value?:
      | string
      | number
      | Date
      | [string, string]
      | [number, number]
      | [Date, Date]
  ) => void
  focus?: (event?: FocusEvent) => void
  visibleChange?: (visible?: boolean) => void
}
/* 可传递的属性 */
type ProTimePickerProps = Writable<Partial<TimePickerProps>> &
  TimePickerExtendedProps
/* 实例 */
type TimePickerInstance = InstanceType<typeof ElTimePicker>
type ProTimePickerInstance = InstanceType<typeof TimePicker>

export type {
  /* 属性 */
  TimePickerProps,
  TimePickerExtendedProps,
  ProTimePickerProps,
  /* 实例 */
  TimePickerInstance,
  ProTimePickerInstance,
}
