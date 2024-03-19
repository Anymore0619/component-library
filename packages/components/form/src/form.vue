<template>
  <el-form
    ref="$formRef"
    class="pro-form"
    v-bind="$attrs"
    v-on="$props"
    :disabled="$defaultDisabled"
    :inline="$defaultInline"
    :model="$internalModel"
    @submit="$onFormSubmit"
  >
    <template
      v-for="$formFilteredSlotName in $formFilteredSlotNames"
      :key="$formFilteredSlotName"
      #[$formFilteredSlotName]="scope"
    >
      <slot
        v-bind="scope"
        :key="$formFilteredSlotName"
        :name="getSlotName($props, $slots, $formFilteredSlotName)"
      />
    </template>
    <template #default="scope">
      <slot
        v-if="hasSlot($props, $slots, 'default')"
        v-bind="scope"
        :name="getSlotName($props, $slots, 'default')"
      />
      <template v-else-if="$defaultItems.length">
        <template v-if="$defaultInline">
          <pro-form-item
            ref="$proFormItemRef"
            v-for="($item, $itemIndex) in $defaultItems"
            :key="$itemIndex"
            v-bind="$item"
            v-model:item-value="
              $internalModel[$item.prop as keyof typeof $internalModel]
            "
            :disabled="$defaultDisabled"
          >
            <!-- 直接传递所有插槽至子组件 -->
            <template
              v-for="$slotName in $slotNames"
              :key="$slotName"
              #[$slotName]="itemScope"
            >
              <slot v-bind="itemScope" :key="$slotName" :name="$slotName" />
            </template>
          </pro-form-item>
          <pro-form-item v-if="!$props.hideActionButtons">
            <div class="pro-form__action-buttons">
              <pro-button
                v-if="!$props.hideSubmitButton"
                v-bind="$props.submitButtonProps"
                :click="$defaultSubmitButtonClick"
                :disabled="$defaultSubmitButtonDisabled"
                :label="$defaultSubmitButtonLabel"
                :loading="$defaultSubmitButtonLoading"
                :type="$defaultSubmitButtonType"
              />
              <pro-button
                v-if="!$props.hideResetButton"
                v-bind="$props.resetButtonProps"
                :click="$defaultResetButtonClick"
                :disabled="$defaultResetButtonDisabled"
                :label="$defaultResetButtonLabel"
                :loading="$defaultResetButtonLoading"
              />
              <pro-button
                v-if="!$props.hideClearButton"
                v-bind="$props.clearButtonProps"
                :click="$defaultClearButtonClick"
                :disabled="$defaultClearButtonDisabled"
                :label="$defaultClearButtonLabel"
                :loading="$defaultClearButtonLoading"
              />
              <div
                v-if="$slots['after-action-buttons']"
                class="pro-form__after-action-buttons"
              >
                <slot name="after-action-buttons" />
              </div>
            </div>
          </pro-form-item>
        </template>
        <template v-else>
          <el-row :gutter="$defaultGutter">
            <el-col
              v-for="($displayedItem, $displayedItemIndex) in $displayedItems"
              :key="$displayedItemIndex"
              :span="$displayedItem.span"
            >
              <template
                v-if="($displayedItem.itemType as any) === 'actionButtons'"
              >
                <pro-form-item
                  v-if="!$props.hideActionButtons"
                  ref="$proFormItemRef"
                >
                  <div
                    class="pro-form__action-buttons pro-form__action-buttons--right"
                  >
                    <pro-button
                      v-if="!$props.hideSubmitButton"
                      v-bind="$props.submitButtonProps"
                      :click="$defaultSubmitButtonClick"
                      :disabled="$defaultSubmitButtonDisabled"
                      :label="$defaultSubmitButtonLabel"
                      :loading="$defaultSubmitButtonLoading"
                      :type="$defaultSubmitButtonType"
                    />
                    <pro-button
                      v-if="!$props.hideResetButton"
                      v-bind="$props.resetButtonProps"
                      :click="$defaultResetButtonClick"
                      :disabled="$defaultResetButtonDisabled"
                      :label="$defaultResetButtonLabel"
                      :loading="$defaultResetButtonLoading"
                    />
                    <pro-button
                      v-if="!$props.hideClearButton"
                      v-bind="$props.clearButtonProps"
                      :click="$defaultClearButtonClick"
                      :disabled="$defaultClearButtonDisabled"
                      :label="$defaultClearButtonLabel"
                      :loading="$defaultClearButtonLoading"
                    />
                    <pro-button
                      v-if="!$hideCollapseButton"
                      v-bind="$props.collapseButtonProps"
                      :click="$defaultCollapseButtonClick"
                      :label="$defaultCollapseButtonLabel"
                      :text="$defaultCollapseButtonText"
                      :type="$defaultCollapseButtonType"
                    />
                    <div
                      v-if="$slots['after-action-buttons']"
                      class="pro-form__after-action-buttons"
                    >
                      <slot name="after-action-buttons" />
                    </div>
                  </div>
                </pro-form-item>
              </template>
              <template v-else>
                <pro-form-item
                  ref="$proFormItemRef"
                  v-bind="$displayedItem"
                  v-model:item-value="
                    $internalModel[
                      $displayedItem.prop as keyof typeof $internalModel
                    ]
                  "
                  :disabled="$defaultDisabled"
                >
                  <!-- 直接传递所有插槽至子组件 -->
                  <template
                    v-for="$slotName in $slotNames"
                    :key="$slotName"
                    #[$slotName]="itemScope"
                  >
                    <slot
                      v-bind="itemScope"
                      :key="$slotName"
                      :name="$slotName"
                    />
                  </template>
                </pro-form-item>
              </template>
            </el-col>
          </el-row>
        </template>
      </template>
      <template v-if="!$defaultItems.length">
        <pro-form-item v-if="!$props.hideActionButtons">
          <div class="pro-form__action-buttons">
            <pro-button
              v-if="!$props.hideSubmitButton"
              v-bind="$props.submitButtonProps"
              :click="$defaultSubmitButtonClick"
              :disabled="$defaultSubmitButtonDisabled"
              :label="$defaultSubmitButtonLabel"
              :loading="$defaultSubmitButtonLoading"
              :type="$defaultSubmitButtonType"
            />
            <pro-button
              v-if="!$props.hideResetButton"
              v-bind="$props.resetButtonProps"
              :click="$defaultResetButtonClick"
              :disabled="$defaultResetButtonDisabled"
              :label="$defaultResetButtonLabel"
              :loading="$defaultResetButtonLoading"
            />
            <pro-button
              v-if="!$props.hideClearButton"
              v-bind="$props.clearButtonProps"
              :click="$defaultClearButtonClick"
              :disabled="$defaultClearButtonDisabled"
              :label="$defaultClearButtonLabel"
              :loading="$defaultClearButtonLoading"
            />
            <div
              v-if="$slots['after-action-buttons']"
              class="pro-form__after-action-buttons"
            >
              <slot name="after-action-buttons" />
            </div>
          </div>
        </pro-form-item>
      </template>
    </template>
  </el-form>
