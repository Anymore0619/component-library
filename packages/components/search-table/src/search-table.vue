<template>
  <div
    :class="['pro-search-table', $attrs.class]"
    :style="[$attrs.style as any]"
  >
    <pro-form
      v-if="!$props.hideForm"
      ref="$proFormRef"
      class="pro-search-table__form"
      v-bind="$props.formProps"
      :disabled="$defaultFormDisabled"
      :hide-clear-button="$defaultFormHideClearButton"
      :items="$defaultFormItems"
      :reset-button-props="$defaultFormResetButtonProps"
      :submit-button-props="$defaultFormSubmitButtonProps"
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
    <div
      v-if="
        $slots['over-table'] || (!$props.hideTable && $defaultTableShowToolbar)
      "
      class="pro-search-table__over-table"
    >
      <div class="pro-search-table__over-table-main">
        <slot name="over-table" />
      </div>
      <div
        v-if="!$props.hideTable && $defaultTableShowToolbar"
        class="pro-search-table__toolbar"
        :style="{ height: $defaultTableToolbarHeight }"
      >
        <pro-button v-bind="$refreshButton" :disabled="$defaultTableLoading" />
        <pro-popover v-bind="$sizePopover">
          <template #reference>
            <pro-button v-bind="$sizeButton" :disabled="$defaultTableLoading" />
          </template>
          <pro-radio-group
            v-bind="$sizeRadioGroup"
            v-model="$sizeRadioGroup.modelValue"
          />
        </pro-popover>
        <pro-popover v-bind="$displayableColumnsPopover">
          <template #reference>
            <pro-button
              v-bind="$displayableColumnsButton"
              :disabled="$defaultTableLoading"
            />
          </template>
          <pro-checkbox
            v-bind="$displayableColumnsAllCheckbox"
            v-model="$displayableColumnsAllCheckbox.modelValue"
          />
          <el-scrollbar :max-height="192">
            <pro-checkbox
              v-for="(
                $displayableColumn, $displayableColumnIndex
              ) in $displayableColumns"
              :key="$displayableColumnIndex"
              v-model="$displayableColumn.displayed"
              :disabled="!$displayableColumn.displayable"
              :label="$displayableColumn.label"
            />
          </el-scrollbar>
        </pro-popover>
      </div>
    </div>
    <pro-table
      v-if="!$props.hideTable"
      ref="$proTableRef"
      class="pro-search-table__table"
      v-bind="$props.tableProps"
      v-model:checked-rows="$internalTableCheckedRows"
      v-model:current-row="$internalTableCurrentRow"
      :columns="$internalTableColumns"
      :data="$internalData"
      :loading="$defaultTableLoading"
      :row-key="$defaultTableRowKey"
      :size="$internalTableSize"
    >
      <!-- 直接传递所有插槽至子组件 -->
      <template
        v-for="$slotName in $slotNames"
        :key="$slotName"
        #[$slotName]="tableScope"
      >
        <slot v-bind="tableScope" :key="$slotName" :name="$slotName" />
      </template>
    </pro-table>
    <div
      v-if="$slots['under-table'] || !$props.hidePagination"
      class="pro-search-table__under-table"
    >
      <div class="pro-search-table__under-table-main">
        <slot name="under-table" />
      </div>
      <pro-pagination
        v-if="!$props.hidePagination"
        class="pro-search-table__pagination"
        ref="$proPaginationRef"
        v-bind="$props.paginationProps"
        v-model:current-page="$internalPaginationCurrentPage"
        v-model:page-size="$internalPaginationPageSize"
        :disabled="$defaultPaginationDisabled"
        :total="$internalPaginationTotal"
      >
        <!-- 直接传递所有插槽至子组件 -->
        <template
          v-for="$slotName in $slotNames"
          :key="$slotName"
          #[$slotName]="paginationScope"
        >
          <slot v-bind="paginationScope" :key="$slotName" :name="$slotName" />
        </template>
      </pro-pagination>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'ProSearchTable',
  inheritAttrs: false,
}
</script>

<script lang="ts" setup>
import ProButton from '../../button'
import ProCheckbox from '../../checkbox'
import ProForm from '../../form'
import ProPagination from '../../pagination'
import ProPopover from '../../popover'
import ProRadioGroup from '../../radio-group'
import ProTable from '../../table'
import {
  Files,
  Refresh,
  RefreshRight,
  Search,
  Setting,
} from '@element-plus/icons-vue'
import { ElMessage, ElScrollbar } from 'element-plus'
import { debounce, isEqual, isNumber, isUndefined } from 'lodash-es'
import { ref, reactive, inject, computed, watch, useSlots } from 'vue'
import type {
  DisplayableTableColumnProps,
  ProSearchTableInjects,
  SearchTableExtendedProps,
  SearchTableTableColumnProps,
  SearchTableTableProps,
} from './search-table'
import type { ProButtonProps } from '../../button'
import type { ProCheckboxProps } from '../../checkbox'
import type { ProFormInstance } from '../../form'
import type { ProPaginationInstance } from '../../pagination'
import type { ProPopoverProps } from '../../popover'
import type { ProRadioGroupProps } from '../../radio-group'
import type { ProTableInstance, RemoteSortColumn } from '../../table'

