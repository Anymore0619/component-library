<template>
  <el-timeline
    ref="$timelineRef"
    class="pro-timeline"
    v-bind="$attrs"
    v-on="$props"
  >
    <template
      v-for="$timelineFilteredSlotName in $timelineFilteredSlotNames"
      :key="$timelineFilteredSlotName"
      #[$timelineFilteredSlotName]="scope"
    >
      <slot
        v-bind="scope"
        :key="$timelineFilteredSlotName"
        :name="getSlotName($props, $slots, $timelineFilteredSlotName)"
      />
    </template>
    <template #default="scope">
      <slot
        v-if="hasSlot($props, $slots, 'default')"
        v-bind="scope"
        :name="getSlotName($props, $slots, 'default')"
      />
      <template v-else>
        <pro-timeline-item
          ref="$proTimelineItemRef"
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
        </pro-timeline-item>
      </template>
    </template>
  </el-timeline>
</template>

<script lang="ts">
export default {
  name: 'ProTimeline',
  inheritAttrs: false,
}
</script>

<script lang="ts" setup>
import ProTimelineItem from '../../timeline-item'
import {
  getFilteredSlotNames,
  getSlotName,
  hasSlot,
} from 'component-library-utils/slot'
import { ElTimeline } from 'element-plus'
import { ref, useSlots } from 'vue'
import type { TimelineExtendedProps, TimelineInstance } from './timeline'
import type { ProTimelineItemInstance } from '../../timeline-item'

/* 属性 */
const $props = defineProps<TimelineExtendedProps>()
/* 插槽 */
const $slots = useSlots()
const $slotNames = Object.keys($slots)
const $timelineSlotNames = []
const $timelineFilteredSlotNames = getFilteredSlotNames(
  $props,
  $slots,
  $timelineSlotNames
)
/* 实例 */
const $proTimelineItemRef = ref<ProTimelineItemInstance>()
const $timelineRef = ref<TimelineInstance>()

defineExpose({
  /* 实例 */
  proTimelineItemRef: $proTimelineItemRef,
  ref: $timelineRef,
})
</script>
