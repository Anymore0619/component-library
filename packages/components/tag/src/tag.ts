import Tag from './tag.vue'
import type { Writable } from 'component-library-utils/types'
import type { TagInstance, TagProps } from 'element-plus'

/* 标签类型 */
type TagType = 'success' | 'info' | 'warning' | 'danger' | ''
/* 扩展的属性 */
type TagExtendedProps = {
  /* 新增的属性 */
  defaultSlotName?: string
  label?: string
  /* 对应已有属性的属性 */
  disableTransitions?: boolean
  /* 对应已有事件的属性 */
  click?: (event?: MouseEvent) => void
  close?: (event?: MouseEvent) => void
}
/* 可传递的属性 */
type ProTagProps = Writable<Partial<TagProps>> & TagExtendedProps
/* 实例 */
type ProTagInstance = InstanceType<typeof Tag>

export type {
  /* 其他 */
  TagType,
  /* 属性 */
  TagProps,
  TagExtendedProps,
  ProTagProps,
  /* 实例 */
  TagInstance,
  ProTagInstance,
}
