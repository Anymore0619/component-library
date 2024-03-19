<template>
  <el-option
    ref="$selectOptionRef"
    class="pro-select-option"
    v-bind="$attrs"
    v-on="$props"
    :value="$defaultValue"
  >
    <template
      v-for="$selectOptionFilteredSlotName in $selectOptionFilteredSlotNames"
      :key="$selectOptionFilteredSlotName"
      #[$selectOptionFilteredSlotName]="scope"
    >
      <slot
        v-bind="scope"
        :key="$selectOptionFilteredSlotName"
        :name="getSlotName($props, $slots, $selectOptionFilteredSlotName)"
      />
    </template>
    <template #default="scope">
      <!-- default 插槽与 pro-select 中的 default 插槽存在命名冲突，使用 content 插槽替代 -->
      <slot
        v-if="hasSlot($props, $slots, 'content')"
        v-bind="scope"
        :name="getSlotName($props, $slots, 'content')"
      />
    </template>
  </el-option>
</template>

<script lang="ts">
export default {
  name: 'ProSelectOption',
  inheritAttrs: false,
}
</script>

<script lang="ts" setup>
import {
  getFilteredSlotNames,
  getSlotName,
  hasSlot,
} from 'component-library-utils/slot'
import { ElOption } from 'element-plus'
import { isUndefined } from 'lodash-es'
import { ref, computed, useSlots } from 'vue'
import type {
  SelectOptionExtendedProps,
  SelectOptionInstance,
} from './select-option'

/* 属性 */
const $props = defineProps<SelectOptionExtendedProps>()
/* 插槽 */
const $slots = useSlots()
const $selectOptionSlotNames = []
const $selectOptionFilteredSlotNames = getFilteredSlotNames(
  $props,
  $slots,
  $selectOptionSlotNames
)
/* 实例 */
const $selectOptionRef = ref<SelectOptionInstance>()
/* 默认值（内部不做修改） */
const $defaultValue = computed(() => {
  if (!isUndefined($props.value)) {
    return $props.value
  }
  return ''
})

defineExpose({
  /* 实例 */
  ref: $selectOptionRef,
})
</script>
