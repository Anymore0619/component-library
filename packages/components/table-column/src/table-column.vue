<template>
  <el-table-column
    v-if="
      $defaultDisplayable ? !$props.hidden && $defaultDisplayed : !$props.hidden
    "
    ref="$tableColumnRef"
    class="pro-table-column"
    v-bind="$attrs"
    v-on="$props"
    :label="$defaultLabel"
    :prop="$defaultProp"
    :sortable="$defaultSortable"
    :type="$defaultType"
  >
    <template
      v-for="$tableColumnFilteredSlotName in $tableColumnFilteredSlotNames"
      :key="$tableColumnFilteredSlotName"
      #[$tableColumnFilteredSlotName]="scope"
    >
      <slot
        v-bind="scope"
        :key="$tableColumnFilteredSlotName"
        :name="getSlotName($props, $slots, $tableColumnFilteredSlotName)"
      />
    </template>
    <!-- 表格列类型不为 selection 时，可进行表格列标题的自定义 -->
    <template v-if="$defaultType !== 'selection'" #header="scope">
      <slot
        v-if="hasSlot($props, $slots, 'header')"
        v-bind="scope"
        :name="getSlotName($props, $slots, 'header')"
      />
      <template
        v-else-if="
          $defaultRenderHeader({ column: scope.column, $index: scope.$index })
        "
      >
        {{
          $defaultRenderHeader({ column: scope.column, $index: scope.$index })
        }}
      </template>
      <template v-else>
        <pro-text type="info">{{ scope.column.label }}</pro-text>
        <template v-if="$defaultShowTip">
          <pro-tooltip v-bind="$defaultTipTooltipProps">
            <pro-icon
              class="pro-table-column__tip-icon"
              v-bind="$defaultTipIconProps"
            />
          </pro-tooltip>
        </template>
        <template v-if="!$defaultSortable && $props.remoteSortable">
          <span class="pro-table-column__remote-sortable-sorter-group">
            <i
              class="pro-table-column__remote-sortable-sorter pro-table-column__remote-sortable-sorter-asc"
              :class="{
                'pro-table-column__remote-sortable-sorter-asc--active':
                  $internalRemoteSortOrder === 'asc',
              }"
              @click="$onRemoteSorterClick('asc')"
            />
            <i
              class="pro-table-column__remote-sortable-sorter pro-table-column__remote-sortable-sorter-desc"
              :class="{
                'pro-table-column__remote-sortable-sorter-desc--active':
                  $internalRemoteSortOrder === 'desc',
              }"
              @click="$onRemoteSorterClick('desc')"
            />
          </span>
        </template>
      </template>
    </template>
    <!-- 表格列类型不为 index 或 selection 时，可进行表格列内容的自定义 -->
    <template
      v-if="$defaultType !== 'index' && $defaultType !== 'selection'"
      #default="scope"
    >
      <template v-if="$defaultType === 'group'">
        <template v-if="$props.childColumns">
          <pro-table-column
            v-for="($childColumn, $childColumnIndex) in $props.childColumns"
            :key="$childColumnIndex"
            v-bind="$childColumn"
          >
            <!-- 直接传递所有插槽至子组件 -->
            <template
              v-for="$slotName in $slotNames"
              :key="$slotName"
              #[$slotName]="childColumnScope"
            >
              <slot
                v-bind="childColumnScope"
                :key="$slotName"
                :name="$slotName"
              />
            </template>
          </pro-table-column>
        </template>
        <template v-else>
          <slot v-bind="scope" name="default" />
        </template>
      </template>
      <template v-else>
        <!-- default 插槽与 pro-table 中的 default 插槽存在命名冲突，使用 content 插槽替代 -->
        <slot
          v-if="hasSlot($props, $slots, 'content')"
          v-bind="scope"
          :name="getSlotName($props, $slots, 'content')"
        />
        <template
          v-else-if="
            $defaultFormatter(
              scope.row,
              scope.column,
              scope.row[$defaultProp],
              scope.$index
            )
          "
        >
          <ProTag
            v-if="$defaultType === 'tag'"
            :type="
              $defaultTagType(
                scope.row,
                scope.column,
                scope.row[$defaultProp],
                scope.$index
              )
            "
          >
            {{
              $defaultFormatter(
                scope.row,
                scope.column,
                scope.row[$defaultProp],
                scope.$index
              )
            }}
          </ProTag>
          <template v-else>
            {{
              $defaultFormatter(
                scope.row,
                scope.column,
                scope.row[$defaultProp],
                scope.$index
              )
            }}
          </template>
        </template>
        <template v-else>
          <template v-if="$defaultType === 'action'">
            <template
              v-if="
                $defaultActions.length <= $defaultMaxActionNumber ||
                $displayedActions(scope.row).length <=
                  $defaultMaxActionNumber ||
                $defaultMaxActionNumber === 0
              "
            >
              <template
                v-for="($action, $actionIndex) in $defaultActions"
                :key="$actionIndex"
              >
                <ProText
                  v-if="!$action.hidden?.(scope.row)"
                  class="pro-table-column__action-button-text"
                  @click="$action.click?.(scope.row)"
                  :label="$action.label"
                  :key="$actionIndex"
                  type="primary"
                />
              </template>
            </template>
            <ProDropdown
              class="pro-table-column__action-dropdown"
              v-else-if="$displayedActions(scope.row).length"
              @command="
                command => {
                  $onDropdownCommand(command, scope.row)
                }
              "
              :hide-timeout="100"
              :show-timeout="100"
            >
              <ProText
                class="pro-table-column__action-dropdown-text"
                type="primary"
              >
                {{ $defaultLabel }}
                <ProIcon name="ArrowDown" />
              </ProText>
              <template #dropdown>
                <ProDropdownItem
                  v-for="($action, $actionIndex) in $defaultActions"
                  :key="$actionIndex"
                  :command="$actionIndex"
                  :hidden="$action.hidden?.(scope.row)"
                  :label="$action.label"
                />
              </template>
            </ProDropdown>
          </template>
          <ProTag
            v-else-if="$defaultType === 'tag'"
            :type="
              $defaultTagType(
                scope.row,
                scope.column,
                scope.row[$defaultProp],
                scope.$index
              )
            "
          >
            {{ scope.row[$defaultProp] }}
          </ProTag>
          <template v-else>
            {{
              isNoValue(scope.row[$defaultProp])
                ? $defaultNoValueText
                : scope.row[$defaultProp]
            }}
          </template>
        </template>
      </template>
    </template>
  </el-table-column>
