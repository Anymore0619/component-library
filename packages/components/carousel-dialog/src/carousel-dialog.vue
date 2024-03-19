<template>
  <pro-dialog
    ref="$proDialogRef"
    :class="[
      'pro-carousel-dialog',
      'pro-carousel-dialog__dialog',
      $attrs.class,
    ]"
    :style="[$attrs.style]"
    v-bind="$props.dialogProps"
    v-model="$internalShow"
    v-model:loading="$internalLoading"
    :align-center="$defaultDialogAlignCenter"
    :before-close="$defaultDialogBeforeClose"
    :hide-footer="$defaultDialogHideFooter"
    :width="$defaultDialogWidth"
  >
    <!-- 直接传递所有插槽至子组件 -->
    <template
      v-for="$slotName in $slotNames"
      :key="$slotName"
      #[$slotName]="dialogScope"
    >
      <slot v-bind="dialogScope" :key="$slotName" :name="$slotName" />
    </template>
    <template #default="dialogScope">
      <slot
        v-if="hasSlot($props.dialogProps || {}, $slots, 'default')"
        v-bind="dialogScope"
        :name="getSlotName($props.dialogProps || {}, $slots, 'default')"
      />
      <template v-else>
        <pro-carousel
          ref="$proCarouselRef"
          class="pro-carousel-dialog__carousel"
          v-bind="$props.carouselProps"
          :autoplay="$defaultCarouselAutoplay"
          :trigger="$defaultCarouselTrigger"
        >
          <!-- 直接传递所有插槽至子组件 -->
          <template
            v-for="$slotName in $slotNames"
            :key="$slotName"
            #[$slotName]="carouselScope"
          >
            <slot v-bind="carouselScope" :key="$slotName" :name="$slotName" />
          </template>
        </pro-carousel>
      </template>
    </template>
  </pro-dialog>
</template>

<script lang="ts">
export default {
  name: 'ProCarouselDialog',
  inheritAttrs: false,
}
</script>

<script lang="ts" setup>
import ProDialog from '../../dialog'
import ProCarousel from '../../carousel'
import { getSlotName, hasSlot } from 'component-library-utils/slot'
import { isUndefined } from 'lodash-es'
import { ref, computed, watch, useSlots } from 'vue'
import type { ProCarouselInstance } from '../../carousel'
import type { CarouselDialogExtendedProps } from './carousel-dialog'
import type { ProDialogInstance } from '../../dialog'

/* 属性 */
const $props = withDefaults(defineProps<CarouselDialogExtendedProps>(), {
  loading: undefined,
  show: undefined,
})
/* 事件 */
const $emits = defineEmits(['update:loading', 'update:show'])
/* 插槽 */
const $slots = useSlots()
const $slotNames = Object.keys($slots)
/* 实例 */
const $proCarouselRef = ref<ProCarouselInstance>()
const $proDialogRef = ref<ProDialogInstance>()
/* 辅助参数 */
const $closeDialog = () => {
  $props.dialogProps?.beforeClose?.()
  $internalLoading.value = false
  $internalShow.value = false
}
/* 默认值（内部不做修改） */
const $defaultCarouselAutoplay = computed(() => {
  if (!isUndefined($props.carouselProps?.autoplay)) {
    return $props.carouselProps!.autoplay
  }
  return false
})
const $defaultCarouselTrigger = computed(() => {
  if (!isUndefined($props.carouselProps?.trigger)) {
    return $props.carouselProps!.trigger
  }
  return 'click'
})
const $defaultDialogAlignCenter = computed(() => {
  if (!isUndefined($props.dialogProps?.alignCenter)) {
    return $props.dialogProps!.alignCenter
  }
  return true
})
const $defaultDialogBeforeClose = () => {
  $closeDialog()
}
const $defaultDialogHideFooter = computed(() => {
  if (!isUndefined($props.dialogProps?.hideFooter)) {
    return $props.dialogProps!.hideFooter
  }
  return true
})
const $defaultDialogWidth = computed(() => {
  if (!isUndefined($props.dialogProps?.width)) {
    return $props.dialogProps!.width
  }
  return '80%'
})
/* 默认值（内部可做修改） */
let $internalLoading = ref(false)
watch(
  () => $props.loading,
  value => {
    if (!isUndefined(value)) {
      $internalLoading.value = value
    }
  },
  {
    immediate: true,
  }
)
watch(
  () => $internalLoading.value,
  value => {
    $emits('update:loading', value)
  }
)
let $internalShow = ref(false)
watch(
  () => $props.show,
  value => {
    if (!isUndefined(value)) {
      $internalShow.value = value
    }
  },
  {
    immediate: true,
  }
)
watch(
  () => $internalShow.value,
  value => {
    $emits('update:show', value)
  }
)

defineExpose({
  /* 实例 */
  proCarouselRef: $proCarouselRef,
  proDialogRef: $proDialogRef,
})
</script>
