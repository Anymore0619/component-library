<template>
  <el-dropdown
    ref="$dropdownRef"
    class="pro-dropdown"
    v-bind="$attrs"
    v-on="$props"
  >
    <template
      v-for="$dropdownFilteredSlotName in $dropdownFilteredSlotNames"
      :key="$dropdownFilteredSlotName"
      #[$dropdownFilteredSlotName]="scope"
    >
      <slot
        v-bind="scope"
        :key="$dropdownFilteredSlotName"
        :name="getSlotName($props, $slots, $dropdownFilteredSlotName)"
      />
    </template>
    <template #dropdown="scope">
      <el-dropdown-menu>
        <slot
          v-if="hasSlot($props, $slots, 'dropdown')"
          v-bind="scope"
          :name="getSlotName($props, $slots, 'dropdown')"
        />
        <template v-else>
          <pro-dropdown-item
            ref="$proDropdownItemRef"
            v-for="($item, $itemIndex) in $props.items"
            :key="$itemIndex"
            v-bind="$item"
          >
            <!-- 直接传递所有插槽至子组件 -->
            <template
              v-for="$slotName in $slotNames"
              :key="$slotName"
              #[$slotName]="itemScope"
            >
              <slot v-bind="itemScope" :key="$slotName" :name="$slotName" />
            </template>
          </pro-dropdown-item>
        </template>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts">
export default {
  name: 'ProDropdown',
  inheritAttrs: false,
}
</script>

<script lang="ts" setup>
/* TODO: DropdownInstance 会导致 vite-plugin-dts 生成类型时无限循环，暂时注释 */
import ProDropdownItem from '../../dropdown-item'
import {
  getFilteredSlotNames,
  getSlotName,
  hasSlot,
} from 'component-library-utils/slot'
import { ElDropdown, ElDropdownMenu } from 'element-plus'
import { ref, useSlots } from 'vue'
import type {
  DropdownExtendedProps,
  // DropdownInstance
} from './dropdown'
import type { ProDropdownItemInstance } from '../../dropdown-item'

/* 属性 */
const $props = defineProps<DropdownExtendedProps>()
/* 插槽 */
const $slots = useSlots()
const $slotNames = Object.keys($slots)
const $dropdownSlotNames = ['default']
const $dropdownFilteredSlotNames = getFilteredSlotNames(
  $props,
  $slots,
  $dropdownSlotNames
)
/* 实例 */
// const $dropdownRef = ref<DropdownInstance>()
const $dropdownRef = ref()
const $proDropdownItemRef = ref<ProDropdownItemInstance>()

defineExpose({
  /* 实例 */
  proDropdownItemRef: $proDropdownItemRef,
  ref: $dropdownRef,
})
</script>
