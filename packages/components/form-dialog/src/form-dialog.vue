<template>
  <pro-dialog
    ref="$proDialogRef"
    :class="['pro-form-dialog', 'pro-form-dialog__dialog', $attrs.class]"
    :style="[$attrs.style]"
    v-bind="$props.dialogProps"
    v-model="$internalShow"
    v-model:loading="$internalLoading"
    :before-close="$defaultDialogBeforeClose"
    :confirm-button-props="$defaultDialogConfirmButtonProps"
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
        v-if="hasSlot($props, $slots, 'default')"
        v-bind="dialogScope"
        :name="getSlotName($props, $slots, 'default')"
      />
      <template v-else>
        <pro-form
          ref="$proFormRef"
          class="pro-form-dialog__form"
          v-bind="$props.formProps"
          :disabled="$defaultFormDisabled"
          :label-width="$defaultFormLabelWidth"
          :hide-action-buttons="$defaultFormHideActionButtons"
          :hide-collapse-button="$defaultFormHideCollapseButton"
        >
          <!-- 直接传递所有插槽至子组件 -->
          <template
            v-for="$slotName in $slotNames"
            :key="$slotName"
            #[$slotName]="formScope"
          >
            <slot v-bind="formScope" :key="$slotName" :name="$slotName" />
          </template>
        </pro-form>
      </template>
    </template>
  </pro-dialog>
</template>

<script lang="ts">
export default {
  name: 'ProFormDialog',
  inheritAttrs: false,
}
</script>

<script lang="ts" setup>
import ProDialog from '../../dialog'
import ProForm from '../../form'
import { getSlotName, hasSlot } from 'component-library-utils/slot'
import { ElMessage } from 'element-plus'
import { isUndefined } from 'lodash-es'
import { ref, inject, computed, watch, useSlots } from 'vue'
import type {
  FormDialogExtendedProps,
  ProFormDialogInjects,
} from './form-dialog'
import type { ProDialogInstance } from '../../dialog'
import type { ProFormInstance } from '../../form'

/* 属性 */
const $props = withDefaults(defineProps<FormDialogExtendedProps>(), {
  hideRequestSuccessMessage: undefined,
  loading: undefined,
  show: undefined,
})
/* 注入 */
const $injects = inject<ProFormDialogInjects>('proFormDialogInjects', {})
/* 事件 */
const $emits = defineEmits(['update:loading', 'update:show'])
/* 插槽 */
const $slots = useSlots()
const $slotNames = Object.keys($slots)
/* 实例 */
const $proDialogRef = ref<ProDialogInstance>()
const $proFormRef = ref<ProFormInstance>()
/* 辅助参数 */
const $closeDialog = () => {
  $props.dialogProps?.beforeClose?.()
  $proFormRef.value?.initializeForm()
  $proFormRef.value?.ref?.clearValidate()
  $internalLoading.value = false
  $internalShow.value = false
}
/* 默认值（内部不做修改） */
const $defaultDialogBeforeClose = () => {
  $closeDialog()
}
const $defaultDialogConfirmButtonProps = computed(() => {
  const confirmButtonProps = {
    click: () => {
      $proFormRef.value?.ref?.validate((isValid: boolean) => {
        if (isValid) {
          submit()
        }
      })
    },
  }
  if (!isUndefined($props.dialogProps?.confirmButtonProps)) {
    return Object.assign(
      confirmButtonProps,
      $props.dialogProps!.confirmButtonProps!
    )
  }
  return confirmButtonProps
})
const $defaultFormDisabled = computed(() => {
  if (!isUndefined($props.formProps?.disabled)) {
    return $props.formProps!.disabled || $internalLoading.value
  }
  return $internalLoading.value
})
const $defaultFormLabelWidth = computed(() => {
  if (!isUndefined($props.formProps?.labelWidth)) {
    return $props.formProps!.labelWidth
  }
  return 'auto'
})
const $defaultFormHideActionButtons = computed(() => {
  if (!isUndefined($props.formProps?.hideActionButtons)) {
    return $props.formProps!.hideActionButtons
  }
  return true
})
const $defaultFormHideCollapseButton = computed(() => {
  if (!isUndefined($props.formProps?.hideCollapseButton)) {
    return $props.formProps!.hideCollapseButton
  }
  return true
})
const $defaultResponseMapping = (response: any, params: any) => {
  if (!isUndefined($props.responseMapping)) {
    return $props.responseMapping(response, params)
  }
  if (!isUndefined($injects.responseMapping)) {
    return $injects.responseMapping(response, params)
  }
  return undefined
}
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
/* 获取请求参数（expose） */
const getParams = () => {
  let params = {
    ...$props.formProps!.model,
  }
  if ($props.customRequestParams) {
    params = $props.customRequestParams(params)
  }
  return params
}
/* 提交（expose） */
const submit = async () => {
  if ($props.requestApi) {
    $internalLoading.value = true
    try {
      const params = getParams()
      $props.beforeRequest?.(params)
      const res = await $props.requestApi?.(params)
      if (res) {
        $props.onRequestSuccess?.(res, params)
        if (!$props.hideRequestSuccessMessage) {
          ElMessage.success(
            $defaultResponseMapping(res, params)?.message || res.message
          )
        }
        $closeDialog()
        $props.onRequestComplete?.(res, params)
      }
    } catch (e) {
      $props.onRequestError?.(e) ??
        ((e: string) => {
          ElMessage.error(e)
        })
    }
    $internalLoading.value = false
    $props.afterRequest?.()
  }
}

defineExpose({
  /* 实例 */
  proDialogRef: $proDialogRef,
  proFormRef: $proFormRef,
  /* 扩展的方法 */
  getParams,
  submit,
})
</script>
