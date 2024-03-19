import Calendar from './calendar.vue'
import { ElCalendar } from 'element-plus'
import type { Writable } from 'component-library-utils/types'
import type { CalendarProps } from 'element-plus'

/* 扩展的属性 */
type CalendarExtendedProps = {
  /* 新增的属性 */
  change?: (value?: Date) => void
  dateCellSlotName?: string
  headerSlotName?: string
  /* 对应已有 v-model 属性的属性 */
  modelValue?: Date
}
/* 可传递的属性 */
type ProCalendarProps = Writable<Partial<CalendarProps>> & CalendarExtendedProps
/* 实例 */
type CalendarInstance = InstanceType<typeof ElCalendar>
type ProCalendarInstance = InstanceType<typeof Calendar>

export type {
  /* 属性 */
  CalendarProps,
  CalendarExtendedProps,
  ProCalendarProps,
  /* 实例 */
  CalendarInstance,
  ProCalendarInstance,
}