</template>

<script lang="ts">
export default {
  name: 'ProTableColumn',
  inheritAttrs: false,
}
</script>

<script lang="ts" setup>
import ProDropdown from '../../dropdown'
import ProDropdownItem from '../../dropdown-item'
import ProIcon from '../../icon'
import ProTag from '../../tag'
import ProText from '../../text'
import ProTooltip from '../../tooltip'
import { useRemoteSortIndex } from 'component-library-hooks/use-remote-sort-index'
import {
  getFilteredSlotNames,
  getSlotName,
  hasSlot,
} from 'component-library-utils/slot'
import { isNoValue } from 'component-library-utils/type'
import { ElTableColumn } from 'element-plus'
import { isUndefined } from 'lodash-es'
import { ref, computed, watch, useSlots } from 'vue'
import type {
  Column,
  ColumnObject,
  RemoteSortOrder,
  TableColumnExtendedProps,
  TableColumnInstance,
} from './table-column'

/* 属性 */
const $props = withDefaults(defineProps<TableColumnExtendedProps>(), {
  displayable: undefined,
  displayed: undefined,
  hidden: undefined,
  remoteSortable: undefined,
  sortable: undefined,
})
/* 事件 */
const $emits = defineEmits([
  'update:remote-sort-index',
  'update:remote-sort-order',
])
/* 插槽 */
const $slots = useSlots()
const $slotNames = Object.keys($slots)
const $tableColumnSlotNames = []
const $tableColumnFilteredSlotNames = getFilteredSlotNames(
  $props,
  $slots,
  $tableColumnSlotNames
)
/* 实例 */
const $tableColumnRef = ref<TableColumnInstance>()
/* 辅助参数 */
const $displayedActions = computed(() => (row: Record<string, any>) => {
  return $defaultActions.value.filter(
    action => !action.hidden || !action.hidden?.(row)
  )
})
const $onDropdownCommand = (command: number, row: Record<string, any>) => {
  $defaultActions.value
    .find((action, actionIndex) => actionIndex === command)
    ?.click?.(row)
}
const $remoteSortIndex = useRemoteSortIndex()
const $onRemoteSorterClick = (remoteSortOrder: RemoteSortOrder) => {
  const nextRemoteSortIndex = $remoteSortIndex.nextRemoteSortIndex()
  $internalRemoteSortIndex.value =
    $internalRemoteSortIndex.value < nextRemoteSortIndex
      ? nextRemoteSortIndex
      : $internalRemoteSortIndex.value
  $internalRemoteSortOrder.value =
    remoteSortOrder === $internalRemoteSortOrder.value ? '' : remoteSortOrder
}
/* 默认值（内部不做修改） */
const $defaultActions = computed(() => {
  if (!isUndefined($props.actions)) {
    return $props.actions
  }
  return []
})
const $defaultDisplayable = computed(() => {
  if (!isUndefined($props.displayable)) {
    return $props.displayable
  }
  return true
})
const $defaultDisplayed = computed(() => {
  if (!isUndefined($props.displayed)) {
    return $props.displayed
  }
  return true
})
const $defaultFormatter = (
  row: Record<string, any>,
  column: Column,
  cellValue: any,
  index: number
) => {
  if (!isUndefined($props.formatter)) {
    return $props.formatter(row, column, cellValue, index)
  }
  if (!isUndefined($props.dict)) {
    const currentDict = $props.dict.find(
      /* 弱类型判断 */
      item => item[$props.dictMapping?.value || 'value'] == cellValue
    )
    if (currentDict) {
      return currentDict[$props.dictMapping?.label || 'label']
    } else {
      return isNoValue(cellValue) ? $defaultNoValueText.value : cellValue
    }
  }
  return undefined
}
const $defaultLabel = computed(() => {
  if (!isUndefined($props.label)) {
    return $props.label
  }
  if ($defaultType.value === 'action') {
    return '操作'
  }
  return ''
})
const $defaultMaxActionNumber = computed(() => {
  if (!isUndefined($props.maxActionNumber)) {
    return $props.maxActionNumber
  }
  return 3
})
const $defaultNoValueText = computed(() => {
  if (!isUndefined($props.noValueText)) {
    return $props.noValueText
  }
  return '-'
})
const $defaultProp = computed(() => {
  if (!isUndefined($props.prop)) {
    return $props.prop
  }
  return ''
})
const $defaultRenderHeader = (columnObject: ColumnObject) => {
  if (!isUndefined($props.renderHeader)) {
    return $props.renderHeader(columnObject)
  }
  return undefined
}
const $defaultSortable = computed(() => {
  if (!isUndefined($props.sortable)) {
    return $props.sortable
  }
  return false
})
const $defaultShowTip = computed(() => {
  if (!isUndefined($props.showTip)) {
    return $props.showTip
  }
  return false
})
const $defaultTipIconProps = computed(() => {
  const tipIconProps = {
    name: 'QuestionFilled',
    size: 16,
  }
  if (!isUndefined($props.tipIconProps)) {
    Object.assign(tipIconProps, $props.tipIconProps)
  }
  return tipIconProps
})
const $defaultTipTooltipProps = computed(() => {
  const tipTooltipProps = {
    placement: 'top',
  }
  if (!isUndefined($props.tipTooltipProps)) {
    Object.assign(tipTooltipProps, $props.tipTooltipProps)
  }
  return tipTooltipProps
})
const $defaultTagType = (
  row: Record<string, any>,
  column: Column,
  cellValue: any,
  index: number
) => {
  if (!isUndefined($props.tagType)) {
    return $props.tagType(row, column, cellValue, index)
  }
  return ''
}
const $defaultType = computed(() => {
  if (!isUndefined($props.type)) {
    return $props.type
  }
  /* 默认值不可设为空字符串 */
  return undefined
})
/* 默认值（内部可做修改） */
let $internalRemoteSortIndex = ref(0)
watch(
  () => $props.remoteSortIndex,
  value => {
    if (!isUndefined(value)) {
      $internalRemoteSortIndex.value = value!
    }
  },
  {
    immediate: true,
  }
)
watch(
  () => $internalRemoteSortIndex.value,
  value => {
    $emits('update:remote-sort-index', value)
  }
)
let $internalRemoteSortOrder = ref<RemoteSortOrder | undefined>(undefined)
watch(
  () => $props.remoteSortOrder,
  value => {
    if (!isUndefined(value)) {
      $internalRemoteSortOrder.value = value!
    }
  },
  {
    immediate: true,
  }
)
watch(
  () => $internalRemoteSortOrder.value,
  value => {
    $emits('update:remote-sort-order', value)
  }
)
</script>
