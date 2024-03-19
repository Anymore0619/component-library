<template>
  <el-image
    ref="$imageRef"
    :class="['pro-image', $props.border ? 'pro-image--border' : '']"
    :style="{ height: $defaultHeight, width: $defaultWidth }"
    v-bind="$attrs"
    v-on="$props"
    :fit="$defaultFit"
    :preview-src-list="$defaultPreviewSrcList"
    :preview-teleported="$defaultPreviewTeleported"
    :src="$defaultSrc"
  >
    <template
      v-for="$imageFilteredSlotName in $imageFilteredSlotNames"
      :key="$imageFilteredSlotName"
      #[$imageFilteredSlotName]="scope"
    >
      <slot
        v-bind="scope"
        :key="$imageFilteredSlotName"
        :name="getSlotName($props, $slots, $imageFilteredSlotName)"
      />
    </template>
  </el-image>
</template>

<script lang="ts">
export default {
  name: 'ProImage',
  inheritAttrs: false,
}
</script>

<script lang="ts" setup>
import { getFilteredSlotNames, getSlotName } from 'component-library-utils/slot'
import { ElImage } from 'element-plus'
import { isUndefined } from 'lodash-es'
import { ref, computed, useSlots } from 'vue'
import type { ImageExtendedProps, ImageInstance } from './image'

/* 属性 */
const $props = withDefaults(defineProps<ImageExtendedProps>(), {
  border: undefined,
  previewTeleported: undefined,
})
/* 插槽 */
const $slots = useSlots()
const $imageSlotNames = ['error', 'placeholder', 'viewer']
const $imageFilteredSlotNames = getFilteredSlotNames(
  $props,
  $slots,
  $imageSlotNames
)
/* 实例 */
const $imageRef = ref<ImageInstance>()
/* 默认值（内部不做修改） */
const $defaultFit = computed(() => {
  if (!isUndefined($props.fit)) {
    return $props.fit
  }
  return 'contain'
})
const $defaultHeight = computed(() => {
  if (!isUndefined($props.height)) {
    return `${$props.height}px`
  }
  return '100px'
})
const $defaultPreviewSrcList = computed(() => {
  if (!isUndefined($props.previewSrcList)) {
    return $props.previewSrcList
  }
  if (!isUndefined($props.src)) {
    return [$props.src]
  }
  return []
})
const $defaultPreviewTeleported = computed(() => {
  if (!isUndefined($props.previewTeleported)) {
    return $props.previewTeleported
  }
  return true
})
const $defaultSrc = computed(() => {
  if (!isUndefined($props.src)) {
    return $props.src
  }
  return ''
})
const $defaultWidth = computed(() => {
  if (!isUndefined($props.width)) {
    return `${$props.width}px`
  }
  return '100px'
})

defineExpose({
  /* 实例 */
  ref: $imageRef,
})
</script>
