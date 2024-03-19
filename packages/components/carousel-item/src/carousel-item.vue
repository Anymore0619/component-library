<template>
  <el-carousel-item
    ref="$carouselItemRef"
    class="pro-carousel-item"
    v-bind="$attrs"
    v-on="$props"
  >
    <template
      v-for="$carouselItemFilteredSlotName in $carouselItemFilteredSlotNames"
      :key="$carouselItemFilteredSlotName"
      #[$carouselItemFilteredSlotName]="scope"
    >
      <slot
        v-bind="scope"
        :key="$carouselItemFilteredSlotName"
        :name="getSlotName($props, $slots, $carouselItemFilteredSlotName)"
      />
    </template>
    <template #default="scope">
      <!-- default 插槽与 pro-carousel 中的 default 插槽存在命名冲突，使用 content 插槽替代 -->
      <slot
        v-if="hasSlot($props, $slots, 'content')"
        v-bind="scope"
        :name="getSlotName($props, $slots, 'content')"
      />
    </template>
  </el-carousel-item>
</template>

<script lang="ts">
export default {
  name: 'ProCarouselItem',
  inheritAttrs: false,
}
</script>

<script lang="ts" setup>
import {
  getFilteredSlotNames,
  getSlotName,
  hasSlot,
} from 'component-library-utils/slot'
import { ElCarouselItem } from 'element-plus'
import { ref, useSlots } from 'vue'
import type {
  CarouselItemExtendedProps,
  CarouselItemInstance,
} from './carousel-item'

/* 属性 */
const $props = defineProps<CarouselItemExtendedProps>()
/* 插槽 */
const $slots = useSlots()
const $carouselItemSlotNames = []
const $carouselItemFilteredSlotNames = getFilteredSlotNames(
  $props,
  $slots,
  $carouselItemSlotNames
)
/* 实例 */
const $carouselItemRef = ref<CarouselItemInstance>()

defineExpose({
  /* 实例 */
  ref: $carouselItemRef,
})
</script>
