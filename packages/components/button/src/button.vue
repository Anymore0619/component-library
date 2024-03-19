<template>
  <el-button
    ref="$buttonRef"
    :class="['pro-button', $defaultCircle ? 'pro-button--circle' : '']"
    v-bind="$attrs"
    v-on="$props"
    :circle="$defaultCircle"
    :icon="$defaultIcon"
  >
    <template
      v-for="$buttonFilteredSlotName in $buttonFilteredSlotNames"
      :key="$buttonFilteredSlotName"
      #[$buttonFilteredSlotName]="scope"
    >
      <slot
        v-bind="scope"
        :key="$buttonFilteredSlotName"
        :name="getSlotName($props, $slots, $buttonFilteredSlotName)"
      />
    </template>
    <template #default="scope">
      <slot
        v-if="hasSlot($props, $slots, 'default')"
        v-bind="scope"
        :name="getSlotName($props, $slots, 'default')"
      />
      <template v-else>{{ $props.label }}</template>
    </template>
  </el-button>
</template>

<script lang="ts">
export default {
  name: 'ProButton',
  inheritAttrs: false,
}
</script>

<script lang="ts" setup>
import {
  getFilteredSlotNames,
  getSlotName,
  hasSlot,
} from 'component-library-utils/slot'
import { ElButton } from 'element-plus'
import { isUndefined } from 'lodash-es'
import { ref, toRaw, computed, useSlots } from 'vue'
import type { ButtonExtendedProps, ButtonInstance } from './button'

/* 属性 */
const $props = withDefaults(defineProps<ButtonExtendedProps>(), {
  circle: undefined,
})
/* 插槽 */
const $slots = useSlots()
const $buttonSlotNames = ['icon', 'loading']
const $buttonFilteredSlotNames = getFilteredSlotNames(
  $props,
  $slots,
  $buttonSlotNames
)
/* 实例 */
const $buttonRef = ref<ButtonInstance>()
/* 默认值（内部不做修改） */
const $defaultCircle = computed(() => {
  if (!isUndefined($props.circle)) {
    return $props.circle
  }
  return false
})
const $defaultIcon = computed(() => {
  if (!isUndefined($props.icon)) {
    return toRaw($props.icon)
  }
  return undefined
})

defineExpose({
  /* 实例 */
  ref: $buttonRef,
})
</script>
