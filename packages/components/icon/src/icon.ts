import Icon from './icon.vue'
import type { Writable } from 'component-library-utils/types'
import type { IconInstance, IconProps } from 'element-plus'

/* 扩展的属性 */
type IconExtendedProps = {
  /* 新增的属性 */
  defaultSlotName?: string
  name?: string
  /* 对应已有事件的属性 */
  click?: (event?: MouseEvent) => void
}
/* 可传递的属性 */
type ProIconProps = Writable<Partial<IconProps>> & IconExtendedProps
/* 实例 */
type ProIconInstance = InstanceType<typeof Icon>

export type {
  /* 属性 */
  IconProps,
  IconExtendedProps,
  ProIconProps,
  /* 实例 */
  IconInstance,
  ProIconInstance,
}
