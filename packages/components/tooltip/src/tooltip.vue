<template>
  <el-tooltip
    ref="$tooltipRef"
    class="pro-tooltip"
    v-bind="$attrs"
    v-on="$props"
  >
    <template
      v-for="$tooltipFilteredSlotName in $tooltipFilteredSlotNames"
      :key="$tooltipFilteredSlotName"
      #[$tooltipFilteredSlotName]="scope"
    >
      <slot
        v-bind="scope"
        :key="$tooltipFilteredSlotName"
        :name="getSlotName($props, $slots, $tooltipFilteredSlotName)"
      />
    </template>
  </el-tooltip>
</template>

<script lang="ts">
export default {
  name: 'ProTooltip',
  inheritAttrs: false,
}
</script>

<script lang="ts" setup>
import { getFilteredSlotNames, getSlotName } from 'component-library-utils/slot'
import { ElTooltip } from 'element-plus'
import { ref, useSlots } from 'vue'
import type { TooltipExtendedProps, TooltipInstance } from './tooltip'

/* 属性 */
const $props = defineProps<TooltipExtendedProps>()
/* 插槽 */
const $slots = useSlots()
const $tooltipSlotNames = ['content', 'default']
const $tooltipFilteredSlotNames = getFilteredSlotNames(
  $props,
  $slots,
  $tooltipSlotNames
)
/* 实例 */
const $tooltipRef = ref<TooltipInstance>()

defineExpose({
  /* 实例 */
  ref: $tooltipRef,
})
</script>
