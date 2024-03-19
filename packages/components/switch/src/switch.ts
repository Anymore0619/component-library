import Switch from './switch.vue'
import type { Writable } from 'component-library-utils/types'
import type { SwitchInstance, SwitchProps } from 'element-plus'
import type { Component } from 'vue'

/* 扩展的属性 */
type SwitchExtendedProps = {
  /* 对应已有属性的属性 */
  activeIcon?: Component
  inactiveIcon?: Component
  /* 对应已有事件的属性 */
  change?: (value?: string | number | boolean) => void
}
/* 可传递的属性 */
type ProSwitchProps = Writable<Partial<SwitchProps>> & SwitchExtendedProps
/* 实例 */
type ProSwitchInstance = InstanceType<typeof Switch>

export type {
  /* 属性 */
  SwitchProps,
  SwitchExtendedProps,
  ProSwitchProps,
  /* 实例 */
  SwitchInstance,
  ProSwitchInstance,
}
