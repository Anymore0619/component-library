import Button from './button.vue'
import type { Writable } from 'component-library-utils/types'
import type { ButtonInstance, ButtonProps } from 'element-plus'
import type { Component } from 'vue'

/* 扩展的属性 */
type ButtonExtendedProps = {
  /* 新增的属性 */
  defaultSlotName?: string
  iconSlotName?: string
  label?: string
  loadingSlotName?: string
  /* 对应已有属性的属性 */
  circle?: boolean
  icon?: Component
  /* 对应已有事件的属性 */
  click?: (event?: MouseEvent) => void
}
/* 可传递的属性 */
type ProButtonProps = Writable<Partial<ButtonProps>> & ButtonExtendedProps
/* 实例 */
type ProButtonInstance = InstanceType<typeof Button>

export type {
  /* 属性 */
  ButtonProps,
  ButtonExtendedProps,
  ProButtonProps,
  /* 实例 */
  ButtonInstance,
  ProButtonInstance,
}
