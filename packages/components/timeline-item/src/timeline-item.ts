import TimelineItem from './timeline-item.vue'
import type { Writable } from 'component-library-utils/types'
import type { TimelineItemInstance, TimelineItemProps } from 'element-plus'

/* 扩展的属性 */
type TimelineItemExtendedProps = {
  /* 新增的属性 */
  contentSlotName?: string
  dotSlotName?: string
}
/* 可传递的属性 */
type ProTimelineItemProps = Writable<Partial<TimelineItemProps>> &
  TimelineItemExtendedProps
/* 实例 */
type ProTimelineItemInstance = InstanceType<typeof TimelineItem>

export type {
  /* 属性 */
  TimelineItemProps,
  TimelineItemExtendedProps,
  ProTimelineItemProps,
  /* 实例 */
  TimelineItemInstance,
  ProTimelineItemInstance,
}
