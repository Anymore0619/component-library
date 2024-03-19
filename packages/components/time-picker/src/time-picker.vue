<template>
  <el-time-picker
    ref="$timePickerRef"
    class="pro-time-picker"
    v-bind="$attrs"
    v-on="$props"
    :clearable="$defaultClearable"
    :end-placeholder="$defaultEndPlaceholder"
    :placeholder="$defaultPlaceholder"
    :start-placeholder="$defaultStartPlaceholder"
  >
    <template
      v-for="$timePickerFilteredSlotName in $timePickerFilteredSlotNames"
      :key="$timePickerFilteredSlotName"
      #[$timePickerFilteredSlotName]="scope"
    >
      <slot
        v-bind="scope"
        :key="$timePickerFilteredSlotName"
        :name="getSlotName($props, $slots, $timePickerFilteredSlotName)"
      />
    </template>
  </el-time-picker>
</template>

<script lang="ts">
export default {
  name: 'ProTimePicker',
  inheritAttrs: false,
}
</script>

<script lang="ts" setup>
import { getFilteredSlotNames, getSlotName } from 'component-library-utils/slot'
import { ElTimePicker } from 'element-plus'
import { isUndefined } from 'lodash-es'
import { ref, computed, useSlots } from 'vue'
import type { TimePickerExtendedProps, TimePickerInstance } from './time-picker'

/* 属性 */
const $props = withDefaults(defineProps<TimePickerExtendedProps>(), {
  clearable: undefined,
})
/* 插槽 */
const $slots = useSlots()
const $timePickerSlotNames = []
const $timePickerFilteredSlotNames = getFilteredSlotNames(
  $props,
  $slots,
  $timePickerSlotNames
)
/* 实例 */
const $timePickerRef = ref<TimePickerInstance>()
/* 默认值（内部不做修改） */
const $defaultClearable = computed(() => {
  if (!isUndefined($props.clearable)) {
    return $props.clearable
  }
  return true
})
const $defaultEndPlaceholder = computed(() => {
  if (!isUndefined($props.endPlaceholder)) {
    return $props.endPlaceholder
  }
  return '请选择'
})
const $defaultPlaceholder = computed(() => {
  if (!isUndefined($props.placeholder)) {
    return $props.placeholder
  }
  return '请选择'
})
const $defaultStartPlaceholder = computed(() => {
  if (!isUndefined($props.startPlaceholder)) {
    return $props.startPlaceholder
  }
  return '请选择'
})

defineExpose({
  /* 实例 */
  ref: $timePickerRef,
})
</script>
