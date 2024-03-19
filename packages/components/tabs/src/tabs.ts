import Tabs from './tabs.vue'
import { ElTabs } from 'element-plus'
import type { ProTabPaneProps } from '../../tab-pane'
import type { Writable } from 'component-library-utils/types'
import type { TabsPaneContext, TabsProps } from 'element-plus'
import type { Slots } from 'vue'

/* 扩展的属性 */
type TabsExtendedProps = {
  /* 新增的属性 */
  defaultSlotName?: string
  disabled?: boolean
  panes?: ProTabPaneProps[]
  /* 对应已有事件的属性 */
  edit?: (name?: string | number, action?: 'add' | 'remove') => void
  tabAdd?: () => void
  tabChange?: (name?: string | number) => void
  tabClick?: (
    pane?: Omit<TabsPaneContext, 'slots'> & { slots: Slots },
    event?: Event
  ) => void
  tabRemove?: (name?: string | number) => void
}
/* 可传递的属性 */
type ProTabsProps = Writable<Partial<TabsProps>> & TabsExtendedProps
/* 实例 */
type TabsInstance = InstanceType<typeof ElTabs>
type ProTabsInstance = InstanceType<typeof Tabs>

export type {
  /* 属性 */
  TabsProps,
  TabsExtendedProps,
  ProTabsProps,
  /* 实例 */
  TabsInstance,
  ProTabsInstance,
}