/* 属性 */
const $props = withDefaults(defineProps<SearchTableExtendedProps>(), {
  hideForm: undefined,
  hideTable: undefined,
  hidePagination: undefined,
  loading: undefined,
})
/* 注入 */
const $injects = inject<ProSearchTableInjects>('proSearchTableInjects', {})
/* 插槽 */
const $slots = useSlots()
const $slotNames = Object.keys($slots)
/* 事件 */
const $emits = defineEmits([
  'update:checked-rows',
  'update:current-page',
  'update:current-row',
  'update:loading',
  'update:page-size',
  'update:total',
])
/* 实例 */
const $proFormRef = ref<ProFormInstance>()
const $proPaginationRef = ref<ProPaginationInstance>()
const $proTableRef = ref<ProTableInstance>()
/* 辅助参数 */
const $displayableColumns = ref<DisplayableTableColumnProps[]>([])
watch(
  () =>
    $displayableColumns.value.map(displayableColumn => {
      const { displayed, index } = displayableColumn
      return {
        displayed,
        index,
      }
    }),
  value => {
    value.forEach(item => {
      $internalTableColumns.value.find(
        (column, index) => index === item.index
      )!.displayed = item.displayed
    })
  }
)
const $displayableColumnsAllCheckbox = reactive<ProCheckboxProps>({
  change: value => {
    $displayableColumnsAllCheckbox.indeterminate = false
    $displayableColumns.value
      .filter(displayableColumn => displayableColumn.displayable)
      .forEach(displayableColumn => {
        displayableColumn.displayed = value as boolean
      })
  },
  indeterminate: false,
  label: '全部',
  modelValue: false,
})
const $displayableColumnsButton = reactive<ProButtonProps>({
  circle: true,
  icon: Setting,
  size: 'small',
})
const $displayableColumnsPopover = reactive<ProPopoverProps>({
  popperClass:
    'pro-search-table__popover pro-search-table__displayable-columns-popover',
  title: '展示列',
  trigger: 'click',
  width: 150,
})
const $refreshButton = reactive<ProButtonProps>({
  circle: true,
  click: () => {
    query()
  },
  icon: RefreshRight,
  size: 'small',
})
const $sizeButton = reactive<ProButtonProps>({
  circle: true,
  icon: Files,
  size: 'small',
})
const $sizePopover = reactive<ProPopoverProps>({
  popperClass: 'pro-search-table__popover pro-search-table__size-popover',
  title: '尺寸',
  trigger: 'click',
  width: 100,
})
const $sizeRadioGroup = reactive<ProRadioGroupProps>({
  change: value => {
    $internalTableSize.value = value as SearchTableTableProps['size']
  },
  modelValue: 'default',
  radios: [
    {
      label: '默认',
      value: 'default',
    },
    {
      label: '大',
      value: 'large',
    },
    {
      label: '小',
      value: 'small',
    },
  ],
})
/* 默认值（内部不做修改） */
const $defaultFormDisabled = computed(() => {
  if (!isUndefined($props.formProps?.disabled)) {
    return $props.formProps!.disabled || $internalLoading.value
  }
  return $internalLoading.value
})
const $defaultFormItems = computed(() => {
  if (!isUndefined($props.formProps?.items)) {
    return $props.formProps!.items.map(item => {
      if (item.itemType === 'input' || item.itemType === 'inputNumber') {
        return {
          ...item,
          itemProps: {
            ...item.itemProps,
            keyupEnter: () => {
              queryByPageNumber(1)
            },
          },
        }
      } else {
        return item
      }
    })
  }
  if (!isUndefined($props.tableProps?.columns)) {
    return ($props.tableProps!.columns! as SearchTableTableColumnProps[])
      .filter(column => column.formItemProps && !column.hideInForm)
      .map(column => {
        if (
          column.formItemProps?.itemType === 'input' ||
          column.formItemProps?.itemType === 'inputNumber'
        ) {
          return {
            label: column.label,
            prop: column.prop,
            ...column.formItemProps,
            itemProps: {
              ...column.formItemProps?.itemProps,
              keyupEnter: () => {
                queryByPageNumber(1)
              },
            },
          }
        } else {
          return {
            label: column.label,
            prop: column.prop,
            ...column.formItemProps,
          }
        }
      })
  }
  return []
})
const $defaultFormHideClearButton = computed(() => {
  if (!isUndefined($props.formProps?.hideClearButton)) {
    return $props.formProps!.hideClearButton
  }
  return true
})
const $defaultFormResetButtonProps = computed(() => {
  const resetButtonProps = {
    click: () => {
      if (
        $internalTableColumns.value.some(column => column.sortable === 'custom')
      ) {
        $proTableRef.value!.ref!.clearSort()
      }
      if ($internalTableColumns.value.some(column => column.remoteSortable)) {
        $proTableRef.value!.resetRemoteSortColumns()
      }
      queryByPageNumber(1)
    },
    icon: Refresh,
  }
  if (!isUndefined($props.formProps?.resetButtonProps)) {
    return Object.assign(resetButtonProps, $props.formProps!.resetButtonProps!)
  }
  return resetButtonProps
})
const $defaultFormSubmitButtonProps = computed(() => {
  const submitButtonProps = {
    click: () => {
      queryByPageNumber(1)
    },
    icon: Search,
    label: '筛选',
  }
  if (!isUndefined($props.formProps?.submitButtonProps)) {
    return Object.assign(
      submitButtonProps,
      $props.formProps!.submitButtonProps!
    )
  }
  return submitButtonProps
})
const $defaultPaginationDisabled = computed(() => {
  if (!isUndefined($props.paginationProps?.disabled)) {
    return $props.paginationProps!.disabled || $internalLoading.value
  }
  return $internalLoading.value
})
const $defaultPaginationProps = computed(() => {
  return Object.assign(
    {},
    $injects.paginationProps?.props,
    $props.paginationProps?.props
  )
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
const $defaultTableLoading = computed(() => {
  if (!isUndefined($props.tableProps?.loading)) {
    return $props.tableProps!.loading || $internalLoading.value
  }
  return $internalLoading.value
})
const $defaultTableRowKey = computed(() => {
  if (!isUndefined($props.tableProps?.rowKey)) {
    return $props.tableProps!.rowKey
  }
  if (!isUndefined($injects.tableProps?.rowKey)) {
    return $injects.tableProps!.rowKey
  }
  return ''
})
const $defaultTableShowToolbar = computed(() => {
  if (!isUndefined($props.tableProps?.showToolbar)) {
    return $props.tableProps!.showToolbar
  }
  if (!isUndefined($injects.tableProps?.showToolbar)) {
    return $injects.tableProps!.showToolbar
  }
  return false
})
const $defaultTableToolbarHeight = computed(() => {
  if (!isUndefined($props.tableProps?.toolbarHeight)) {
    return `${$props.tableProps!.toolbarHeight}px`
  }
  return 'auto'
})
/* 默认值（内部可做修改） */
let $internalData = ref<Record<string, any>[]>([])
watch(
  () => $props.tableProps?.data,
  value => {
    if (!isUndefined(value)) {
      $internalData.value = value
    }
  },
  {
    deep: true,
    immediate: true,
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
let $internalPaginationCurrentPage = ref(1)
watch(
  () => $props.paginationProps?.currentPage,
  value => {
    if (!isUndefined(value)) {
      $internalPaginationCurrentPage.value = value
    }
  },
  {
    immediate: true,
  }
)
watch(
  () => $internalPaginationCurrentPage.value,
  value => {
    $emits('update:current-page', value)
    query()
  }
)
let $internalPaginationPageSize = ref(20)
watch(
  () => $props.paginationProps?.pageSize,
  value => {
    if (!isUndefined(value)) {
      $internalPaginationPageSize.value = value
    }
  },
  {
    immediate: true,
  }
)
watch(
  () => $internalPaginationPageSize.value,
  value => {
    $emits('update:page-size', value)
    query()
  }
)
let $internalPaginationTotal = ref(0)
watch(
  () => $props.paginationProps?.total,
  value => {
    if (!isUndefined(value)) {
      $internalPaginationTotal.value = value
    }
  },
  {
    immediate: true,
  }
)
watch(
  () => $internalPaginationTotal.value,
  value => {
    $emits('update:total', value)
  }
)
let $internalTableCheckedRows = ref<Record<string, any>[]>([])
watch(
  () => $props.tableProps?.checkedRows,
  value => {
    if (!isUndefined(value)) {
      $internalTableCheckedRows.value = value
    }
  },
  {
    deep: true,
    immediate: true,
  }
)
watch(
  () => $internalTableCheckedRows.value,
  value => {
    $emits('update:checked-rows', value)
  },
  {
    deep: true,
  }
)
let $internalTableColumns = ref<SearchTableTableColumnProps[]>([])
watch(
  () => $props.tableProps?.columns,
  value => {
    if (!isUndefined(value)) {
      value.forEach((item, index) => {
        const displayableColumn = $displayableColumns.value.find(
          displayableColumn => displayableColumn.index === index
        )
        item.displayable = !isUndefined(item.displayable)
          ? item.displayable
          : true
        item.displayed = displayableColumn
          ? displayableColumn.displayed
          : !isUndefined(item.displayed)
            ? item.displayed
            : true
      })
      $internalTableColumns.value = value
      $displayableColumns.value = $internalTableColumns.value
        .map((column, index) => {
          return {
            ...column,
            index,
          }
        })
        .filter(column => {
          return (
            !column.hidden &&
            (column.type
              ? ['action', 'expand', 'selection'].indexOf(column.type) === -1
              : true)
          )
        })
    }
  },
  {
    deep: true,
    immediate: true,
  }
)
watch(
  () => $internalTableColumns.value,
  () => {
    let isAll = true
    let isIndeterminate = false
    $displayableColumns.value.forEach(displayableColumn => {
      if (!displayableColumn.displayed) {
        isAll = false
      } else {
        isIndeterminate = true
      }
    })
    if (isAll) {
      $displayableColumnsAllCheckbox.indeterminate = false
    } else {
      $displayableColumnsAllCheckbox.indeterminate = isIndeterminate
    }
    $displayableColumnsAllCheckbox.modelValue = isAll
  },
  {
    deep: true,
    immediate: true,
  }
)
watch(
  () =>
    $internalTableColumns.value
      .filter(column => column.remoteSortOrder || column.remoteSortOrder === '')
      .map(column => column.remoteSortOrder),
  (n, o) => {
    if (!isEqual(n, o)) {
      query()
    }
  }
)
let $internalTableCurrentRow = ref<Record<string, any>>({})
watch(
  () => $props.tableProps?.currentRow,
  value => {
    if (!isUndefined(value)) {
      $internalTableCurrentRow.value = value
    }
  },
  {
    deep: true,
    immediate: true,
  }
)
watch(
  () => $internalTableCurrentRow.value,
  value => {
    $emits('update:current-row', value)
  },
  {
    deep: true,
  }
)
let $internalTableSize = ref<SearchTableTableProps['size']>('default')
watch(
  () => $props.tableProps?.size,
  value => {
    if (!isUndefined(value)) {
      $internalTableSize.value = value
      $sizeRadioGroup.modelValue = value
    }
  },
  {
    immediate: true,
  }
)
/* 清空表格数据（expose） */
const clearTableData = () => {
  $internalData.value = []
}
/* 获取请求参数（expose） */
const getParams = () => {
  let params: Record<string, any> = {}
  if ($props.formProps?.model) {
    params = {
      ...params,
      ...$props.formProps!.model,
    }
  }
  if (!$props.hidePagination) {
    params = {
      ...params,
      [$defaultPaginationProps.value.currentPage || 'currentPage']:
        $internalPaginationCurrentPage.value,
      [$defaultPaginationProps.value.pageSize || 'pageSize']:
        $internalPaginationPageSize.value,
    }
  }
  if ($props.tableProps?.columns?.some(column => column.remoteSortable)) {
    const remoteSortColumns: RemoteSortColumn[] =
      $proTableRef.value?.getRemoteSortColumns() || []
    params = {
      ...params,
      remoteSortColumns,
    }
  }
  if ($props.customRequestParams) {
    params = $props.customRequestParams(params)
  }
  return params
}
/* 获取表格数据（expose） */
const getTableData = () => {
  return $internalData.value
}
/* 查询（expose） */
const query = debounce(
  async () => {
    if ($props.requestApi) {
      $internalLoading.value = true
      try {
        const params = getParams()
        $props.beforeRequest?.(params)
        const res = await $props.requestApi?.(params)
        if (res) {
          $props.onRequestSuccess?.(res, params)
          $internalData.value =
            $defaultResponseMapping(res, params)?.data || res.data
          if (!$props.hidePagination) {
            $internalPaginationTotal.value = isNumber(
              $defaultResponseMapping(res, params)?.total
            )
              ? $defaultResponseMapping(res, params)?.total
              : res.total
          }
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
  },
  100,
  { leading: false, trailing: true }
)
/* 根据页数查询（expose） */
const queryByPageNumber = (pageNumber: number) => {
  if ($internalPaginationCurrentPage.value === pageNumber) {
    query()
  } else {
    $internalPaginationCurrentPage.value = pageNumber
  }
}

defineExpose({
  /* 实例 */
  proFormRef: $proFormRef,
  proPaginationRef: $proPaginationRef,
  proTableRef: $proTableRef,
  /* 扩展的方法 */
  clearTableData,
  getParams,
  getTableData,
  query,
  queryByPageNumber,
})
</script>
