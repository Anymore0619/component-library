<template>
  <div :class="['pro-table', $attrs.class]" :style="[$attrs.style as any]">
    <el-scrollbar
      ref="$topScrollbarRef"
      class="pro-table__top-scrollbar"
      :style="{ width: $tableRef?.$el.style.width }"
      @scroll="$onTopScrollbarScroll"
    >
      <div
        class="pro-table__top-scrollbar__content"
        :style="{ width: $tableRef?.bodyWidth }"
      />
    </el-scrollbar>
    <el-table
      ref="$tableRef"
      class="pro-table__table"
      v-bind="{ ...$attrs, class: undefined, style: undefined }"
      v-on="$props"
      :border="$defaultBorder"
      @current-change="$defaultCurrentChange"
      :data="$defaultData"
      :highlight-current-row="$defaultHighlightCurrentRow"
      :lazy="$defaultLazy"
      :row-key="$defaultRowKey"
      @selection-change="$defaultSelectionChange"
      :stripe="$defaultStripe"
    >
      <template
        v-for="$tableFilteredSlotName in $tableFilteredSlotNames"
        :key="$tableFilteredSlotName"
        #[$tableFilteredSlotName]="scope"
      >
        <slot
          v-bind="scope"
          :key="$tableFilteredSlotName"
          :name="getSlotName($props, $slots, $tableFilteredSlotName)"
        />
      </template>
      <template #default="scope">
        <slot
          v-if="hasSlot($props, $slots, 'default')"
          v-bind="scope"
          :name="getSlotName($props, $slots, 'default')"
        />
        <template v-else>
          <pro-table-column
            ref="$tableColumnRef"
            v-for="($column, $columnIndex) in $props.columns"
            :key="$columnIndex"
            v-bind="$column"
            v-model:remote-sort-index="$column.remoteSortIndex"
            v-model:remote-sort-order="$column.remoteSortOrder"
          >
            <!-- 直接传递所有插槽至子组件 -->
            <template
              v-for="$slotName in $slotNames"
              :key="$slotName"
              #[$slotName]="columnScope"
            >
              <slot v-bind="columnScope" :key="$slotName" :name="$slotName" />
            </template>
          </pro-table-column>
        </template>
      </template>
    </el-table>
  </div>
</template>

<script lang="ts">
export default {
  name: 'ProTable',
  inheritAttrs: false,
}
</script>

<script lang="ts" setup>
import ProTableColumn from '../../table-column'
import {
  getFilteredSlotNames,
  getSlotName,
  hasSlot,
} from 'component-library-utils/slot'
import { treeToList } from 'component-library-utils/tree'
import { ElLoading, ElScrollbar, ElTable } from 'element-plus'
import { isUndefined } from 'lodash-es'
import {
  ref,
  computed,
  watch,
  useSlots,
  onMounted,
  onUnmounted,
  onActivated,
  nextTick,
} from 'vue'
import type {
  RemoteSortColumn,
  TableExtendedProps,
  TableInstance,
} from './table'
import type {
  ProTableColumnInstance,
  RemoteSortOrder,
} from '../../table-column'
import type { ScrollbarInstance } from 'element-plus'

/* 属性 */
const $props = withDefaults(defineProps<TableExtendedProps>(), {
  border: undefined,
  highlightCurrentRow: undefined,
  lazy: undefined,
  loading: undefined,
  stripe: undefined,
})
/* 事件 */
const $emits = defineEmits(['update:checked-rows', 'update:current-row'])
/* 插槽 */
const $slots = useSlots()
const $slotNames = Object.keys($slots)
const $tableSlotNames = ['append', 'empty']
const $tableFilteredSlotNames = getFilteredSlotNames(
  $props,
  $slots,
  $tableSlotNames
)

