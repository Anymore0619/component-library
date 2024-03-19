import Tooltip from './tooltip.vue'
import type { Writable } from 'component-library-utils/types'
import type { TooltipInstance, ElTooltipProps } from 'element-plus'

/* 已有的属性 */
type TooltipProps = ElTooltipProps
/* 扩展的属性 */
type TooltipExtendedProps = {
  /* 新增的属性 */
  contentSlotName?: string
  defaultSlotName?: string
}
/* 可传递的属性 */
type ProTooltipProps = Writable<Partial<TooltipProps>> & TooltipExtendedProps
/* 实例 */
type ProTooltipInstance = InstanceType<typeof Tooltip>

export type {
  /* 属性 */
  TooltipProps,
  TooltipExtendedProps,
  ProTooltipProps,
  /* 实例 */
  TooltipInstance,
  ProTooltipInstance,
}
