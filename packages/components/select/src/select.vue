<template>
  <el-select
    ref="$selectRef"
    class="pro-select"
    v-bind="$attrs"
    v-on="$props"
    :clearable="$defaultClearable"
    :filterable="$defaultFilterable"
  >
    <template
      v-for="$selectFilteredSlotName in $selectFilteredSlotNames"
      :key="$selectFilteredSlotName"
      #[$selectFilteredSlotName]="scope"
    >
      <slot
        v-bind="scope"
        :key="$selectFilteredSlotName"
        :name="getSlotName($props, $slots, $selectFilteredSlotName)"
      />
    </template>
    <template #default="scope">
      <slot
        v-if="hasSlot($props, $slots, 'default')"
        v-bind="scope"
        :name="getSlotName($props, $slots, 'default')"
      />
      <template v-else>
        <pro-select-option
          ref="$proSelectOptionRef"
          v-for="($option, $optionIndex) in $props.options"
          :key="$optionIndex"
          v-bind="$option"
        >
          <!-- 直接传递所有插槽至子组件 -->
          <template
            v-for="$slotName in $slotNames"
            :key="$slotName"
            #[$slotName]="optionScope"
          >
            <slot v-bind="optionScope" :key="$slotName" :name="$slotName" />
          </template>
        </pro-select-option>
      </template>
    </template>
  </el-select>
</template>

<script lang="ts">
export default {
  name: 'ProSelect',
  inheritAttrs: false,
}
</script>

<script lang="ts" setup>
/* TODO: SelectInstance 会导致 vite-plugin-dts 生成类型时无限循环，暂时注释 */
import ProSelectOption from '../../select-option'
import {
  getFilteredSlotNames,
  getSlotName,
  hasSlot,
} from 'component-library-utils/slot'
import { ElSelect } from 'element-plus'
import { isUndefined } from 'lodash-es'
import { ref, computed, useSlots } from 'vue'
import type {
  SelectExtendedProps,
  // SelectInstance
} from './select'
import type { ProSelectOptionInstance } from '../../select-option'

/* 属性 */
const $props = withDefaults(defineProps<SelectExtendedProps>(), {
  clearable: undefined,
  filterable: undefined,
})
/* 插槽 */
const $slots = useSlots()
const $slotNames = Object.keys($slots)
const $selectSlotNames = ['empty', 'prefix']
const $selectFilteredSlotNames = getFilteredSlotNames(
  $props,
  $slots,
  $selectSlotNames
)
/* 实例 */
const $proSelectOptionRef = ref<ProSelectOptionInstance>()
// const $selectRef = ref<SelectInstance>()
const $selectRef = ref()
/* 默认值（内部不做修改） */
const $defaultClearable = computed(() => {
  if (!isUndefined($props.clearable)) {
    return $props.clearable
  }
  return true
})
const $defaultFilterable = computed(() => {
  if (!isUndefined($props.filterable)) {
    return $props.filterable
  }
  return true
})

defineExpose({
  /* 实例 */
  proSelectOptionRef: $proSelectOptionRef,
  ref: $selectRef,
})
</script>
