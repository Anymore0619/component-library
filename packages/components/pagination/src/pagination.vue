<template>
  <el-pagination
    ref="$paginationRef"
    class="pro-pagination"
    v-bind="$attrs"
    v-on="$props"
    :background="$defaultBackground"
    :layout="$defaultLayout"
    :page-sizes="$defaultPageSizes"
    :total="$defaultTotal"
  >
    <template
      v-for="$paginationFilteredSlotName in $paginationFilteredSlotNames"
      :key="$paginationFilteredSlotName"
      #[$paginationFilteredSlotName]="scope"
    >
      <slot
        v-bind="scope"
        :key="$paginationFilteredSlotName"
        :name="getSlotName($props, $slots, $paginationFilteredSlotName)"
      />
    </template>
    <template #default="scope">
      <slot
        v-if="hasSlot($props, $slots, 'default')"
        v-bind="scope"
        :name="getSlotName($props, $slots, 'default')"
      />
      <template v-else>共 {{ $defaultTotal }} 条</template>
    </template>
  </el-pagination>
</template>

<script lang="ts">
export default {
  name: 'ProPagination',
  inheritAttrs: false,
}
</script>

<script lang="ts" setup>
import {
  getFilteredSlotNames,
  getSlotName,
  hasSlot,
} from 'component-library-utils/slot'
import { ElPagination } from 'element-plus'
import { isUndefined } from 'lodash-es'
import { ref, computed, useSlots } from 'vue'
import type { PaginationExtendedProps, PaginationInstance } from './pagination'

/* 属性 */
const $props = withDefaults(defineProps<PaginationExtendedProps>(), {
  background: undefined,
})
/* 插槽 */
const $slots = useSlots()
const $paginationSlotNames = []
const $paginationFilteredSlotNames = getFilteredSlotNames(
  $props,
  $slots,
  $paginationSlotNames
)
/* 实例 */
const $paginationRef = ref<PaginationInstance>()
/* 默认值（内部不做修改） */
const $defaultBackground = computed(() => {
  if (!isUndefined($props.background)) {
    return $props.background
  }
  return true
})
const $defaultLayout = computed(() => {
  if (!isUndefined($props.layout)) {
    return $props.layout
  }
  if (!isUndefined($props.maxTotal)) {
    return 'slot, sizes, prev, pager, next, jumper'
  }
  return 'total, sizes, prev, pager, next, jumper'
})
const $defaultPageSizes = computed(() => {
  if (!isUndefined($props.pageSizes)) {
    return $props.pageSizes
  }
  return [10, 20, 30, 50, 100]
})
const $defaultTotal = computed(() => {
  if (!isUndefined($props.maxTotal) && !isUndefined($props.total)) {
    if ($props.total > $props.maxTotal) {
      return $props.maxTotal
    } else {
      return $props.total
    }
  }
  if (!isUndefined($props.total)) {
    return $props.total
  }
  return 0
})

defineExpose({
  /* 实例 */
  ref: $paginationRef,
})
</script>
