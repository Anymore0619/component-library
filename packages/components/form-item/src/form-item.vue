<template>
  <el-form-item
    v-if="!$props.hidden"
    ref="$formItemRef"
    class="pro-form-item"
    v-bind="$attrs"
    v-on="$props"
    :label="$defaultLabel"
  >
    <template
      v-for="$formItemFilteredSlotName in $formItemFilteredSlotNames"
      :key="$formItemFilteredSlotName"
      #[$formItemFilteredSlotName]="scope"
    >
      <slot
        v-bind="scope"
        :key="$formItemFilteredSlotName"
        :name="getSlotName($props, $slots, $formItemFilteredSlotName)"
      />
    </template>
    <template #default="scope">
      <!-- default 插槽与 pro-form-item 中的 default 插槽存在命名冲突，使用 content 插槽替代 -->
      <slot
        v-if="hasSlot($props, $slots, 'content')"
        v-bind="scope"
        :name="getSlotName($props, $slots, 'content')"
      />
      <slot
        v-else-if="hasSlot($props, $slots, 'default')"
        v-bind="scope"
        :name="getSlotName($props, $slots, 'default')"
      />
      <template v-else>
        <component
          v-if="$props.itemType === 'text'"
          ref="$itemComponentRef"
          v-bind="$props.itemProps"
          :is="$defaultItemComponent"
          :label="$internalItemValue"
        >
          <!-- 直接传递所有插槽至子组件 -->
          <template
            v-for="$slotName in $slotNames"
            :key="$slotName"
            #[$slotName]="componentScope"
          >
            <slot v-bind="componentScope" :key="$slotName" :name="$slotName" />
          </template>
        </component>
        <component
          v-else-if="
            $props.itemType === 'tree' || $props.itemType === 'virtualizedTree'
          "
          ref="$itemComponentRef"
          v-bind="$props.itemProps"
          v-model:checked-nodes="$internalItemValue"
          :is="$defaultItemComponent"
        >
          <!-- 直接传递所有插槽至子组件 -->
          <template
            v-for="$slotName in $slotNames"
            :key="$slotName"
            #[$slotName]="componentScope"
          >
            <slot v-bind="componentScope" :key="$slotName" :name="$slotName" />
          </template>
        </component>
        <component
          v-else-if="$props.itemType === 'upload'"
          ref="$itemComponentRef"
          v-bind="$props.itemProps"
          v-model:file-list="$internalItemValue"
          :is="$defaultItemComponent"
        >
          <!-- 直接传递所有插槽至子组件 -->
          <template
            v-for="$slotName in $slotNames"
            :key="$slotName"
            #[$slotName]="componentScope"
          >
            <slot v-bind="componentScope" :key="$slotName" :name="$slotName" />
          </template>
        </component>
        <component
          v-else
          ref="$itemComponentRef"
          v-bind="$props.itemProps"
          v-model="$internalItemValue"
          :is="$defaultItemComponent"
          :placeholder="$defaultPlaceholder"
        >
          <!-- 直接传递所有插槽至子组件 -->
          <template
            v-for="$slotName in $slotNames"
            :key="$slotName"
            #[$slotName]="componentScope"
          >
            <slot v-bind="componentScope" :key="$slotName" :name="$slotName" />
          </template>
        </component>
      </template>
    </template>
  </el-form-item>
</template>

<script lang="ts">
export default {
  name: 'ProFormItem',
  inheritAttrs: false,
}
</script>

<script lang="ts" setup>
import ProAutocomplete from '../../autocomplete'
import ProButton from '../../button'
import ProCascader from '../../cascader'
import ProCheckbox from '../../checkbox'
import ProCheckboxGroup from '../../checkbox-group'
import ProDatePicker from '../../date-picker'
import ProIcon from '../../icon'
import ProImage from '../../image'
import ProImageGroup from '../../image-group'
import ProInput from '../../input'
import ProInputNumber from '../../input-number'
import ProLink from '../../link'
import ProRadio from '../../radio'
import ProRadioGroup from '../../radio-group'
import ProSelect from '../../select'
import ProSwitch from '../../switch'
import ProTag from '../../tag'
import ProText from '../../text'
import ProTimePicker from '../../time-picker'
import ProTree from '../../tree'
import ProUpload from '../../upload'
import ProVirtualizedSelect from '../../virtualized-select'
import ProVirtualizedTree from '../../virtualized-tree'
import {
  getFilteredSlotNames,
  getSlotName,
  hasSlot,
} from 'component-library-utils/slot'
import { ElFormItem } from 'element-plus'
import { isUndefined } from 'lodash-es'
import { ref, computed, watch, useSlots, defineComponent } from 'vue'
import type { FormItemExtendedProps, FormItemInstance } from './form-item'
import type { Component } from 'vue'

