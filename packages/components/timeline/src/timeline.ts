import Timeline from './timeline.vue'
import type { ProTimelineItemProps } from '../../timeline-item'
import type { TimelineInstance } from 'element-plus'

/* 扩展的属性 */
type TimelineExtendedProps = {
  /* 新增的属性 */
  defaultSlotName?: string
  items?: ProTimelineItemProps[]
}
/* 可传递的属性 */
type ProTimelineProps = TimelineExtendedProps
/* 实例 */
type ProTimelineInstance = InstanceType<typeof Timeline>

export type {
  /* 属性 */
  // TimelineProps,
  TimelineExtendedProps,
  ProTimelineProps,
  /* 实例 */
  TimelineInstance,
  ProTimelineInstance,
}
