<template>
  <el-checkbox
    v-if="!$props.hidden"
    ref="$checkboxRef"
    class="pro-checkbox"
    v-bind="$attrs"
    v-on="$props"
  >
    <template
      v-for="$checkboxFilteredSlotName in $checkboxFilteredSlotNames"
      :key="$checkboxFilteredSlotName"
      #[$checkboxFilteredSlotName]="scope"
    >
      <slot
        v-bind="scope"
        :key="$checkboxFilteredSlotName"
        :name="getSlotName($props, $slots, $checkboxFilteredSlotName)"
      />
    </template>
    <template #default="scope">
      <!-- default 插槽与 pro-checkbox-group 中的 default 插槽存在命名冲突，使用 content 插槽替代 -->
      <slot
        v-if="hasSlot($props, $slots, 'content')"
        v-bind="scope"
        :name="getSlotName($props, $slots, 'content')"
      />
      <template v-else>{{ $props.label }}</template>
    </template>
  </el-checkbox>
</template>

<script lang="ts">
export default {
  name: 'ProCheckbox',
  inheritAttrs: false,
}
</script>

<script lang="ts" setup>
import {
  getFilteredSlotNames,
  getSlotName,
  hasSlot,
} from 'component-library-utils/slot'
import { ElCheckbox } from 'element-plus'
import { ref, useSlots } from 'vue'
import type { CheckboxExtendedProps, CheckboxInstance } from './checkbox'

/* 属性 */
const $props = withDefaults(defineProps<CheckboxExtendedProps>(), {
  hidden: undefined,
})
/* 插槽 */
const $slots = useSlots()
const $checkboxSlotNames = []
const $checkboxFilteredSlotNames = getFilteredSlotNames(
  $props,
  $slots,
  $checkboxSlotNames
)
/* 实例 */
const $checkboxRef = ref<CheckboxInstance>()

defineExpose({
  /* 实例 */
  ref: $checkboxRef,
})
</script>
