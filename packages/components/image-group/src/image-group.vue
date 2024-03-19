<template>
  <div
    :class="['pro-image-group', $attrs.class]"
    :style="[{ gap: $defaultGutter }, $attrs.style as any]"
  >
    <pro-image
      ref="$proImageRef"
      v-for="($image, $imageIndex) in $props.images"
      :key="$imageIndex"
      v-bind="$image"
      :border="$defaultImageBorder"
      :fit="$defaultImageFit"
      :height="$defaultImageHeight"
      :initial-index="$defaultImageInitialIndex($imageIndex)"
      :preview-src-list="$defaultPreviewSrcList"
      :width="$defaultImageWidth"
    >
      <!-- 直接传递所有插槽至子组件 -->
      <template
        v-for="$slotName in $slotNames"
        :key="$slotName"
        #[$slotName]="imageScope"
      >
        <slot v-bind="imageScope" :key="$slotName" :name="$slotName" />
      </template>
    </pro-image>
  </div>
</template>

<script lang="ts">
export default {
  name: 'ProImageGroup',
  inheritAttrs: false,
}
</script>

<script lang="ts" setup>
import ProImage from '../../image'
import { isUndefined } from 'lodash-es'
import { ref, computed, useSlots } from 'vue'
import type { ImageGroupExtendedProps } from './image-group'
import type { ProImageInstance } from '../../image'

/* 属性 */
const $props = defineProps<ImageGroupExtendedProps>()
/* 插槽 */
const $slots = useSlots()
const $slotNames = Object.keys($slots)
/* 实例 */
const $proImageRef = ref<ProImageInstance>()
/* 默认值（内部不做修改） */
const $defaultGutter = computed(() => {
  if (!isUndefined($props.gutter)) {
    return `${$props.gutter}px`
  }
  return '20px'
})
const $defaultImageBorder = computed(() => {
  if (!isUndefined($props.border)) {
    return $props.border
  }
  return false
})
const $defaultImageFit = computed(() => {
  if (!isUndefined($props.fit)) {
    return $props.fit
  }
  return 'contain'
})
const $defaultImageHeight = computed(() => {
  if (!isUndefined($props.height)) {
    return $props.height
  }
  return 100
})
const $defaultImageInitialIndex = computed(() => (imageIndex: number) => {
  if (!isUndefined($props.images?.[imageIndex].initialIndex)) {
    return $props.images?.[imageIndex].initialIndex
  }
  return imageIndex
})
const $defaultImageWidth = computed(() => {
  if (!isUndefined($props.width)) {
    return $props.width
  }
  return 100
})
const $defaultPreviewSrcList = computed(() => {
  return $props.images
    ?.filter(image => image.src)
    .map(image => {
      return image.src!
    })
})

defineExpose({
  /* 实例 */
  proImageRef: $proImageRef,
})
</script>
