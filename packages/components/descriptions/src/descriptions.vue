<template>
  <el-descriptions
    ref="$descriptionsRef"
    class="pro-descriptions"
    v-bind="$attrs"
    v-on="$props"
  >
    <template
      v-for="$descriptionsFilteredSlotName in $descriptionsFilteredSlotNames"
      :key="$descriptionsFilteredSlotName"
      #[$descriptionsFilteredSlotName]="scope"
    >
      <slot
        v-bind="scope"
        :key="$descriptionsFilteredSlotName"
        :name="getSlotName($props, $slots, $descriptionsFilteredSlotName)"
      />
    </template>
    <template #default="scope">
      <slot
        v-if="hasSlot($props, $slots, 'default')"
        v-bind="scope"
        :name="getSlotName($props, $slots, 'default')"
      />
      <template v-else>
        <template v-for="($item, $itemIndex) in $props.items" :key="$itemIndex">
          <el-descriptions-item
            v-if="!$item.hidden"
            ref="$proDescriptionsItemRef"
            :key="$itemIndex"
            v-bind="$item"
            :class-name="$item.labelClassName"
            :label="$item.title"
            :label-align="$item.titleAlign"
            :label-class-name="$item.titleClassName"
          >
            <!-- 直接传递所有插槽至子组件 -->
            <template
              v-for="$slotName in $slotNames"
              :key="$slotName"
              #[$slotName]="itemScope"
            >
              <slot v-bind="itemScope" :key="$slotName" :name="$slotName" />
            </template>
            <template #default="itemScope">
              <slot
                v-if="hasSlot($item, $slots, 'label')"
                v-bind="{ ...itemScope, ...$item, index: $itemIndex }"
                :name="getSlotName($item, $slots, 'label')"
              />
              <template v-else>{{ $item.label }}</template>
            </template>
            <template #label="itemScope">
              <slot
                v-if="hasSlot($item, $slots, 'title')"
                v-bind="{ ...itemScope, ...$item, index: $itemIndex }"
                :name="getSlotName($item, $slots, 'title')"
              />
              <template v-else>{{ $item.title }}</template>
            </template>
          </el-descriptions-item>
        </template>
      </template>
    </template>
  </el-descriptions>
</template>

<script lang="ts">
export default {
  name: 'ProDescriptions',
  inheritAttrs: false,
}
</script>

<script lang="ts" setup>
import {
  getFilteredSlotNames,
  getSlotName,
  hasSlot,
} from 'component-library-utils/slot'
import { ElDescriptions, ElDescriptionsItem } from 'element-plus'
import { ref, useSlots } from 'vue'
import type {
  DescriptionsExtendedProps,
  DescriptionsInstance,
  DescriptionsItemInstance,
} from './descriptions'

/* 属性 */
const $props = defineProps<DescriptionsExtendedProps>()
/* 插槽 */
const $slots = useSlots()
const $slotNames = Object.keys($slots)
const $descriptionsSlotNames = ['extra', 'title']
const $descriptionsFilteredSlotNames = getFilteredSlotNames(
  $props,
  $slots,
  $descriptionsSlotNames
)
/* 实例 */
const $descriptionsRef = ref<DescriptionsInstance>()
const $proDescriptionsItemRef = ref<DescriptionsItemInstance>()

defineExpose({
  /* 实例 */
  proDescriptionsItemRef: $proDescriptionsItemRef,
  ref: $descriptionsRef,
})
</script>
