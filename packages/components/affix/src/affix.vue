<template>
  <el-affix ref="$affixRef" class="pro-affix" v-bind="$attrs" v-on="$props">
    <template
      v-for="$affixFilteredSlotName in $affixFilteredSlotNames"
      :key="$affixFilteredSlotName"
      #[$affixFilteredSlotName]="scope"
    >
      <slot
        v-bind="scope"
        :key="$affixFilteredSlotName"
        :name="getSlotName($props, $slots, $affixFilteredSlotName)"
      />
    </template>
  </el-affix>
</template>

<script lang="ts">
export default {
  name: 'ProAffix',
  inheritAttrs: false,
}
</script>

<script lang="ts" setup>
import { getFilteredSlotNames, getSlotName } from 'component-library-utils/slot'
import { ElAffix } from 'element-plus'
import { ref, useSlots } from 'vue'
import type { AffixExtendedProps, AffixInstance } from './affix'

/* 属性 */
const $props = defineProps<AffixExtendedProps>()
/* 插槽 */
const $slots = useSlots()
const $affixSlotNames = ['default']
const $affixFilteredSlotNames = getFilteredSlotNames(
  $props,
  $slots,
  $affixSlotNames
)
/* 实例 */
const $affixRef = ref<AffixInstance>()

defineExpose({
  /* 实例 */
  ref: $affixRef,
})
</script>
