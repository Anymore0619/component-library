import Popover from './popover.vue'
import type { Writable } from 'component-library-utils/types'
import type { PopoverInstance, PopoverProps } from 'element-plus'

/* 扩展的属性 */
type PopoverExtendedProps = {
  /* 新增的属性 */
  defaultSlotName?: string
  referenceSlotName?: string
  /* 对应已有事件的属性 */
  afterEnter?: () => void
  afterLeave?: () => void
  beforeEnter?: () => void
  beforeLeave?: () => void
  hide?: () => void
  show?: () => void
}
/* 可传递的属性 */
type ProPopoverProps = Writable<Partial<PopoverProps>> & PopoverExtendedProps
/* 实例 */
type ProPopoverInstance = InstanceType<typeof Popover>

export type {
  /* 属性 */
  PopoverProps,
  PopoverExtendedProps,
  ProPopoverProps,
  /* 实例 */
  PopoverInstance,
  ProPopoverInstance,
}
