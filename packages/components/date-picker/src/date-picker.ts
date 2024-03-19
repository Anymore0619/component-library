import DatePicker from './date-picker.vue'
import { ElDatePicker } from 'element-plus'
import type { Writable } from 'component-library-utils/types'
import type { TimePickerDefaultProps } from 'element-plus'
import type { DatePickerProps as DatePickerDefaultProps } from 'element-plus/es/components/date-picker/src/props/date-picker'

/* 已有的属性 */
type DatePickerProps = DatePickerDefaultProps & TimePickerDefaultProps
/* 扩展的属性 */
type DatePickerExtendedProps = {
  /* 新增的属性 */
  defaultSlotName?: string
  rangeSeparatorSlotName?: string
  /* 对应已有属性的属性 */
  clearable?: boolean
  defaultTime?: Date | [Date, Date]
  endPlaceholder?: string
  placeholder?: string
  startPlaceholder?: string
  type?:
    | 'year'
    | 'month'
    | 'date'
    | 'dates'
    | 'datetime'
    | 'week'
    | 'datetimerange'
    | 'daterange'
    | 'monthrange'
  /* 对应已有事件的属性 */
  blur?: (event?: FocusEvent) => void
  calendarChange?: (value?: [Date, Date | null]) => void
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
  panelChange?: (
    date?: Date | [Date, Date],
    mode?: 'month' | 'year',
    view?: 'date' | 'month' | 'year'
  ) => void
  visibleChange?: (visible?: boolean) => void
}
/* 可传递的属性 */
type ProDatePickerProps = Writable<Partial<DatePickerProps>> &
  DatePickerExtendedProps
/* 实例 */
type DatePickerInstance = InstanceType<typeof ElDatePicker>
type ProDatePickerInstance = InstanceType<typeof DatePicker>

export type {
  /* 属性 */
  DatePickerProps,
  DatePickerExtendedProps,
  ProDatePickerProps,
  /* 实例 */
  DatePickerInstance,
  ProDatePickerInstance,
}
