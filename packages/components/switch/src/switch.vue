<template>
  <el-switch
    ref="$switchRef"
    class="pro-switch"
    v-bind="$attrs"
    v-on="$props"
    :active-icon="$defaultActiveIcon"
    :inactive-icon="$defaultInactiveIcon"
  >
    <template
      v-for="$switchFilteredSlotName in $switchFilteredSlotNames"
      :key="$switchFilteredSlotName"
      #[$switchFilteredSlotName]="scope"
    >
      <slot
        v-bind="scope"
        :key="$switchFilteredSlotName"
        :name="getSlotName($props, $slots, $switchFilteredSlotName)"
      />
    </template>
  </el-switch>
</template>

<script lang="ts">
export default {
  name: 'ProSwitch',
  inheritAttrs: false,
}
</script>

<script lang="ts" setup>
import { getFilteredSlotNames, getSlotName } from 'component-library-utils/slot'
import { ref, toRaw, computed, useSlots } from 'vue'
import { ElSwitch } from 'element-plus'
import type { SwitchExtendedProps, SwitchInstance } from './switch'

/* 属性 */
const $props = defineProps<SwitchExtendedProps>()
/* 插槽 */
const $slots = useSlots()
const $switchSlotNames = []
const $switchFilteredSlotNames = getFilteredSlotNames(
  $props,
  $slots,
  $switchSlotNames
)
/* 实例 */
const $switchRef = ref<SwitchInstance>()
/* 默认值（内部不做修改） */
const $defaultActiveIcon = computed(() => {
  return toRaw($props.activeIcon)
})
const $defaultInactiveIcon = computed(() => {
  return toRaw($props.inactiveIcon)
})

defineExpose({
  /* 实例 */
  ref: $switchRef,
})
</script>
