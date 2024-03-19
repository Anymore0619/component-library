<template>
  <el-dialog
    ref="$dialogRef"
    class="pro-dialog"
    v-bind="$attrs"
    v-on="$props"
    :append-to-body="$defaultAppendToBody"
    :before-close="$defaultBeforeClose"
    :destroy-on-close="$defaultDestroyOnClose"
    :draggable="$defaultDraggable"
  >
    <template
      v-for="$dialogFilteredSlotName in $dialogFilteredSlotNames"
      :key="$dialogFilteredSlotName"
      #[$dialogFilteredSlotName]="scope"
    >
      <slot
        v-bind="scope"
        :key="$dialogFilteredSlotName"
        :name="getSlotName($props, $slots, $dialogFilteredSlotName)"
      />
    </template>
    <template v-if="!$props.hideFooter" #footer="scope">
      <slot
        v-if="hasSlot($props, $slots, 'footer')"
        v-bind="scope"
        :name="getSlotName($props, $slots, 'footer')"
      />
      <template v-else>
        <div class="pro-dialog__footer">
          <pro-button
            v-if="!$props.hideCancelButton"
            v-bind="$props.cancelButtonProps"
            :click="$defaultCancelButtonClick"
            :label="$defaultCancelButtonLabel"
          />
          <pro-button
            v-if="!$props.hideConfirmButton"
            v-bind="$props.confirmButtonProps"
            :label="$defaultConfirmButtonLabel"
            :loading="$defaultConfirmButtonLoading"
            :type="$defaultConfirmButtonType"
          />
        </div>
      </template>
    </template>
  </el-dialog>
</template>

<script lang="ts">
export default {
  name: 'ProDialog',
  inheritAttrs: false,
}
</script>

<script lang="ts" setup>
import ProButton from '../../button'
import {
  getFilteredSlotNames,
  getSlotName,
  hasSlot,
} from 'component-library-utils/slot'
import { ElDialog } from 'element-plus'
import { isUndefined } from 'lodash-es'
import { ref, computed, watch, useSlots } from 'vue'
import type { DialogExtendedProps, DialogInstance } from './dialog'

/* 属性 */
const $props = withDefaults(defineProps<DialogExtendedProps>(), {
  appendToBody: undefined,
  destroyOnClose: undefined,
  draggable: undefined,
  hideCancelButton: undefined,
  hideConfirmButton: undefined,
  hideFooter: undefined,
  loading: undefined,
})
/* 事件 */
const $emits = defineEmits(['update:loading', 'update:model-value'])
/* 插槽 */
const $slots = useSlots()
const $dialogSlotNames = ['default', 'header', 'title']
const $dialogFilteredSlotNames = getFilteredSlotNames(
  $props,
  $slots,
  $dialogSlotNames
)
/* 实例 */
const $dialogRef = ref<DialogInstance>()
/* 辅助参数 */
const $closeDialog = () => {
  $props.beforeClose?.()
  $emits('update:loading', false)
  $emits('update:model-value', false)
}
/* 默认值（内部不做修改） */
const $defaultAppendToBody = computed(() => {
  if (!isUndefined($props.appendToBody)) {
    return $props.appendToBody
  }
  return true
})
const $defaultBeforeClose = () => {
  $closeDialog()
}
const $defaultCancelButtonClick = () => {
  $props.cancelButtonProps?.click?.()
  $closeDialog()
}
const $defaultCancelButtonLabel = computed(() => {
  if (!isUndefined($props.cancelButtonProps?.label)) {
    return $props.cancelButtonProps!.label
  }
  return '取消'
})
const $defaultConfirmButtonLabel = computed(() => {
  if (!isUndefined($props.confirmButtonProps?.label)) {
    return $props.confirmButtonProps!.label
  }
  return '确定'
})
const $defaultConfirmButtonLoading = computed(() => {
  if (!isUndefined($props.confirmButtonProps?.loading)) {
    return $props.confirmButtonProps!.loading || $internalLoading.value
  }
  return $internalLoading.value
})
const $defaultConfirmButtonType = computed(() => {
  if (!isUndefined($props.confirmButtonProps?.type)) {
    return $props.confirmButtonProps!.type
  }
  return 'primary'
})
const $defaultDestroyOnClose = computed(() => {
  if (!isUndefined($props.destroyOnClose)) {
    return $props.destroyOnClose
  }
  return true
})
const $defaultDraggable = computed(() => {
  if (!isUndefined($props.draggable)) {
    return $props.draggable
  }
  return true
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

defineExpose({
  /* 实例 */
  ref: $dialogRef,
})
</script>