/* 属性 */
const $props = withDefaults(defineProps<FormItemExtendedProps>(), {
  hidden: undefined,
})
/* 事件 */
const $emits = defineEmits(['update:item-value'])
/* 插槽 */
const $slots = useSlots()
const $slotNames = Object.keys($slots)
const $formItemSlotNames = ['error', 'label']
const $formItemFilteredSlotNames = getFilteredSlotNames(
  $props,
  $slots,
  $formItemSlotNames
)
/* 实例 */
const $formItemRef = ref<FormItemInstance>()
const $itemComponentRef = ref()
/* 默认值（内部不做修改） */
const $defaultItemComponent = computed(() => {
  let component: Component = defineComponent({ render: () => {} })
  switch ($props.itemType) {
    case 'autocomplete':
      component = ProAutocomplete
      break
    case 'button':
      component = ProButton
      break
    case 'cascader':
      component = ProCascader
      break
    case 'checkbox':
      component = ProCheckbox
      break
    case 'checkboxGroup':
      component = ProCheckboxGroup
      break
    case 'datePicker':
      component = ProDatePicker
      break
    case 'icon':
      component = ProIcon
      break
    case 'image':
      component = ProImage
      break
    case 'imageGroup':
      component = ProImageGroup
      break
    case 'input':
      component = ProInput
      break
    case 'inputNumber':
      component = ProInputNumber
      break
    case 'link':
      component = ProLink
      break
    case 'radio':
      component = ProRadio
      break
    case 'radioGroup':
      component = ProRadioGroup
      break
    case 'select':
      component = ProSelect
      break
    case 'switch':
      component = ProSwitch
      break
    case 'tag':
      component = ProTag
      break
    case 'text':
      component = ProText
      break
    case 'timePicker':
      component = ProTimePicker
      break
    case 'tree':
      component = ProTree
      break
    case 'upload':
      component = ProUpload
      break
    case 'virtualizedSelect':
      component = ProVirtualizedSelect
      break
    case 'virtualizedTree':
      component = ProVirtualizedTree
      break
    default:
      break
  }
  return component
})
const $defaultLabel = computed(() => {
  if (!isUndefined($props.label)) {
    return $props.label
  }
  return ''
})
const $defaultPlaceholder = computed(() => {
  if (!isUndefined($props.itemProps?.placeholder)) {
    return $props.itemProps?.placeholder
  }
  if (
    $props.itemType === 'autocomplete' ||
    $props.itemType === 'input' ||
    $props.itemType === 'inputNumber'
  ) {
    return `请输入${$props.itemProps?.label || $defaultLabel.value || ''}`
  } else if (
    $props.itemType === 'cascader' ||
    $props.itemType === 'datePicker' ||
    $props.itemType === 'select' ||
    $props.itemType === 'virtualizedSelect'
  ) {
    return `请选择${$props.itemProps?.label || $defaultLabel.value || ''}`
  } else {
    return undefined
  }
})
/* 默认值（内部可做修改）*/
let $internalItemValue: any = ref(null)
watch(
  () => $props.itemValue,
  value => {
    if (!isUndefined(value)) {
      $internalItemValue.value = value
    }
  },
  {
    deep: true,
    immediate: true,
  }
)
watch(
  () => $internalItemValue.value,
  value => {
    $emits('update:item-value', value)
  }
)

defineExpose({
  /* 实例 */
  itemComponentRef: $itemComponentRef,
  ref: $formItemRef,
})
</script>
