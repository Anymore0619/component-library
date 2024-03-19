<template>
  <el-progress
    ref="$progressRef"
    class="pro-progress"
    v-bind="$attrs"
    v-on="$props"
  >
    <template
      v-for="$progressFilteredSlotName in $progressFilteredSlotNames"
      :key="$progressFilteredSlotName"
      #[$progressFilteredSlotName]="scope"
    >
      <slot
        v-bind="scope"
        :key="$progressFilteredSlotName"
        :name="getSlotName($props, $slots, $progressFilteredSlotName)"
      />
    </template>
  </el-progress>
</template>

<script lang="ts">
export default {
  name: 'ProProgress',
  inheritAttrs: false,
}
</script>

<script lang="ts" setup>
import { getFilteredSlotNames, getSlotName } from 'component-library-utils/slot'
import { ElProgress } from 'element-plus'
import { ref, useSlots } from 'vue'
import type { ProgressExtendedProps, ProgressInstance } from './progress'

/* 属性 */
const $props = defineProps<ProgressExtendedProps>()
/* 插槽 */
const $slots = useSlots()
const $progressSlotNames = ['default']
const $progressFilteredSlotNames = getFilteredSlotNames(
  $props,
  $slots,
  $progressSlotNames
)
/* 实例 */
const $progressRef = ref<ProgressInstance>()

defineExpose({
  /* 实例 */
  ref: $progressRef,
})
</script>
