<template>
  <el-tab-pane
    v-if="!$props.hidden"
    ref="$tabPaneRef"
    class="pro-tabPane"
    v-bind="$attrs"
    v-on="$props"
  >
    <template
      v-for="$tabPaneFilteredSlotName in $tabPaneFilteredSlotNames"
      :key="$tabPaneFilteredSlotName"
      #[$tabPaneFilteredSlotName]="scope"
    >
      <slot
        v-bind="scope"
        :key="$tabPaneFilteredSlotName"
        :name="getSlotName($props, $slots, $tabPaneFilteredSlotName)"
      />
    </template>
    <template #default="scope">
      <!-- default 插槽与 pro-tabs 中的 default 插槽存在命名冲突，使用 content 插槽替代 -->
      <slot
        v-if="hasSlot($props, $slots, 'content')"
        v-bind="scope"
        :name="getSlotName($props, $slots, 'content')"
      />
    </template>
  </el-tab-pane>
</template>

<script lang="ts">
export default {
  name: 'ProTabPane',
  inheritAttrs: false,
}
</script>

<script lang="ts" setup>
import {
  getFilteredSlotNames,
  getSlotName,
  hasSlot,
} from 'component-library-utils/slot'
import { ElTabPane } from 'element-plus'
import { ref, useSlots } from 'vue'
import type { TabPaneExtendedProps, TabPaneInstance } from './tab-pane'

/* 属性 */
const $props = withDefaults(defineProps<TabPaneExtendedProps>(), {
  hidden: undefined,
})
/* 插槽 */
const $slots = useSlots()
const $tabPaneSlotNames = ['label']
const $tabPaneFilteredSlotNames = getFilteredSlotNames(
  $props,
  $slots,
  $tabPaneSlotNames
)
/* 实例 */
const $tabPaneRef = ref<TabPaneInstance>()

defineExpose({
  /* 实例 */
  ref: $tabPaneRef,
})
</script>
