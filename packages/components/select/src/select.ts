import Select from './select.vue'
import { ElSelect } from 'element-plus'
import type { ProSelectOptionProps } from '../../select-option'
import type { TagType } from '../../tag'
import type { Writable } from 'component-library-utils/types'
import type { Component } from 'vue'

/* 已有的属性 */
type SelectProps = {
  allowCreate: boolean
  autocomplete: string
  automaticDropdown: boolean
  clearable: boolean
  clearIcon: string | Component
  collapseTags: boolean
  collapseTagsTooltip: boolean
  defaultFirstOption: boolean
  disabled: boolean
  effect: string
  filterable: boolean
  filterMethod: () => void
  fitInputWidth: boolean
  loading: boolean
  loadingText: string
  maxCollapseTags: number
  modelValue: string | number | boolean | Record<string, any> | []
  multiple: boolean
  multipleLimit: number
  name: string
  noDataText: string
  noMatchText: string
  persistent: boolean
  placeholder: string
  placement:
    | 'top'
    | 'top-start'
    | 'top-end'
    | 'bottom'
    | 'bottom-start'
    | 'bottom-end'
    | 'left'
    | 'left-start'
    | 'left-end'
    | 'right'
    | 'right-start'
    | 'right-end'
  popperAppendToBody: boolean
  popperClass: string
  remote: boolean
  remoteMethod: () => void
  remoteShowSuffix: boolean
  reserveKeyword: boolean
  size: 'large' | 'default' | 'small'
  prefixIcon: string | Component
  prefixTransition: boolean
  tagType: TagType
  teleported: boolean
  validateEvent: boolean
  valueKey: string
}
/* 扩展的属性 */
type SelectExtendedProps = {
  /* 新增的属性 */
  defaultSlotName?: string
  emptySlotName?: string
  options?: ProSelectOptionProps[]
  prefixSlotName?: string
  /* 对应已有属性的属性 */
  clearable?: boolean
  filterable?: boolean
  /* 对应已有事件的属性 */
  blur?: (event?: FocusEvent) => void
  change?: (value?: string | number | boolean | object | any[]) => void
  clear?: () => void
  focus?: (event?: FocusEvent) => void
  removeTag?: (value?: string | number | boolean | object | any[]) => void
  visibleChange?: (visible?: boolean) => void
}
/* 可传递的属性 */
type ProSelectProps = Writable<Partial<SelectProps>> & SelectExtendedProps
/* 实例 */
type SelectInstance = InstanceType<typeof ElSelect>
type ProSelectInstance = InstanceType<typeof Select>

export type {
  /* 属性 */
  SelectProps,
  SelectExtendedProps,
  ProSelectProps,
  /* 实例 */
  SelectInstance,
  ProSelectInstance,
}