/* 实例 */
const $tableColumnRef = ref<ProTableColumnInstance>()
const $tableRef = ref<TableInstance>()
/* 生命周期 */
onMounted(() => {
  watch(
    () => $props.loading,
    value => {
      if (value) {
        $loadingInstance = ElLoading.service({
          target: $tableRef.value?.$el,
        })
      } else {
        if ($loadingInstance) {
          $loadingInstance.close()
        }
      }
    },
    {
      immediate: true,
    }
  )
  $bodyWrapper = (
    $tableRef.value?.$refs.bodyWrapper as HTMLElement
  ).getElementsByClassName('el-scrollbar__wrap')[0]
  $bodyWrapper.addEventListener('scroll', $setTopScrollbarScrollLeft)
})
onUnmounted(() => {
  $bodyWrapper.removeEventListener('scroll', $setTopScrollbarScrollLeft)
})
onActivated(() => {
  $tableRef.value!.setScrollLeft($bodyWrapperScrollLeft)
})
/* 辅助参数 */
let $bodyWrapper: Element
let $bodyWrapperScrollLeft = 0
let $loadingInstance: any = null
const $onTopScrollbarScroll = (scrollObject: {
  scrollLeft: number
  scrollTop: number
}) => {
  $tableRef.value?.setScrollLeft(scrollObject.scrollLeft)
}
const $setTopScrollbarScrollLeft = () => {
  $topScrollbarRef.value?.setScrollLeft($bodyWrapper.scrollLeft)
  $bodyWrapperScrollLeft = $bodyWrapper.scrollLeft
}
const $topScrollbarRef = ref<ScrollbarInstance>()
/* 默认值（内部不做修改） */
const $defaultBorder = computed(() => {
  if (!isUndefined($props.border)) {
    return $props.border
  }
  return true
})
const $defaultCurrentChange = (
  currentRow: Record<string, any>,
  oldCurrentRow: Record<string, any>
) => {
  $internalCurrentRow.value = currentRow
}
const $defaultData = computed(() => {
  if (!isUndefined($props.data)) {
    return $props.data
  }
  return []
})
const $defaultHighlightCurrentRow = computed(() => {
  if (!isUndefined($props.highlightCurrentRow)) {
    return $props.highlightCurrentRow
  }
  return true
})
const $defaultLazy = computed(() => {
  if (!isUndefined($props.lazy)) {
    return $props.lazy
  }
  return false
})
const $defaultRowKey = computed(() => {
  if (!isUndefined($props.rowKey)) {
    return $props.rowKey
  }
  return ''
})
const $defaultSelectionChange = (selection: Record<string, any>[]) => {
  $internatCheckedRows.value = selection
}
const $defaultStripe = computed(() => {
  if (!isUndefined($props.stripe)) {
    return $props.stripe
  }
  return true
})
/* 默认值（内部可做修改） */
let $internatCheckedRows = ref<Record<string, any>[]>([])
watch(
  () => $props.checkedRows,
  value => {
    if (!isUndefined(value)) {
      $internatCheckedRows.value = value
      nextTick(() => {
        for (let item of $defaultData.value) {
          const currentCheckedRow = value.find((row: Record<string, any>) => {
            return row[$defaultRowKey.value] === item[$defaultRowKey.value]
          })
          if (currentCheckedRow) {
            $tableRef.value?.toggleRowSelection(item, true)
          } else {
            $tableRef.value?.toggleRowSelection(item, false)
          }
        }
      })
    }
  },
  {
    deep: true,
    immediate: true,
  }
)
watch(
  () => $internatCheckedRows.value,
  value => {
    $emits('update:checked-rows', value)
  },
  {
    deep: true,
  }
)
let $internalCurrentRow = ref<Record<string, any>>({})
watch(
  () => $props.currentRow,
  value => {
    if (!isUndefined(value)) {
      $internalCurrentRow.value = value
      nextTick(() => {
        const data = treeToList(
          $defaultData.value.concat(
            $defaultLazy.value
              ? Object.keys($tableRef.value?.store.states.lazyTreeNodeMap.value)
                  .map(key => {
                    return $tableRef.value?.store.states.lazyTreeNodeMap.value[
                      key
                    ]
                  })
                  .flat()
              : []
          )
        )
        const currentRow = data.find(
          (row: Record<string, any>) =>
            row[$defaultRowKey.value] === value[$defaultRowKey.value]
        )
        $tableRef.value?.setCurrentRow(currentRow)
      })
    }
  },
  {
    deep: true,
    immediate: true,
  }
)
watch(
  () => $internalCurrentRow.value,
  value => {
    $emits('update:current-row', value)
  },
  {
    deep: true,
  }
)
/* 获取远程排序列（expose） */
const getRemoteSortColumns = (): RemoteSortColumn[] => {
  if (!isUndefined($props.columns)) {
    return $props.columns
      ?.filter(column => column.remoteSortable)
      .sort((a, b) => a.remoteSortIndex! - b.remoteSortIndex!)
      .map(column => {
        return {
          index: column.remoteSortIndex,
          order: (column.remoteSortOrder || '') as RemoteSortOrder,
          prop: column.prop || '',
        }
      })
  } else {
    return []
  }
}
/* 重置远程排序列（expose） */
const resetRemoteSortColumns = () => {
  $props.columns?.forEach(column => {
    if (!isUndefined(column.remoteSortable)) {
      column.remoteSortOrder = ''
    }
  })
}

defineExpose({
  /* 实例 */
  ref: $tableRef,
  tableColumnRef: $tableColumnRef,
  /* 扩展的方法 */
  getRemoteSortColumns,
  resetRemoteSortColumns,
})
</script>
