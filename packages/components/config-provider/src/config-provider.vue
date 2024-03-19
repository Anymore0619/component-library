<template>
  <el-config-provider v-bind="$attrs">
    <slot />
  </el-config-provider>
</template>

<script lang="ts">
export default {
  name: 'ProConfigProvider',
  inheritAttrs: false,
}
</script>

<script lang="ts" setup>
import { ElConfigProvider } from 'element-plus'
import { ref, provide, inject } from 'vue'
import type {
  ConfigProviderExtendedProps,
  ConfigProviderInstance,
} from './config-provider'
import type { ProFormDialogInjects } from '../../form-dialog'
import type { ProSearchTableInjects } from '../../search-table'
import type { ProSearchTableDialogInjects } from '../../search-table-dialog'
import type { ProTreeInjects } from '../../tree'
import type { ProVirtualizedTreeInjects } from '../../virtualized-tree'

/* 属性 */
const $props = defineProps<ConfigProviderExtendedProps>()
/* 依赖 */
provide('proFormDialogInjects', {
  ...inject<ProFormDialogInjects>('proFormDialogInjects', {}),
  ...$props.proFormDialogInjects,
})
provide('proSearchTableDialogInjects', {
  ...inject<ProSearchTableDialogInjects>('proSearchTableDialogInjects', {}),
  ...$props.proSearchTableDialogInjects,
})
provide('proSearchTableInjects', {
  ...inject<ProSearchTableInjects>('proSearchTableInjects', {}),
  ...$props.proSearchTableInjects,
})
provide('proTreeInjects', {
  ...inject<ProTreeInjects>('proTreeInjects', {}),
  ...$props.proTreeInjects,
})
provide('proVirtualizedTreeInjects', {
  ...inject<ProVirtualizedTreeInjects>('proVirtualizedTreeInjects', {}),
  ...$props.proVirtualizedTreeInjects,
})
/* 实例 */
const $configProviderRef = ref<ConfigProviderInstance>()

defineExpose({
  /* 实例 */
  ref: $configProviderRef,
})
</script>
