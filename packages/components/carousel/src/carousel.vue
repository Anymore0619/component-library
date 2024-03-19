<template>
  <el-carousel
    ref="$carouselRef"
    class="pro-carousel"
    v-bind="$attrs"
    v-on="$props"
  >
    <template
      v-for="$carouselFilteredSlotName in $carouselFilteredSlotNames"
      :key="$carouselFilteredSlotName"
      #[$carouselFilteredSlotName]="scope"
    >
      <slot
        v-bind="scope"
        :key="$carouselFilteredSlotName"
        :name="getSlotName($props, $slots, $carouselFilteredSlotName)"
      />
    </template>
    <template #default="scope">
      <slot
        v-if="hasSlot($props, $slots, 'default')"
        v-bind="scope"
        :name="getSlotName($props, $slots, 'default')"
      />
      <template v-else>
        <pro-carousel-item
          ref="$proCarouselItemRef"
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
            <slot
              v-bind="{ ...itemScope, ...$item, index: $itemIndex }"
              :key="$slotName"
              :name="$slotName"
            />
          </template>
        </pro-carousel-item>
      </template>
    </template>
  </el-carousel>
</template>

<script lang="ts">
export default {
  name: 'ProCarousel',
  inheritAttrs: false,
}
</script>

<script lang="ts" setup>
import ProCarouselItem from '../../carousel-item'
import {
  getFilteredSlotNames,
  getSlotName,
  hasSlot,
} from 'component-library-utils/slot'
import { ElCarousel } from 'element-plus'
import { ref, useSlots } from 'vue'
import type { CarouselExtendedProps, CarouselInstance } from './carousel'
import type { ProCarouselItemInstance } from '../../carousel-item'

/* 属性 */
const $props = defineProps<CarouselExtendedProps>()
/* 插槽 */
const $slots = useSlots()
const $slotNames = Object.keys($slots)
const $carouselSlotNames = []
const $carouselFilteredSlotNames = getFilteredSlotNames(
  $props,
  $slots,
  $carouselSlotNames
)
/* 实例 */
const $carouselRef = ref<CarouselInstance>()
const $proCarouselItemRef = ref<ProCarouselItemInstance>()

defineExpose({
  /* 实例 */
  proCarouselItemRef: $proCarouselItemRef,
  ref: $carouselRef,
})
</script>
