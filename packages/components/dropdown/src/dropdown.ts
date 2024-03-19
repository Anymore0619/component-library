import Dropdown from './dropdown.vue'
import { ElDropdown, dropdownProps } from 'element-plus'
import type { ProDropdownItemProps } from '../../dropdown-item'
import type { Writable } from 'component-library-utils/types'
import type { ExtractPropTypes } from 'vue'

/* 已有的属性 */
type DropdownProps = ExtractPropTypes<typeof dropdownProps>
/* 扩展的属性 */
type DropdownExtendedProps = {
  /* 新增的属性 */
  defaultSlotName?: string
  dropdownSlotName?: string
  items?: ProDropdownItemProps[]
  /* 对应已有事件的属性 */
  click?: (event?: MouseEvent) => void
  command?: (command?: string | number | object) => void
  visibleChange?: (visible?: boolean) => void
}
/* 可传递的属性 */
type ProDropdownProps = Writable<Partial<DropdownProps>> & DropdownExtendedProps
/* 实例 */
type DropdownInstance = InstanceType<typeof ElDropdown>
type ProDropdownInstance = InstanceType<typeof Dropdown>

export type {
  /* 属性 */
  DropdownProps,
  DropdownExtendedProps,
  ProDropdownProps,
  /* 实例 */
  DropdownInstance,
  ProDropdownInstance,
}
