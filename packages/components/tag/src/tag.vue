<template>
  <el-tag
    ref="$tagRef"
    class="pro-tag"
    v-bind="$attrs"
    v-on="$props"
    :disable-transitions="$defaultDisableTransitions"
  >
    <template
      v-for="$tagFilteredSlotName in $tagFilteredSlotNames"
      :key="$tagFilteredSlotName"
      #[$tagFilteredSlotName]="scope"
    >
      <slot
        v-bind="scope"
        :key="$tagFilteredSlotName"
        :name="getSlotName($props, $slots, $tagFilteredSlotName)"
      />
    </template>
    <template #default="scope">
      <slot
        v-if="hasSlot($props, $slots, 'default')"
        v-bind="scope"
        :name="getSlotName($props, $slots, 'default')"
      />
      <template v-else>{{ $props.label }}</template>
    </template>
  </el-tag>
</template>

<script lang="ts">
export default {
  name: 'ProTag',
  inheritAttrs: false,
}
</script>

<script lang="ts" setup>
import {
  getFilteredSlotNames,
  getSlotName,
  hasSlot,
} from 'component-library-utils/slot'
import { ElTag } from 'element-plus'
import { isUndefined } from 'lodash-es'
import { ref, computed, useSlots } from 'vue'
import type { TagExtendedProps, TagInstance } from './tag'

/* 属性 */
const $props = withDefaults(defineProps<TagExtendedProps>(), {
  disableTransitions: undefined,
})
/* 插槽 */
const $slots = useSlots()
const $tagSlotNames = []
const $tagFilteredSlotNames = getFilteredSlotNames(
  $props,
  $slots,
  $tagSlotNames
)
/* 实例 */
const $tagRef = ref<TagInstance>()
/* 默认值（内部不做修改） */
const $defaultDisableTransitions = computed(() => {
  if (!isUndefined($props.disableTransitions)) {
    return $props.disableTransitions
  }
  return true
})

defineExpose({
  /* 实例 */
  ref: $tagRef,
})
</script>
