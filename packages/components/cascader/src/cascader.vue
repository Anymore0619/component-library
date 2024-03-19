<template>
  <el-cascader
    ref="$cascaderRef"
    class="pro-cascader"
    v-bind="$attrs"
    v-on="$props"
    :clearable="$defaultClearable"
    :filterable="$defaultFilterable"
    :placeholder="$defaultPlaceholder"
    :props="$internalProps"
    @visible-change="$defaultVisibleChange"
  >
    <template
      v-for="$cascaderFilteredSlotName in $cascaderFilteredSlotNames"
      :key="$cascaderFilteredSlotName"
      #[$cascaderFilteredSlotName]="scope"
    >
      <slot
        v-bind="scope"
        :key="$cascaderFilteredSlotName"
        :name="getSlotName($props, $slots, $cascaderFilteredSlotName)"
      />
    </template>
  </el-cascader>
</template>

<script lang="ts">
export default {
  name: 'ProCascader',
  inheritAttrs: false,
}
</script>

<script lang="ts" setup>
/* TODO: CascaderInstance 会导致 vite-plugin-dts 生成类型时无限循环，暂时注释 */
import { getFilteredSlotNames, getSlotName } from 'component-library-utils/slot'
import { ElCascader } from 'element-plus'
import { isUndefined } from 'lodash-es'
import { ref, computed, watch, useSlots, nextTick } from 'vue'
import type {
  CascaderExtendedProps,
  // CascaderInstance
} from './cascader'

/* 属性 */
const $props = withDefaults(defineProps<CascaderExtendedProps>(), {
  clearable: undefined,
  filterable: undefined,
})
/* 插槽 */
const $slots = useSlots()
const $cascaderSlotNames = ['default', 'empty']
const $cascaderFilteredSlotNames = getFilteredSlotNames(
  $props,
  $slots,
  $cascaderSlotNames
)
/* 实例 */
// const $cascaderRef = ref<CascaderInstance>()
const $cascaderRef = ref()
/* 默认值（内部不做修改） */
const $defaultClearable = computed(() => {
  if (!isUndefined($props.clearable)) {
    return $props.clearable
  }
  return true
})
const $defaultFilterable = computed(() => {
  if (!isUndefined($props.filterable)) {
    return $props.filterable
  }
  return true
})
const $defaultPlaceholder = computed(() => {
  if (!isUndefined($props.placeholder)) {
    return $props.placeholder
  }
  return '请选择'
})
const $defaultVisibleChange = (visible: boolean) => {
  /* 处理筛选后面板未同步的问题 */
  if ($props.props?.checkStrictly) {
    if (!visible) {
      $internalProps.value.checkStrictly = false
      nextTick(() => {
        $internalProps.value.checkStrictly = true
      })
    }
  }
  $props.visibleChange?.(visible)
}
/* 默认值（内部可做修改） */
let $internalProps = ref<Record<string, any>>({})
watch(
  () => $props.props,
  value => {
    if (!isUndefined(value)) {
      $internalProps.value = { ...value }
    }
  },
  {
    deep: true,
    immediate: true,
  }
)

defineExpose({
  /* 实例 */
  ref: $cascaderRef,
})
</script>
