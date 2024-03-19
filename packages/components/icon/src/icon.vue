<template>
  <el-icon ref="$iconRef" class="pro-icon" v-bind="$attrs" v-on="$props">
    <template
      v-for="$iconFilteredSlotName in $iconFilteredSlotNames"
      :key="$iconFilteredSlotName"
      #[$iconFilteredSlotName]="scope"
    >
      <slot
        v-bind="scope"
        :key="$iconFilteredSlotName"
        :name="getSlotName($props, $slots, $iconFilteredSlotName)"
      />
    </template>
    <template #default="scope">
      <slot
        v-if="hasSlot($props, $slots, 'default')"
        v-bind="scope"
        :name="getSlotName($props, $slots, 'default')"
      />
      <template v-else>
        <component :is="$defaultIconComponent" />
      </template>
    </template>
  </el-icon>
</template>

<script lang="ts">
export default {
  name: 'ProIcon',
  inheritAttrs: false,
}
</script>

<script lang="ts" setup>
/* eslint import/namespace: ['error', { allowComputed: true }] */
import * as Icons from '@element-plus/icons-vue'
import {
  getFilteredSlotNames,
  getSlotName,
  hasSlot,
} from 'component-library-utils/slot'
import { ElIcon } from 'element-plus'
import { ref, computed, useSlots } from 'vue'
import type { IconExtendedProps, IconInstance } from './icon'

/* 属性 */
const $props = defineProps<IconExtendedProps>()
/* 插槽 */
const $slots = useSlots()
const $iconSlotNames = []
const $iconFilteredSlotNames = getFilteredSlotNames(
  $props,
  $slots,
  $iconSlotNames
)
/* 实例 */
const $iconRef = ref<IconInstance>()
/* 默认值（内部不做修改） */
const $defaultIconComponent = computed(() => {
  return Icons[$props.name as keyof typeof Icons]
})

defineExpose({
  /* 实例 */
  ref: $iconRef,
})
</script>
