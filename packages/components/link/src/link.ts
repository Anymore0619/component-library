import Link from './link.vue'
import type { Writable } from 'component-library-utils/types'
import type { LinkInstance, LinkProps } from 'element-plus'
import type { Component } from 'vue'

/* 扩展的属性 */
type LinkExtendedProps = {
  /* 新增的属性 */
  defaultSlotName?: string
  label?: string
  /* 对应已有属性的属性 */
  icon?: Component
  /* 对应已有事件的属性 */
  click?: (event?: MouseEvent) => void
}
/* 可传递的属性 */
type ProLinkProps = Writable<Partial<LinkProps>> & LinkExtendedProps
/* 实例 */
type ProLinkInstance = InstanceType<typeof Link>

export type {
  /* 属性 */
  LinkProps,
  LinkExtendedProps,
  ProLinkProps,
  /* 实例 */
  LinkInstance,
  ProLinkInstance,
}
