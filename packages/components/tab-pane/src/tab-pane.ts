import TabPane from './tab-pane.vue'
import type { Writable } from 'component-library-utils/types'
import type { TabPaneInstance, TabPaneProps } from 'element-plus'

/* 扩展的属性 */
type TabPaneExtendedProps = {
  /* 新增的属性 */
  contentSlotName?: string
  hidden?: boolean
  labelSlotName?: string
}
/* 可传递的属性 */
type ProTabPaneProps = Writable<Partial<TabPaneProps>> & TabPaneExtendedProps
/* 实例 */
type ProTabPaneInstance = InstanceType<typeof TabPane>

export type {
  /* 属性 */
  TabPaneProps,
  TabPaneExtendedProps,
  ProTabPaneProps,
  /* 实例 */
  TabPaneInstance,
  ProTabPaneInstance,
}
