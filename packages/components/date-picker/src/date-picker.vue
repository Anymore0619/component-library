<template>
  <el-date-picker
    ref="$datePickerRef"
    class="pro-date-picker"
    v-bind="$attrs"
    v-on="$props"
    :clearable="$defaultClearable"
    :default-time="$defaultDefaultTime"
    :end-placeholder="$defaultEndPlaceholder"
    :placeholder="$defaultPlaceholder"
    :start-placeholder="$defaultStartPlaceholder"
    :type="$defaultType"
  >
    <template
      v-for="$datePickerFilteredSlotName in $datePickerFilteredSlotNames"
      :key="$datePickerFilteredSlotName"
      #[$datePickerFilteredSlotName]="scope"
    >
      <slot
        v-bind="scope"
        :key="$datePickerFilteredSlotName"
        :name="getSlotName($props, $slots, $datePickerFilteredSlotName)"
      />
    </template>
  </el-date-picker>
</template>

<script lang="ts">
export default {
  name: 'ProDatePicker',
  inheritAttrs: false,
}
</script>

<script lang="ts" setup>
import { getFilteredSlotNames, getSlotName } from 'component-library-utils/slot'
import { ElDatePicker } from 'element-plus'
import { isUndefined } from 'lodash-es'
import { ref, computed, useSlots } from 'vue'
import type { DatePickerExtendedProps, DatePickerInstance } from './date-picker'

/* 属性 */
const $props = withDefaults(defineProps<DatePickerExtendedProps>(), {
  clearable: undefined,
})
/* 插槽 */
const $slots = useSlots()
const $datePickerSlotNames = ['default', 'range-separator']
const $datePickerFilteredSlotNames = getFilteredSlotNames(
  $props,
  $slots,
  $datePickerSlotNames
)
/* 实例 */
const $datePickerRef = ref<DatePickerInstance>()
/* 默认值（内部不做修改） */
const $defaultClearable = computed(() => {
  if (!isUndefined($props.clearable)) {
    return $props.clearable
  }
  return true
})
const $defaultDefaultTime = computed(() => {
  if (!isUndefined($props.defaultTime)) {
    return $props.defaultTime
  }

  if ($defaultType.value === 'datetimerange') {
    return [
      new Date(2000, 1, 1, 0, 0, 0),
      new Date(2000, 1, 1, 23, 59, 59),
    ] as [Date, Date]
  } else {
    return undefined
  }
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
const $defaultType = computed(() => {
  if (!isUndefined($props.type)) {
    return $props.type
  }
  return 'date'
})

defineExpose({
  /* 实例 */
  ref: $datePickerRef,
})
</script>
