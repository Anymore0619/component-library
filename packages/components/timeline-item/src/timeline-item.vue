<template>
  <el-timeline-item
    ref="$timelineItemRef"
    class="pro-timeline-item"
    v-bind="$attrs"
    v-on="$props"
  >
    <template
      v-for="$timelineItemFilteredSlotName in $timelineItemFilteredSlotNames"
      :key="$timelineItemFilteredSlotName"
      #[$timelineItemFilteredSlotName]="scope"
    >
      <slot
        v-bind="scope"
        :key="$timelineItemFilteredSlotName"
        :name="getSlotName($props, $slots, $timelineItemFilteredSlotName)"
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
  </el-timeline-item>
</template>

<script lang="ts">
export default {
  name: 'ProTimelineItem',
  inheritAttrs: false,
}
</script>

<script lang="ts" setup>
import {
  getFilteredSlotNames,
  getSlotName,
  hasSlot,
} from 'component-library-utils/slot'
import { ElTimelineItem } from 'element-plus'
import { ref, useSlots } from 'vue'
import type {
  TimelineItemExtendedProps,
  TimelineItemInstance,
} from './timeline-item'

/* 属性 */
const $props = defineProps<TimelineItemExtendedProps>()
/* 插槽 */
const $slots = useSlots()
const $timelineItemSlotNames = ['dot']
const $timelineItemFilteredSlotNames = getFilteredSlotNames(
  $props,
  $slots,
  $timelineItemSlotNames
)
/* 实例 */
const $timelineItemRef = ref<TimelineItemInstance>()

defineExpose({
  /* 实例 */
  ref: $timelineItemRef,
})
</script>
