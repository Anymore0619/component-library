import DropdownItem from './dropdown-item.vue'
import { ElDropdownItem, dropdownItemProps } from 'element-plus'
import type { Writable } from 'component-library-utils/types'
import type { ExtractPropTypes } from 'vue'

/* 已有的属性 */
type DropdownItemProps = ExtractPropTypes<typeof dropdownItemProps>
/* 扩展的属性 */
type DropdownItemExtendedProps = {
  /* 新增的属性 */
  contentSlotName?: string
  hidden?: boolean
  label?: string
}
/* 可传递的属性 */
type ProDropdownItemProps = Writable<Partial<DropdownItemProps>> &
  DropdownItemExtendedProps
/* 实例 */
type DropdownItemInstance = InstanceType<typeof ElDropdownItem>
type ProDropdownItemInstance = InstanceType<typeof DropdownItem>

export type {
  /* 属性 */
  DropdownItemProps,
  DropdownItemExtendedProps,
  ProDropdownItemProps,
  /* 实例 */
  DropdownItemInstance,
  ProDropdownItemInstance,
}
