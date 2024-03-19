<template>
  <component
    v-if="!$props.hidden"
    class="pro-radio"
    v-bind="$attrs"
    v-on="$props"
    :is="$defaultComponent"
  >
    <template
      v-for="$radioFilteredSlotName in $radioFilteredSlotNames"
      :key="$radioFilteredSlotName"
      #[$radioFilteredSlotName]="scope"
    >
      <slot
        v-bind="scope"
        :key="$radioFilteredSlotName"
        :name="getSlotName($props, $slots, $radioFilteredSlotName)"
      />
    </template>
    <template #default="scope">
      <!-- default 插槽与 pro-radio-group 中的 default 插槽存在命名冲突，使用 content 插槽替代 -->
      <slot
        v-if="hasSlot($props, $slots, 'content')"
        v-bind="scope"
        :name="getSlotName($props, $slots, 'content')"
      />
      <template v-else>{{ $props.label }}</template>
    </template>
  </component>
</template>

<script lang="ts">
export default {
  name: 'ProRadio',
  inheritAttrs: false,
}
</script>

<script lang="ts" setup>
import {
  getFilteredSlotNames,
  getSlotName,
  hasSlot,
} from 'component-library-utils/slot'
import { ElRadio, ElRadioButton } from 'element-plus'
import { isUndefined } from 'lodash-es'
import { ref, computed, useSlots } from 'vue'
import type { RadioExtendedProps, RadioInstance } from './radio'

/* 属性 */
const $props = withDefaults(defineProps<RadioExtendedProps>(), {
  hidden: undefined,
})
/* 插槽 */
const $slots = useSlots()
const $radioSlotNames = []
const $radioFilteredSlotNames = getFilteredSlotNames(
  $props,
  $slots,
  $radioSlotNames
)
/* 实例 */
const $radioRef = ref<RadioInstance>()
/* 默认值（内部不做修改） */
const $defaultComponent = computed(() => {
  if (!isUndefined($defaultType.value)) {
    if ($defaultType.value === 'radioButton') {
      return ElRadioButton
    } else if ($defaultType.value === 'radio') {
      return ElRadio
    }
  }
  return ElRadio
})
const $defaultType = computed(() => {
  if (!isUndefined($props.type)) {
    return $props.type
  }
  return 'radio'
})

defineExpose({
  /* 实例 */
  ref: $radioRef,
})
</script>
