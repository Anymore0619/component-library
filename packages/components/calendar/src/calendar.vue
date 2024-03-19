<template>
  <el-calendar
    ref="$calendarRef"
    class="pro-calendar"
    v-bind="$attrs"
    v-on="$props"
    v-model="$internalModelValue"
  >
    <template
      v-for="$calendarFilteredSlotName in $calendarFilteredSlotNames"
      :key="$calendarFilteredSlotName"
      #[$calendarFilteredSlotName]="scope"
    >
      <slot
        v-bind="scope"
        :key="$calendarFilteredSlotName"
        :name="getSlotName($props, $slots, $calendarFilteredSlotName)"
      />
    </template>
    <template #header="scope">
      <slot
        v-if="hasSlot($props, $slots, 'header')"
        v-bind="scope"
        :name="getSlotName($props, $slots, 'header')"
      />
      <template v-else>
        <pro-date-picker
          class="pro-calendar__date-picker"
          v-bind="$datePicker"
          v-model="$datePicker.modelValue"
        />
      </template>
    </template>
  </el-calendar>
</template>

<script lang="ts">
export default {
  name: 'ProCalendar',
  inheritAttrs: false,
}
</script>

<script lang="ts" setup>
import ProDatePicker from '../../date-picker'
import {
  getFilteredSlotNames,
  getSlotName,
  hasSlot,
} from 'component-library-utils/slot'
import { ElCalendar } from 'element-plus'
import { isUndefined } from 'lodash-es'
import { ref, reactive, watch, useSlots } from 'vue'
import type { CalendarExtendedProps, CalendarInstance } from './calendar'
import type { ProDatePickerProps } from '../../date-picker'

/* 属性 */
const $props = defineProps<CalendarExtendedProps>()
/* 事件 */
const $emits = defineEmits(['update:model-value'])
/* 插槽 */
const $slots = useSlots()
const $calendarSlotNames = ['date-cell']
const $calendarFilteredSlotNames = getFilteredSlotNames(
  $props,
  $slots,
  $calendarSlotNames
)
/* 实例 */
const $calendarRef = ref<CalendarInstance>()
/* 辅助参数 */
const $datePicker = reactive<ProDatePickerProps>({
  change: value => {
    $internalModelValue.value = value as Date
  },
  clearable: false,
  modelValue: new Date(),
  type: 'month',
})
/* 默认值（内部可做修改） */
let $internalModelValue = ref(new Date())
watch(
  () => $props.modelValue,
  value => {
    if (!isUndefined(value)) {
      $internalModelValue.value = value
      $datePicker.modelValue = value
    }
  },
  {
    immediate: true,
  }
)
watch(
  () => $internalModelValue.value,
  value => {
    $datePicker.modelValue = value
    $emits('update:model-value', value)
    $props.change?.(value)
  }
)

defineExpose({
  /* 实例 */
  ref: $calendarRef,
})
</script>
