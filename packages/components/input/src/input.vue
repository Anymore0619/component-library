<template>
  <el-input
    ref="$inputRef"
    class="pro-input"
    v-bind="$attrs"
    v-on="$props"
    :clearable="$defaultClearable"
    :placeholder="$defaultPlaceholder"
    @keyup.enter="$defaultKeyEnter"
  >
    <template
      v-for="$inputFilteredSlotName in $inputFilteredSlotNames"
      :key="$inputFilteredSlotName"
      #[$inputFilteredSlotName]="scope"
    >
      <slot
        v-bind="scope"
        :key="$inputFilteredSlotName"
        :name="getSlotName($props, $slots, $inputFilteredSlotName)"
      />
    </template>
  </el-input>
</template>

<script lang="ts">
export default {
  name: 'ProInput',
  inheritAttrs: false,
}
</script>

<script lang="ts" setup>
import { getFilteredSlotNames, getSlotName } from 'component-library-utils/slot'
import { ElInput } from 'element-plus'
import { isUndefined } from 'lodash-es'
import { ref, computed, useSlots } from 'vue'
import type { InputExtendedProps, InputInstance } from './input'

/* 属性 */
const $props = withDefaults(defineProps<InputExtendedProps>(), {
  clearable: undefined,
})
/* 插槽 */
const $slots = useSlots()
const $inputSlotNames = ['append', 'prefix', 'prepend', 'suffix']
const $inputFilteredSlotNames = getFilteredSlotNames(
  $props,
  $slots,
  $inputSlotNames
)
/* 实例 */
const $inputRef = ref<InputInstance>()
/* 默认值（内部不做修改） */
const $defaultClearable = computed(() => {
  if (!isUndefined($props.clearable)) {
    return $props.clearable
  }
  return true
})
const $defaultKeyEnter = (event: KeyboardEvent) => {
  $props.keyupEnter?.(event)
}
const $defaultPlaceholder = computed(() => {
  if (!isUndefined($props.placeholder)) {
    return $props.placeholder
  }
  return '请输入'
})

defineExpose({
  /* 实例 */
  ref: $inputRef,
})
</script>
