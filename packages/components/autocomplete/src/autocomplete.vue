<template>
  <el-autocomplete
    ref="$autocompleteRef"
    class="pro-autocomplete"
    v-bind="$attrs"
    v-on="$props"
    :clearable="$defaultClearable"
    :debounce="$defaultDebounce"
    :placeholder="$defaultPlaceholder"
  >
    <template
      v-for="$autocompleteFilteredSlotName in $autocompleteFilteredSlotNames"
      :key="$autocompleteFilteredSlotName"
      #[$autocompleteFilteredSlotName]="scope"
    >
      <slot
        v-bind="scope"
        :key="$autocompleteFilteredSlotName"
        :name="getSlotName($props, $slots, $autocompleteFilteredSlotName)"
      />
    </template>
  </el-autocomplete>
</template>

<script lang="ts">
export default {
  name: 'ProAutocomplete',
  inheritAttrs: false,
}
</script>

<script lang="ts" setup>
/* TODO: AutocompleteInstance 会导致 vite-plugin-dts 生成类型时无限循环，暂时注释 */
import { getFilteredSlotNames, getSlotName } from 'component-library-utils/slot'
import { ElAutocomplete } from 'element-plus'
import { isUndefined } from 'lodash-es'
import { ref, computed, useSlots } from 'vue'
import type {
  AutocompleteExtendedProps,
  // AutocompleteInstance,
} from './autocomplete'

/* 属性 */
const $props = withDefaults(defineProps<AutocompleteExtendedProps>(), {
  clearable: undefined,
})
/* 插槽 */
const $slots = useSlots()
const $autocompleteSlotNames = [
  'append',
  'default',
  'prefix',
  'prepend',
  'suffix',
]
const $autocompleteFilteredSlotNames = getFilteredSlotNames(
  $props,
  $slots,
  $autocompleteSlotNames
)
/* 实例 */
// const $autocompleteRef = ref<AutocompleteInstance>()
const $autocompleteRef = ref()
/* 默认值（内部不做修改） */
const $defaultClearable = computed(() => {
  if (!isUndefined($props.clearable)) {
    return $props.clearable
  }
  return true
})
const $defaultDebounce = computed(() => {
  if (!isUndefined($props.debounce)) {
    return $props.debounce
  }
  return 0
})
const $defaultPlaceholder = computed(() => {
  if (!isUndefined($props.placeholder)) {
    return $props.placeholder
  }
  return '请输入'
})

defineExpose({
  /* 实例 */
  ref: $autocompleteRef,
})
</script>
