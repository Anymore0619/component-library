<template>
  <el-link
    ref="$linkRef"
    class="pro-link"
    v-bind="$attrs"
    v-on="$props"
    :icon="$defaultIcon"
  >
    <template
      v-for="$linkFilteredSlotName in $linkFilteredSlotNames"
      :key="$linkFilteredSlotName"
      #[$linkFilteredSlotName]="scope"
    >
      <slot
        v-bind="scope"
        :key="$linkFilteredSlotName"
        :name="getSlotName($props, $slots, $linkFilteredSlotName)"
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
  </el-link>
</template>

<script lang="ts">
export default {
  name: 'ProLink',
  inheritAttrs: false,
}
</script>

<script lang="ts" setup>
import {
  getFilteredSlotNames,
  getSlotName,
  hasSlot,
} from 'component-library-utils/slot'
import { ElLink } from 'element-plus'
import { isUndefined } from 'lodash-es'
import { ref, toRaw, computed, useSlots } from 'vue'
import type { LinkExtendedProps, LinkInstance } from './link'

/* 属性 */
const $props = defineProps<LinkExtendedProps>()
/* 插槽 */
const $slots = useSlots()
const $linkSlotNames = ['icon']
const $linkFilteredSlotNames = getFilteredSlotNames(
  $props,
  $slots,
  $linkSlotNames
)
/* 实例 */
const $linkRef = ref<LinkInstance>()
const $defaultIcon = computed(() => {
  if (!isUndefined($props.icon)) {
    return toRaw($props.icon)
  }
  return undefined
})

defineExpose({
  /* 实例 */
  ref: $linkRef,
})
</script>
