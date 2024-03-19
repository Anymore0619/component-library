<template>
  <el-select-v2
    ref="$virtualizedSelectRef"
    class="pro-virtualized-select"
    v-bind="$attrs"
    v-on="$props"
    :clearable="$defaultClearable"
    :filterable="$defaultFilterable"
    :options="$defaultOptions"
    :placeholder="$defaultPlaceholder"
  >
    <template
      v-for="$virtualizedSelectFilteredSlotName in $virtualizedSelectFilteredSlotNames"
      :key="$virtualizedSelectFilteredSlotName"
      #[$virtualizedSelectFilteredSlotName]="scope"
    >
      <slot
        v-bind="scope"
        :key="$virtualizedSelectFilteredSlotName"
        :name="getSlotName($props, $slots, $virtualizedSelectFilteredSlotName)"
      />
    </template>
  </el-select-v2>
</template>

<script lang="ts">
export default {
  name: 'ProVirtualizedSelect',
  inheritAttrs: false,
}
</script>

<script lang="ts" setup>
/* TODO: VirtualizedSelectInstance 会导致 vite-plugin-dts 生成类型时无限循环，暂时注释 */
import { getFilteredSlotNames, getSlotName } from 'component-library-utils/slot'
import { ElSelectV2 } from 'element-plus'
import { isUndefined } from 'lodash-es'
import { ref, computed, useSlots } from 'vue'
import type {
  VirtualizedSelectExtendedProps,
  // VirtualizedSelectInstance,
} from './virtualized-select'

/* 属性 */
const $props = withDefaults(defineProps<VirtualizedSelectExtendedProps>(), {
  clearable: undefined,
  filterable: undefined,
})
/* 插槽 */
const $slots = useSlots()
const $virtualizedSelectSlotNames = ['empty', 'prefix']
const $virtualizedSelectFilteredSlotNames = getFilteredSlotNames(
  $props,
  $slots,
  $virtualizedSelectSlotNames
)
/* 实例 */
// const $virtualizedSelectRef = ref<VirtualizedSelectInstance>()
const $virtualizedSelectRef = ref()
/* 默认值（内部不做修改） */
const $defaultClearable = computed(() => {
  if (!isUndefined($props.clearable)) {
    return $props.clearable
  }
  return true
})
const $defaultFilterable = computed(() => {
  if (!isUndefined($props.filterable)) {
    return $props.filterable
  }
  return true
})
const $defaultOptions = computed(() => {
  if (!isUndefined($props.options)) {
    return $props.options
  }
  return []
})
const $defaultPlaceholder = computed(() => {
  if (!isUndefined($props.placeholder)) {
    return $props.placeholder
  }
  return '请选择'
})

defineExpose({
  /* 实例 */
  ref: $virtualizedSelectRef,
})
</script>
