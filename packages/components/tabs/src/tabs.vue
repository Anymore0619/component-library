<template>
  <el-tabs ref="$tabsRef" class="pro-tabs" v-bind="$attrs" v-on="$props">
    <template
      v-for="$tabsFilteredSlotName in $tabsFilteredSlotNames"
      :key="$tabsFilteredSlotName"
      #[$tabsFilteredSlotName]="scope"
    >
      <slot
        v-bind="scope"
        :key="$tabsFilteredSlotName"
        :name="getSlotName($props, $slots, $tabsFilteredSlotName)"
      />
    </template>
    <template #default="scope">
      <slot
        v-if="hasSlot($props, $slots, 'default')"
        v-bind="scope"
        :name="getSlotName($props, $slots, 'default')"
      />
      <template v-else>
        <pro-tab-pane
          ref="$tabPaneRef"
          v-for="($pane, $paneIndex) in $props.panes"
          :key="$paneIndex"
          v-bind="$pane"
          :disabled="$defaultDisabled"
        >
          <!-- 直接传递所有插槽至子组件 -->
          <template
            v-for="$slotName in $slotNames"
            :key="$slotName"
            #[$slotName]="paneScope"
          >
            <slot v-bind="paneScope" :key="$slotName" :name="$slotName" />
          </template>
        </pro-tab-pane>
      </template>
    </template>
  </el-tabs>
</template>

<script lang="ts">
export default {
  name: 'ProTabs',
  inheritAttrs: false,
}
</script>

<script lang="ts" setup>
import ProTabPane from '../../tab-pane'
import {
  getFilteredSlotNames,
  getSlotName,
  hasSlot,
} from 'component-library-utils/slot'
import { ElTabs } from 'element-plus'
import { isUndefined } from 'lodash-es'
import { ref, computed, useSlots } from 'vue'
import type { TabsExtendedProps, TabsInstance } from './tabs'
import type { ProTabPaneInstance } from '../../tab-pane'

/* 属性 */
const $props = withDefaults(defineProps<TabsExtendedProps>(), {
  disabled: undefined,
})
/* 插槽 */
const $slots = useSlots()
const $slotNames = Object.keys($slots)
const $tabsSlotNames = []
const $tabsFilteredSlotNames = getFilteredSlotNames(
  $props,
  $slots,
  $tabsSlotNames
)
/* 实例 */
const $tabPaneRef = ref<ProTabPaneInstance>()
const $tabsRef = ref<TabsInstance>()
/* 默认值（内部不做修改） */
const $defaultDisabled = computed(() => {
  if (!isUndefined($props.disabled)) {
    return $props.disabled
  }
  return false
})

defineExpose({
  /* 实例 */
  ref: $tabsRef,
  tabPaneRef: $tabPaneRef,
})
</script>
