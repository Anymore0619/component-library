<template>
  <el-text ref="$textRef" class="pro-text" v-bind="$attrs" v-on="$props">
    <template
      v-for="$textFilteredSlotName in $textFilteredSlotNames"
      :key="$textFilteredSlotName"
      #[$textFilteredSlotName]="scope"
    >
      <slot
        v-bind="scope"
        :key="$textFilteredSlotName"
        :name="getSlotName($props, $slots, $textFilteredSlotName)"
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
  </el-text>
</template>

<script lang="ts">
export default {
  name: 'ProText',
  inheritAttrs: false,
}
</script>

<script lang="ts" setup>
import {
  getFilteredSlotNames,
  getSlotName,
  hasSlot,
} from 'component-library-utils/slot'
import { ElText } from 'element-plus'
import { ref, useSlots } from 'vue'
import type { TextExtendedProps, TextInstance } from './text'

/* 属性 */
const $props = defineProps<TextExtendedProps>()
/* 插槽 */
const $slots = useSlots()
const $textSlotNames = []
const $textFilteredSlotNames = getFilteredSlotNames(
  $props,
  $slots,
  $textSlotNames
)
/* 实例 */
const $textRef = ref<TextInstance>()

defineExpose({
  /* 实例 */
  ref: $textRef,
})
</script>
