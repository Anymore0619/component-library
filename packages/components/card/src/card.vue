<template>
  <el-card
    ref="$cardRef"
    class="pro-card"
    v-bind="$attrs"
    v-on="$props"
    :shadow="$defaultShadow"
  >
    <template
      v-for="$cardFilteredSlotName in $cardFilteredSlotNames"
      :key="$cardFilteredSlotName"
      #[$cardFilteredSlotName]="scope"
    >
      <slot
        v-bind="scope"
        :key="$cardFilteredSlotName"
        :name="getSlotName($props, $slots, $cardFilteredSlotName)"
      />
    </template>
  </el-card>
</template>

<script lang="ts">
export default {
  name: 'ProCard',
  inheritAttrs: false,
}
</script>

<script lang="ts" setup>
import { getFilteredSlotNames, getSlotName } from 'component-library-utils/slot'
import { ElCard } from 'element-plus'
import { isUndefined } from 'lodash-es'
import { ref, computed, useSlots } from 'vue'
import type { CardExtendedProps, CardInstance } from './card'

/* 属性 */
const $props = defineProps<CardExtendedProps>()
/* 插槽 */
const $slots = useSlots()
const $cardSlotNames = ['default', 'header']
const $cardFilteredSlotNames = getFilteredSlotNames(
  $props,
  $slots,
  $cardSlotNames
)
/* 实例 */
const $cardRef = ref<CardInstance>()
/* 默认值（内部不做修改） */
const $defaultShadow = computed(() => {
  if (!isUndefined($props.shadow)) {
    return $props.shadow
  }
  return 'never'
})

defineExpose({
  /* 实例 */
  ref: $cardRef,
})
</script>
