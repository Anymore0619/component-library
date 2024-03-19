<template>
  <el-dropdown-item
    v-if="!$props.hidden"
    ref="$dropdownItemRef"
    class="pro-dropdown-item"
    v-bind="$attrs"
    v-on="$props"
  >
    <template
      v-for="$dropdownItemFilteredSlotName in $dropdownItemFilteredSlotNames"
      :key="$dropdownItemFilteredSlotName"
      #[$dropdownItemFilteredSlotName]="scope"
    >
      <slot
        v-bind="scope"
        :key="$dropdownItemFilteredSlotName"
        :name="getSlotName($props, $slots, $dropdownItemFilteredSlotName)"
      />
    </template>
    <template #default="scope">
      <!-- default 插槽与 pro-dropdown 中的 default 插槽存在命名冲突，使用 content 插槽替代 -->
      <slot
        v-if="hasSlot($props, $slots, 'content')"
        v-bind="scope"
        :name="getSlotName($props, $slots, 'content')"
      />
      <template v-else>{{ $props.label }}</template>
    </template>
  </el-dropdown-item>
</template>

<script lang="ts">
export default {
  name: 'ProDropdownItem',
  inheritAttrs: false,
}
</script>

<script lang="ts" setup>
import {
  getFilteredSlotNames,
  getSlotName,
  hasSlot,
} from 'component-library-utils/slot'
import { ElDropdownItem } from 'element-plus'
import { ref, useSlots } from 'vue'
import type {
  DropdownItemExtendedProps,
  DropdownItemInstance,
} from './dropdown-item'

/* 属性 */
const $props = withDefaults(defineProps<DropdownItemExtendedProps>(), {
  hidden: undefined,
})
/* 插槽 */
const $slots = useSlots()
const $dropdownItemSlotNames = []
const $dropdownItemFilteredSlotNames = getFilteredSlotNames(
  $props,
  $slots,
  $dropdownItemSlotNames
)
/* 实例 */
const $dropdownItemRef = ref<DropdownItemInstance>()

defineExpose({
  /* 实例 */
  ref: $dropdownItemRef,
})
</script>
