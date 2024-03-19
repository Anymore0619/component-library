import ConfigProvider from './config-provider.vue'
import type { ProFormDialogInjects } from '../../form-dialog'
import type { ProSearchTableDialogInjects } from '../../search-table-dialog'
import type { ProSearchTableInjects } from '../../search-table'
import type { ProTreeInjects } from '../../tree'
import type { ProVirtualizedTreeInjects } from '../../virtualized-tree'
import type { Writable } from 'component-library-utils/types'
import type { ConfigProviderProps, ConfigProviderInstance } from 'element-plus'

/* 扩展的属性 */
type ConfigProviderExtendedProps = {
  /* 新增的属性 */
  proFormDialogInjects?: ProFormDialogInjects
  proSearchTableDialogInjects?: ProSearchTableDialogInjects
  proSearchTableInjects?: ProSearchTableInjects
  proTreeInjects?: ProTreeInjects
  proVirtualizedTreeInjects?: ProVirtualizedTreeInjects
}
/* 可传递的属性 */
type ProConfigProviderProps = Writable<Partial<ConfigProviderProps>> &
  ConfigProviderExtendedProps
/* 实例 */
type ProConfigProviderInstance = InstanceType<typeof ConfigProvider>

export type {
  /* 属性 */
  ConfigProviderProps,
  ConfigProviderExtendedProps,
  ProConfigProviderProps,
  /* 实例 */
  ConfigProviderInstance,
  ProConfigProviderInstance,
}
