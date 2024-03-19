<template>
  <el-divider
    ref="$dividerRef"
    class="pro-divider"
    v-bind="$attrs"
    v-on="$props"
  >
    <template
      v-for="$dividerFilteredSlotName in $dividerFilteredSlotNames"
      :key="$dividerFilteredSlotName"
      #[$dividerFilteredSlotName]="scope"
    >
      <slot
        v-bind="scope"
        :key="$dividerFilteredSlotName"
        :name="getSlotName($props, $slots, $dividerFilteredSlotName)"
      />
    </template>
  </el-divider>
</template>

<script lang="ts">
export default {
  name: 'ProDivider',
  inheritAttrs: false,
}
</script>

<script lang="ts" setup>
import { getFilteredSlotNames, getSlotName } from 'component-library-utils/slot'
import { ElDivider } from 'element-plus'
import { ref, useSlots } from 'vue'
import type { DividerExtendedProps, DividerInstance } from './divider'

/* 属性 */
const $props = defineProps<DividerExtendedProps>()
/* 插槽 */
const $slots = useSlots()
const $dividerSlotNames = ['default']
const $dividerFilteredSlotNames = getFilteredSlotNames(
  $props,
  $slots,
  $dividerSlotNames
)
/* 实例 */
const $dividerRef = ref<DividerInstance>()

defineExpose({
  /* 实例 */
  ref: $dividerRef,
})
</script>
