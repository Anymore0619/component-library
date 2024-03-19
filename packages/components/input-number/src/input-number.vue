<template>
  <el-input-number
    ref="$inputNumberRef"
    :class="['pro-input-number', `pro-input-number--${$defaultAlign}`]"
    v-bind="$attrs"
    v-on="$props"
    :controls="$defaultControls"
    @keyup.enter="$defaultKeyEnter"
  >
    <template
      v-for="$inputNumberFilteredSlotName in $inputNumberFilteredSlotNames"
      :key="$inputNumberFilteredSlotName"
      #[$inputNumberFilteredSlotName]="scope"
    >
      <slot
        v-bind="scope"
        :key="$inputNumberFilteredSlotName"
        :name="getSlotName($props, $slots, $inputNumberFilteredSlotName)"
      />
    </template>
  </el-input-number>
</template>

<script lang="ts">
export default {
  name: 'ProInputNumber',
  inheritAttrs: false,
}
</script>

<script lang="ts" setup>
import { getFilteredSlotNames, getSlotName } from 'component-library-utils/slot'
import { ElInputNumber } from 'element-plus'
import { isUndefined } from 'lodash-es'
import { ref, computed, useSlots } from 'vue'
import type {
  InputNumberExtendedProps,
  InputNumberInstance,
} from './input-number'

/* 属性 */
const $props = withDefaults(defineProps<InputNumberExtendedProps>(), {
  controls: undefined,
})
/* 插槽 */
const $slots = useSlots()
const $inputNumberSlotNames = []
const $inputNumberFilteredSlotNames = getFilteredSlotNames(
  $props,
  $slots,
  $inputNumberSlotNames
)
/* 实例 */
const $inputNumberRef = ref<InputNumberInstance>()
/* 默认值（内部不做修改） */
const $defaultAlign = computed(() => {
  if (!isUndefined($props.align)) {
    return $props.align
  }
  return 'left'
})
const $defaultControls = computed(() => {
  if (!isUndefined($props.controls)) {
    return $props.controls
  }
  return false
})
const $defaultKeyEnter = (event: KeyboardEvent) => {
  $props.keyupEnter?.(event)
}

defineExpose({
  /* 实例 */
  ref: $inputNumberRef,
})
</script>