</template>

<script lang="ts">
export default {
  name: 'ProForm',
  inheritAttrs: false,
}
</script>

<script lang="ts" setup>
import ProButton from '../../button'
import ProFormItem from '../../form-item'
import {
  getFilteredSlotNames,
  getSlotName,
  hasSlot,
} from 'component-library-utils/slot'
import { ElForm, ElRow, ElCol } from 'element-plus'
import {
  isArray,
  isBoolean,
  isNumber,
  isObject,
  isString,
  isUndefined,
  sum,
} from 'lodash-es'
import { ref, computed, watch, useSlots } from 'vue'
import type { FormExtendedProps, FormInstance } from './form'
import type {
  FormItemProp,
  ProFormItemInstance,
  ProFormItemProps,
} from '../../form-item'

/* 属性 */
const $props = withDefaults(defineProps<FormExtendedProps>(), {
  disabled: undefined,
  hideActionButtons: undefined,
  hideClearButton: undefined,
  hideCollapseButton: undefined,
  hideResetButton: undefined,
  hideSubmitButton: undefined,
  inline: undefined,
})
/* 插槽 */
const $slots = useSlots()
const $slotNames = Object.keys($slots)
const $formSlotNames = []
const $formFilteredSlotNames = getFilteredSlotNames(
  $props,
  $slots,
  $formSlotNames
)
/* 实例 */
const $formRef = ref<FormInstance>()
const $proFormItemRef = ref<ProFormItemInstance>()
/* 辅助参数 */
const $collapse = ref(true)
const $rowSpan = 24
const $hideCollapseButton = computed(() => {
  return (
    $props.hideCollapseButton ||
    sum(
      $defaultItems.value?.filter(item => !item.hidden).map(item => item.span)
    ) <=
      $rowSpan - $defaultActionButtonsSpan.value
  )
})
const $displayedItems = computed<ProFormItemProps[]>(() => {
  let items = $defaultItems.value?.filter(item => !item.hidden)
  let displayedItems: ProFormItemProps[] = []
  let totalSpan = 0
  items.forEach(item => {
    const span = item.span || $rowSpan
    if (
      !$props.hideActionButtons &&
      !$props.hideCollapseButton &&
      $collapse.value &&
      totalSpan + span > $rowSpan - $defaultActionButtonsSpan.value
    ) {
      displayedItems.push({
        ...item,
        span: 0,
      })
    } else {
      displayedItems.push({
        ...item,
        span,
      })
      totalSpan += span
    }
  })
  if (!$props.hideActionButtons) {
    displayedItems = [
      ...displayedItems,
      {
        itemType: 'actionButtons' as any,
        span: $rowSpan - (totalSpan % $rowSpan),
      },
    ]
  }
  return displayedItems
})
const $hasClonedModel = ref(false)
const $clonedModel: Record<string, any> = {}
const $onFormSubmit = (event: SubmitEvent) => {
  event.preventDefault()
}
/* 默认值（内部不做修改）*/
const $defaultActionButtonsSpan = computed(() => {
  if (!isUndefined($props.actionButtonsSpan)) {
    return $props.actionButtonsSpan
  }
  return 6
})
const $defaultClearButtonClick = () => {
  clearFields()
  $props.clearButtonProps?.click?.()
}
const $defaultClearButtonDisabled = computed(() => {
  if (!isUndefined($props.clearButtonProps?.disabled)) {
    return $props.clearButtonProps!.disabled || $defaultDisabled.value
  }
  return $defaultDisabled.value
})
const $defaultClearButtonLabel = computed(() => {
  if (!isUndefined($props.clearButtonProps?.label)) {
    return $props.clearButtonProps!.label
  }
  return '清空'
})
const $defaultClearButtonLoading = computed(() => {
  if (!isUndefined($props.clearButtonProps?.loading)) {
    return $props.clearButtonProps!.loading || $defaultDisabled.value
  }
  return $defaultDisabled.value
})
const $defaultCollapseButtonClick = () => {
  $collapse.value = !$collapse.value
  $props.collapseButtonProps?.click?.()
}
const $defaultCollapseButtonLabel = computed(() => {
  if (!isUndefined($props.collapseButtonProps?.label)) {
    return $props.collapseButtonProps!.label
  }
  return $collapse.value ? '展开' : '收起'
})
const $defaultCollapseButtonText = computed(() => {
  if (!isUndefined($props.collapseButtonProps?.text)) {
    return $props.collapseButtonProps!.text
  }
  return true
})
const $defaultCollapseButtonType = computed(() => {
  if (!isUndefined($props.collapseButtonProps?.type)) {
    return $props.collapseButtonProps!.type
  }
  return 'primary'
})
const $defaultDisabled = computed(() => {
  if (!isUndefined($props.disabled)) {
    return $props.disabled
  }
  return false
})
const $defaultGutter = computed(() => {
  if (!isUndefined($props.gutter)) {
    return $props.gutter
  }
  return 32
})
const $defaultInline = computed(() => {
  if (!isUndefined($props.inline)) {
    return $props.inline
  }
  return false
})
const $defaultItems = computed(() => {
  if (!isUndefined($props.items)) {
    return $props.items
      .slice()
      .sort((a, b) => (a.order || 9999) - (b.order || 9999))
  }
  return []
})
const $defaultResetButtonClick = () => {
  initializeForm()
  $formRef.value?.clearValidate()
  $props.afterReset?.()
  $props.resetButtonProps?.click?.()
}
const $defaultResetButtonDisabled = computed(() => {
  if (!isUndefined($props.resetButtonProps?.disabled)) {
    return $props.resetButtonProps!.disabled || $defaultDisabled.value
  }
  return $defaultDisabled.value
})
const $defaultResetButtonLabel = computed(() => {
  if (!isUndefined($props.resetButtonProps?.label)) {
    return $props.resetButtonProps!.label
  }
  return '重置'
})
const $defaultResetButtonLoading = computed(() => {
  if (!isUndefined($props.resetButtonProps?.loading)) {
    return $props.resetButtonProps!.loading || $defaultDisabled.value
  }
  return $defaultDisabled.value
})
const $defaultSubmitButtonClick = () => {
  $formRef.value?.validate(isValid => {
    if (isValid) {
      $props.submitButtonProps?.click?.()
    }
  })
}
const $defaultSubmitButtonDisabled = computed(() => {
  if (!isUndefined($props.submitButtonProps?.disabled)) {
    return $props.submitButtonProps!.disabled || $defaultDisabled.value
  }
  return $defaultDisabled.value
})
const $defaultSubmitButtonLabel = computed(() => {
  if (!isUndefined($props.submitButtonProps?.label)) {
    return $props.submitButtonProps!.label
  }
  return '提交'
})
const $defaultSubmitButtonLoading = computed(() => {
  if (!isUndefined($props.submitButtonProps?.loading)) {
    return $props.submitButtonProps!.loading || $defaultDisabled.value
  }
  return $defaultDisabled.value
})
const $defaultSubmitButtonType = computed(() => {
  if (!isUndefined($props.submitButtonProps?.type)) {
    return $props.submitButtonProps!.type
  }
  return 'primary'
})
/* 默认值（内部可做修改）*/
let $internalModel: Record<string, any> = ref({})
watch(
  () => $props.model,
  value => {
    if (!isUndefined(value)) {
      $internalModel.value = value
    }
    if (!$hasClonedModel.value) {
      $hasClonedModel.value = true
      $clonedModel.value = Object.assign({}, value)
    }
  },
  {
    deep: true,
    immediate: true,
  }
)
/* 清空表单（expose） */
const clearFields = (prop?: FormItemProp) => {
  let keys: string[] = []
  if (prop) {
    if (isArray(prop)) {
      keys = prop as string[]
    } else {
      keys = [prop as string]
    }
  } else {
    keys = Object.keys($internalModel.value)
  }
  keys.forEach(key => {
    if (isArray($internalModel.value[key])) {
      $internalModel.value[key] = []
    } else if (
      isBoolean($internalModel.value[key]) ||
      isNumber($internalModel.value[key]) ||
      isObject($internalModel.value[key]) ||
      isString($internalModel.value[key])
    ) {
      $internalModel.value[key] = null
    }
  })
}
/* 初始化表单（expose） */
const initializeForm = (prop?: FormItemProp) => {
  let keys: string[] = []
  if (prop) {
    if (isArray(prop)) {
      keys = prop as string[]
    } else {
      keys = [prop as string]
    }
  } else {
    keys = Object.keys($clonedModel.value)
  }
  keys.forEach(key => {
    $internalModel.value[key] = $clonedModel.value[key]
  })
}

defineExpose({
  /* 实例 */
  proFormItemRef: $proFormItemRef,
  ref: $formRef,
  /* 扩展的方法 */
  clearFields,
  initializeForm,
})
</script>
