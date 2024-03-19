<template>
  <pro-dialog
    ref="$proDialogRef"
    :class="[
      'pro-search-table-dialog',
      'pro-search-table-dialog__dialog',
      $attrs.class,
    ]"
    :style="[$attrs.style]"
    v-bind="$props.dialogProps"
    v-model="$internalShow"
    v-model:loading="$internalLoading"
    :before-close="$defaultDialogBeforeClose"
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
        <pro-search-table
          ref="$proSearchTableRef"
          class="pro-search-table-dialog__search-table"
          v-bind="$props.searchTableProps"
          v-model:current-row="$internalSearchTableTableCurrentRow"
          v-model:loading="$internalLoading"
          :pagination-props="$defaultSearchTablePaginationProps"
          :response-mapping="$defaultSearchTableResponseMapping"
          :table-props="$defaultSearchTableTableProps"
        >
          <!-- 直接传递所有插槽至子组件 -->
          <template
            v-for="$slotName in $slotNames"
            :key="$slotName"
            #[$slotName]="searchTableScope"
          >
            <slot
              v-bind="searchTableScope"
              :key="$slotName"
              :name="$slotName"
            />
          </template>
        </pro-search-table>
      </template>
    </template>
  </pro-dialog>
</template>

<script lang="ts">
export default {
  name: 'ProSearchTableDialog',
  inheritAttrs: false,
}
</script>

<script lang="ts" setup>
/* TODO: ProSearchTableDialogInstance 会导致 vite-plugin-dts 生成类型时无限循环，暂时注释 */
import ProDialog from '../../dialog'
import ProSearchTable from '../../search-table'
import { getSlotName, hasSlot } from 'component-library-utils/slot'
import { isUndefined } from 'lodash-es'
import { ref, inject, computed, watch, useSlots } from 'vue'
import type {
  ProSearchTableDialogInjects,
  SearchTableDialogExtendedProps,
  SearchTableDialogSearchTableProps,
} from './search-table-dialog'
import type { ProDialogInstance } from '../../dialog'
// import type { ProSearchTableInstance } from '../../search-table'

/* 属性 */
const $props = withDefaults(defineProps<SearchTableDialogExtendedProps>(), {
  loading: undefined,
  show: undefined,
})
/* 注入 */
const $injects = inject<ProSearchTableDialogInjects>(
  'proSearchTableDialogInjects',
  {}
)
/* 事件 */
const $emits = defineEmits([
  'update:current-row',
  'update:loading',
  'update:show',
])
/* 插槽 */
const $slots = useSlots()
const $slotNames = Object.keys($slots)
/* 实例 */
const $proDialogRef = ref<ProDialogInstance>()
// const $proSearchTableRef = ref<ProSearchTableInstance>()
const $proSearchTableRef = ref()
/* 辅助参数 */
const $closeDialog = () => {
  $props.dialogProps?.beforeClose?.()
  $proSearchTableRef.value?.proFormRef?.initializeForm()
  $proSearchTableRef.value?.proFormRef?.ref?.clearValidate()
  $internalLoading.value = false
  $internalShow.value = false
}
/* 默认值（内部不做修改） */
const $defaultDialogBeforeClose = () => {
  $closeDialog()
}
const $defaultSearchTablePaginationProps = computed(() => {
  const paginationProps: SearchTableDialogSearchTableProps['paginationProps'] =
    {}
  paginationProps.props = Object.assign(
    {},
    $injects.searchTableProps?.paginationProps?.props,
    $props.searchTableProps?.paginationProps?.props
  )
  return Object.assign(
    paginationProps,
    $props.searchTableProps!.paginationProps
  )
})
const $defaultSearchTableResponseMapping = (response: any, params: any) => {
  if (!isUndefined($props.searchTableProps?.responseMapping)) {
    return $props.searchTableProps!.responseMapping(response, params)
  }
  if (!isUndefined($injects.searchTableProps?.responseMapping)) {
    return $injects.searchTableProps!.responseMapping(response, params)
  }
  return undefined
}
const $defaultSearchTableTableProps = computed(() => {
  const tableProps: SearchTableDialogSearchTableProps['tableProps'] = {}
  if (!isUndefined($props.searchTableProps?.tableProps?.rowKey)) {
    tableProps.rowKey = $props.searchTableProps!.tableProps!.rowKey
  } else if (!isUndefined($injects.searchTableProps?.tableProps?.rowKey)) {
    tableProps.rowKey = $injects.searchTableProps!.tableProps!.rowKey
  } else {
    tableProps.rowKey = ''
  }
  if (!isUndefined($props.searchTableProps?.tableProps?.showToolbar)) {
    tableProps.showToolbar = $props.searchTableProps!.tableProps!.showToolbar
  } else if (!isUndefined($injects.searchTableProps?.tableProps?.showToolbar)) {
    tableProps.showToolbar = $injects.searchTableProps!.tableProps!.showToolbar
  } else {
    tableProps.showToolbar = false
  }
  return Object.assign(tableProps, $props.searchTableProps!.tableProps)
})
/* 默认值（内部可做修改） */
let $internalSearchTableTableCurrentRow = ref<Record<string, any>>({})
watch(
  () => $props.searchTableProps?.tableProps?.currentRow,
  value => {
    if (!isUndefined(value)) {
      $internalSearchTableTableCurrentRow.value = value
    }
  },
  {
    deep: true,
    immediate: true,
  }
)
watch(
  () => $internalSearchTableTableCurrentRow.value,
  value => {
    $emits('update:current-row', value)
  },
  {
    deep: true,
  }
)
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
  proDialogRef: $proDialogRef,
  proSearchTableRef: $proSearchTableRef,
})
</script>
