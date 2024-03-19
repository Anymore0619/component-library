<template>
  <el-popover
    ref="$popoverRef"
    class="pro-popover"
    v-bind="$attrs"
    v-on="$props"
  >
    <template
      v-for="$popoverFilteredSlotName in $popoverFilteredSlotNames"
      :key="$popoverFilteredSlotName"
      #[$popoverFilteredSlotName]="scope"
    >
      <slot
        v-bind="scope"
        :key="$popoverFilteredSlotName"
        :name="getSlotName($props, $slots, $popoverFilteredSlotName)"
      />
    </template>
  </el-popover>
</template>

<script lang="ts">
export default {
  name: 'ProPopover',
  inheritAttrs: false,
}
</script>

<script lang="ts" setup>
/* TODO: PopoverInstance 会导致 vite-plugin-dts 生成类型时无限循环，暂时注释 */
import { getFilteredSlotNames, getSlotName } from 'component-library-utils/slot'
import { ElPopover } from 'element-plus'
import { ref, useSlots } from 'vue'
import type {
  PopoverExtendedProps,
  // PopoverInstance
} from './popover'

/* 属性 */
const $props = defineProps<PopoverExtendedProps>()
/* 插槽 */
const $slots = useSlots()
const $popoverSlotNames = ['default', 'reference']
const $popoverFilteredSlotNames = getFilteredSlotNames(
  $props,
  $slots,
  $popoverSlotNames
)
/* 实例 */
// const $popoverRef = ref<PopoverInstance>()
const $popoverRef = ref()

defineExpose({
  /* 实例 */
  ref: $popoverRef,
})
</script>
