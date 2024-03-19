<template>
  <el-checkbox-group
    :class="[
      'pro-checkbox-group',
      $defaultAddable ? 'pro-checkbox-group--addable' : '',
    ]"
    ref="$checkboxGroupRef"
    v-bind="$attrs"
    v-on="$props"
  >
    <template
      v-for="$checkboxGroupFilteredSlotName in $checkboxGroupFilteredSlotNames"
      :key="$checkboxGroupFilteredSlotName"
      #[$checkboxGroupFilteredSlotName]="scope"
    >
      <slot
        v-bind="scope"
        :key="$checkboxGroupFilteredSlotName"
        :name="getSlotName($props, $slots, $checkboxGroupFilteredSlotName)"
      />
    </template>
    <template #default="scope">
      <slot
        v-if="hasSlot($props, $slots, 'default')"
        v-bind="scope"
        :name="getSlotName($props, $slots, 'default')"
      />
      <template v-else>
        <pro-checkbox
          ref="$proCheckboxRef"
          v-for="($checkbox, $checkboxIndex) in $props.checkboxes"
          :key="$checkboxIndex"
          v-bind="$checkbox"
        >
          <!-- 直接传递所有插槽至子组件 -->
          <template
            v-for="$slotName in $slotNames"
            :key="$slotName"
            #[$slotName]="checkboxScope"
          >
            <slot v-bind="checkboxScope" :key="$slotName" :name="$slotName" />
          </template>
        </pro-checkbox>
        <template v-if="$defaultAddable">
          <ProButton
            v-if="$hideAddInput"
            class="pro-checkbox-group__add-button"
            v-bind="$props.addButtonProps"
            :circle="$defaultAddButtonCircle"
            :click="$defaultAddButtonClick"
            :icon="$defaultAddButtonIcon"
            :size="$defaultAddButtonSize"
            :type="$defaultAddButtonType"
          />
          <ProInput
            v-else
            class="pro-checkbox-group__add-input"
            ref="$addInputRef"
            v-bind="$props.addInputProps"
            v-model="$addInputModelValue"
            :blur="$defaultAddInputBlur"
            :size="$defaultAddInputSize"
            @keyup.enter="$addCheckbox"
          />
        </template>
      </template>
    </template>
  </el-checkbox-group>
</template>

<script lang="ts">
export default {
  name: 'ProCheckboxGroup',
  inheritAttrs: false,
}
</script>

<script lang="ts" setup>
import ProButton from '../../button'
import ProCheckbox from '../../checkbox'
import ProInput from '../../input'
import { Plus } from '@element-plus/icons-vue'
import {
  getFilteredSlotNames,
  getSlotName,
  hasSlot,
} from 'component-library-utils/slot'
import { ElCheckboxGroup } from 'element-plus'
import { isUndefined } from 'lodash-es'
import { ref, computed, watch, useSlots, nextTick } from 'vue'
import type {
  CheckboxGroupExtendedProps,
  CheckboxGroupInstance,
} from './checkbox-group'
import type { ProCheckboxInstance, ProCheckboxProps } from '../../checkbox'
import type { ProInputInstance } from '../../input'

/* 属性 */
const $props = withDefaults(defineProps<CheckboxGroupExtendedProps>(), {
  addable: undefined,
})
/* 事件 */
const $emits = defineEmits(['update:checkboxes'])
/* 插槽 */
const $slots = useSlots()
const $slotNames = Object.keys($slots)
const $checkboxGroupSlotNames = []
const $checkboxGroupFilteredSlotNames = getFilteredSlotNames(
  $props,
  $slots,
  $checkboxGroupSlotNames
)
/* 实例 */
const $checkboxGroupRef = ref<CheckboxGroupInstance>()
const $proCheckboxRef = ref<ProCheckboxInstance>()
/* 辅助参数 */
const $addCheckbox = () => {
  if (
    $addInputModelValue.value &&
    !$internalCheckboxes.value.find(
      checkbox =>
        checkbox.label === $addInputModelValue.value ||
        checkbox.value === $addInputModelValue.value
    )
  ) {
    $internalCheckboxes.value.push({
      label: $addInputModelValue.value as string,
      value: $addInputModelValue.value,
    })
  }
  $hideAddInput.value = true
  $addInputModelValue.value = ''
}
const $addInputModelValue = ref('')
const $addInputRef = ref<ProInputInstance>()
const $hideAddInput = ref(true)
/* 默认值（内部不做修改） */
const $defaultAddable = computed(() => {
  if (!isUndefined($props.addable)) {
    return $props.addable
  }
  return false
})
const $defaultAddButtonCircle = computed(() => {
  if (!isUndefined($props.addButtonProps?.circle)) {
    return $props.addButtonProps?.circle
  }
  return true
})
const $defaultAddButtonClick = () => {
  $hideAddInput.value = false
  nextTick(() => {
    $addInputRef.value!.ref!.focus()
  })
  $props.addButtonProps?.click?.()
}
const $defaultAddButtonIcon = computed(() => {
  if (!isUndefined($props.addButtonProps?.icon)) {
    return $props.addButtonProps?.icon
  }
  return Plus
})
const $defaultAddButtonSize = computed(() => {
  if (!isUndefined($props.addButtonProps?.size)) {
    return $props.addButtonProps?.size
  }
  return 'small'
})
const $defaultAddButtonType = computed(() => {
  if (!isUndefined($props.addButtonProps?.type)) {
    return $props.addButtonProps?.type
  }
  return 'primary'
})
const $defaultAddInputBlur = () => {
  $addCheckbox()
  $props.addInputProps?.blur?.()
}
const $defaultAddInputSize = computed(() => {
  if (!isUndefined($props.addButtonProps?.size)) {
    return $props.addButtonProps?.size
  }
  return 'small'
})
/* 默认值（内部可做修改）*/
let $internalCheckboxes = ref<ProCheckboxProps[]>([])
watch(
  () => $props.checkboxes,
  value => {
    if (!isUndefined(value)) {
      $internalCheckboxes.value = value
    }
  },
  {
    deep: true,
    immediate: true,
  }
)
watch(
  () => $internalCheckboxes.value,
  value => {
    $emits('update:checkboxes', value)
  }
)

defineExpose({
  /* 实例 */
  proCheckboxRef: $proCheckboxRef,
  ref: $checkboxGroupRef,
})
</script>
