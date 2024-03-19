<template>
  <div :class="['pro-tree', $attrs.class]" :style="[$attrs.style as any]">
    <pro-input
      v-if="!$props.hideSearchInput"
      class="pro-tree__search-input"
      v-bind="$props.searchInputProps"
      v-model="$internalSearchInputModelValue"
      :disabled="$defaultSearchInputDisabled"
      @keyup.enter="$onSearchInputSearch"
    >
      <template #append>
        <pro-button
          :click="$onSearchInputSearch"
          :icon="Search"
          :loading="$defaultSearchInputDisabled"
        />
      </template>
    </pro-input>
    <el-scrollbar class="pro-tree__scrollbar" :max-height="$defaultMaxHeight">
      <el-tree
        ref="$treeRef"
        :class="[
          'pro-tree__tree',
          !$props.hideSearchInput ? 'pro-tree__tree--has-search' : '',
        ]"
        v-bind="{ ...$attrs, class: undefined, style: undefined }"
        v-on="$props"
        @check="$defaultCheck"
        @current-change="$defaultCurrentChange"
        :data="$internalData"
        :expand-on-click-node="$defaultExpandOnClickNode"
        :filter-node-method="$defaultFilterNodeMethod"
        :highlight-current="$defaultHighlightCurrent"
        :node-key="$defaultNodeKey"
        :props="$defaultProps"
      >
        <template
          v-for="$treeFilteredSlotName in $treeFilteredSlotNames"
          :key="$treeFilteredSlotName"
          #[$treeFilteredSlotName]="scope"
        >
          <slot
            v-bind="scope"
            :key="$treeFilteredSlotName"
            :name="getSlotName($props, $slots, $treeFilteredSlotName)"
          />
        </template>
        <template #default="scope">
          <div class="pro-tree__tree-node">
            <div class="pro-tree__tree-node-main">
              <slot
                v-if="hasSlot($props, $slots, 'default')"
                v-bind="scope"
                :name="getSlotName($props, $slots, 'default')"
              />
              <template v-else-if="$props.highlightSearchText">
                <ProText class="pro-tree__highlight-search-text">
                  <span
                    v-for="($text, $textIndex) in $highlightSearchText(
                      scope.data[$defaultProps.label]
                    )"
                    :key="$textIndex"
                  >
                    {{ $text }}
                  </span>
                </ProText>
              </template>
              <template v-else>{{ scope.data[$defaultProps.label] }}</template>
            </div>
            <div
              v-if="
                hasSlot($props, $slots, 'node-action') ||
                $displayedActions(scope.node, scope.data).length
              "
              class="pro-tree__tree-node-action"
            >
              <slot
                v-if="hasSlot($props, $slots, 'node-action')"
                v-bind="scope"
                :name="getSlotName($props, $slots, 'node-action')"
              />
              <ProDropdown
                class="pro-tree__tree-node-action-dropdown"
                v-else-if="
                  $internalCurrentNode?.[$defaultNodeKey] ===
                  scope.data?.[$defaultNodeKey]
                "
                @command="
                  command => {
                    $onDropdownCommand(command, scope.node, scope.data)
                  }
                "
                :hide-timeout="100"
                :show-timeout="100"
              >
                <ProText type="primary">
                  {{ $defaultActionLabel }}
                  <ProIcon name="ArrowDown" />
                </ProText>
                <template #dropdown>
                  <ProDropdownItem
                    v-for="($action, $actionIndex) in $defaultActions"
                    :key="$actionIndex"
                    :command="$actionIndex"
                    :hidden="$action.hidden?.(scope.node, scope.data)"
                    :label="$action.label"
                  />
                </template>
              </ProDropdown>
            </div>
          </div>
        </template>
      </el-tree>
    </el-scrollbar>
    <pro-button
      v-if="!$props.hideLoadMoreButton && $internalTotal > $internalData.length"
      class="pro-tree__load-more-button"
      v-bind="$props.loadMoreButtonProps"
      :click="$defaultLoadMoreButtonClick"
      :label="$defaultLoadMoreButtonLabel"
      :loading="$defaultLoadMoreButtonLoading"
      :text="$defaultLoadMoreButtonText"
      :type="$defaultLoadMoreButtonType"
    />
  </div>
</template>

<script lang="ts">
export default {
  name: 'ProTree',
  inheritAttrs: false,
}
</script>

<script lang="ts" setup>
import ProButton from '../../button'
import ProDropdown from '../../dropdown'
import ProDropdownItem from '../../dropdown-item'
import ProIcon from '../../icon'
import ProInput from '../../input'
import ProText from '../../text'
import { Search } from '@element-plus/icons-vue'
import {
  getFilteredSlotNames,
  getSlotName,
  hasSlot,
} from 'component-library-utils/slot'
import { ElLoading, ElMessage, ElScrollbar, ElTree } from 'element-plus'
import { isFunction, isNumber, isString, isUndefined } from 'lodash-es'
import { ref, inject, computed, watch, useSlots, nextTick } from 'vue'
import type {
  Node,
  ProTreeInjects,
  TreeCheckedStatusObject,
  TreeData,
  TreeExtendedProps,
  TreeInstance,
} from './tree'

/* 属性 */
const $props = withDefaults(defineProps<TreeExtendedProps>(), {
  expandOnClickNode: undefined,
  hideLoadMoreButton: undefined,
  hideSearchInput: undefined,
  highlightCurrent: undefined,
  highlightSearchText: undefined,
  loading: undefined,
})
/* 注入 */
const $injects = inject<ProTreeInjects>('proTreeInjects', {})
/* 事件 */
const $emits = defineEmits([
  'update:checked-nodes',
  'update:current-node',
  'update:loading',
])
/* 插槽 */
const $slots = useSlots()
const $treeSlotNames = ['default', 'empty']
const $treeFilteredSlotNames = getFilteredSlotNames(
  $props,
  $slots,
  $treeSlotNames
)
/* 实例 */
const $treeRef = ref<TreeInstance>()
/* 辅助参数 */
let $loadingInstance: any = null
const $onSearchInputSearch = () => {
  $props.beforeSearchInputEnter?.()
  if ($props.requestApi) {
    $internalPaginationCurrentPage.value = 1
    query()
  } else {
    $treeRef.value?.filter($internalSearchInputModelValue.value)
  }
}
const $highlightSearchText = computed(() => (text: string) => {
  if (text && $internalSearchInputModelValue.value) {
    const startIndex = text.indexOf($internalSearchInputModelValue.value)
    const endIndex = startIndex + $internalSearchInputModelValue.value.length
    if (startIndex === -1) {
      return [text]
    } else {
      return [
        text.substring(0, startIndex),
        text.substring(startIndex, endIndex),
        text.substring(endIndex),
      ]
    }
  } else {
    return [text]
  }
})
const $displayedActions = computed(
  () => (node: Node, data: Record<string, any>) => {
    return $defaultActions.value.filter(
      action => !action.hidden || !action.hidden?.(node, data)
    )
  }
)
const $onDropdownCommand = (
  command: number,
  node: Node,
  data: Record<string, any>
) => {
  $defaultActions.value
    .find((action, actionIndex) => actionIndex === command)
    ?.click?.(node, data)
}
/* 默认值（内部不做修改） */
const $defaultActionLabel = computed(() => {
  if (!isUndefined($props.actionLabel)) {
    return $props.actionLabel
  }
  return '操作'
})
const $defaultActions = computed(() => {
  if (!isUndefined($props.actions)) {
    return $props.actions
  }
  return []
})
const $defaultCheck = (
  data: Record<string, any>,
  treeCheckedStatusObject: TreeCheckedStatusObject
) => {
  $internalCheckedNodes.value = treeCheckedStatusObject.checkedNodes
}
const $defaultCurrentChange = (data: Record<string, any>, node: Node) => {
  $internalCurrentNode.value = data
}
const $defaultExpandOnClickNode = computed(() => {
  if (!isUndefined($props.expandOnClickNode)) {
    return $props.expandOnClickNode
  }
  return false
})
const $defaultFilterNodeMethod = (
  value: string | number,
  data: Record<string, any>,
  node: Node
) => {
  if (!isUndefined($props.requestApi)) {
    return true
  }
  if (!isUndefined($props.filterNodeMethod)) {
    return $props.filterNodeMethod(value, data, node)
  }
  if (!isUndefined($props.data)) {
    if (isFunction($defaultProps.value.label)) {
      return $defaultProps.value.label(data, node).includes(value as string)
    } else if (isString($defaultProps.value.label)) {
      return data[$defaultProps.value.label].includes(value)
    } else {
      return data
    }
  }
  return true
}
const $defaultHighlightCurrent = computed(() => {
  if (!isUndefined($props.highlightCurrent)) {
    return $props.highlightCurrent
  }
  return true
})
const $defaultLoadMoreButtonClick = () => {
  $internalPaginationCurrentPage.value += 1
  query()
  $props.loadMoreButtonProps?.click?.()
}
const $defaultLoadMoreButtonLabel = computed(() => {
  if (!isUndefined($props.loadMoreButtonProps?.label)) {
    return $props.loadMoreButtonProps!.label
  }
  return '加载更多'
})
const $defaultLoadMoreButtonLoading = computed(() => {
  if (!isUndefined($props.loadMoreButtonProps?.loading)) {
    return $props.loadMoreButtonProps!.loading || $internalLoading.value
  }
  return $internalLoading.value
})
const $defaultLoadMoreButtonText = computed(() => {
  if (!isUndefined($props.loadMoreButtonProps?.text)) {
    return $props.loadMoreButtonProps!.text
  }
  return true
})
const $defaultLoadMoreButtonType = computed(() => {
  if (!isUndefined($props.loadMoreButtonProps?.type)) {
    return $props.loadMoreButtonProps!.type
  }
  return 'primary'
})
const $defaultMaxHeight = computed(() => {
  if (!isUndefined($props.maxHeight)) {
    if ($props.maxHeight < 200) {
      return '200px'
    } else {
      return `${$props.maxHeight}px`
    }
  }
  return ''
})
const $defaultNodeKey = computed(() => {
  if (!isUndefined($props.nodeKey)) {
    return $props.nodeKey
  }
  return ''
})
const $defaultPaginationProps = computed(() => {
  return Object.assign(
    {},
    $injects.paginationProps?.props,
    $props.paginationProps?.props
  )
})
const $defaultProps = computed(() => {
  const props = {
    children: 'children',
    disabled: 'disabled',
    label: 'label',
  }
  if (!isUndefined($props.props)) {
    return Object.assign(props, $props.props)
  }
  return props
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
const $defaultSearchInputDisabled = computed(() => {
  if (!isUndefined($props.searchInputProps?.disabled)) {
    return $props.searchInputProps!.disabled || $internalLoading.value
  }
  return $internalLoading.value
})
/* 默认值（内部可做修改） */
let $internalCheckedNodes = ref<Record<string, any>[]>([])
watch(
  () => $props.checkedNodes,
  value => {
    if (!isUndefined(value)) {
      nextTick(() => {
        $internalCheckedNodes.value = value
        const currentCheckedKeys = value.map(
          node => node[$defaultNodeKey.value]
        )
        $treeRef.value?.setCheckedKeys(currentCheckedKeys)
      })
    }
  },
  {
    deep: true,
    immediate: true,
  }
)
watch(
  () => $internalCheckedNodes.value,
  value => {
    $emits('update:checked-nodes', value)
  },
  {
    deep: true,
  }
)
let $internalCurrentNode = ref<Record<string, any>>({})
watch(
  () => $props.currentNode,
  value => {
    if (!isUndefined(value) && value[$defaultNodeKey.value]) {
      $internalCurrentNode.value = value
      nextTick(() => {
        $treeRef.value?.setCurrentNode(value as Node)
      })
    }
  },
  {
    deep: true,
    immediate: true,
  }
)
watch(
  () => $internalCurrentNode.value,
  value => {
    $emits('update:current-node', value)
  },
  {
    deep: true,
  }
)
let $internalData = ref<TreeData>([])
watch(
  () => $props.data,
  value => {
    if (!isUndefined(value)) {
      $internalData.value = value!
    }
  },
  {
    deep: true,
    immediate: true,
  }
)
watch(
  () => $internalData.value,
  () => {
    if (Object.keys($internalCurrentNode.value).length) {
      nextTick(() => {
        $treeRef.value?.setCurrentNode($internalCurrentNode.value as Node)
      })
    }
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
    if (value) {
      $loadingInstance = ElLoading.service({
        target: $treeRef.value?.$el,
      })
    } else {
      if ($loadingInstance) {
        $loadingInstance.close()
        $loadingInstance = null
      }
    }
    $emits('update:loading', value)
  }
)
let $internalPaginationCurrentPage = ref(1)
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
let $internalSearchInputModelValue = ref('')
watch(
  () => $props.searchInputProps?.modelValue,
  value => {
    if (!isUndefined(value)) {
      $internalSearchInputModelValue.value = value as string
    }
  },
  {
    immediate: true,
  }
)
watch(
  () => $internalSearchInputModelValue.value,
  value => {
    $props.searchInputProps!.modelValue = value
  }
)
let $internalTotal = ref(0)
/* 获取请求参数（expose） */
const getParams = () => {
  let params: Record<string, any> = {
    searchText: $internalSearchInputModelValue.value,
  }
  if (!$props.hideLoadMoreButton) {
    params = {
      ...params,
      [$defaultPaginationProps.value.currentPage || 'currentPage']:
        $internalPaginationCurrentPage.value,
      [$defaultPaginationProps.value.pageSize || 'pageSize']:
        $internalPaginationPageSize.value,
    }
  }
  if ($props.customRequestParams) {
    params = $props.customRequestParams(params)
  }
  return params
}
/* 查询（expose） */
const query = async () => {
  if ($props.requestApi) {
    $internalLoading.value = true
    try {
      const params = getParams()
      $props.beforeRequest?.(params)
      const res = await $props.requestApi?.(params)
      if (res) {
        $props.onRequestSuccess?.(res, params)
        if (!$props.hideLoadMoreButton) {
          if ($internalPaginationCurrentPage.value === 1) {
            $internalData.value = []
          }
          $internalData.value = $internalData.value.concat(
            $defaultResponseMapping(res, params)?.data || res.data
          )
          $internalTotal.value = isNumber(
            $defaultResponseMapping(res, params)?.total
          )
            ? $defaultResponseMapping(res, params)?.total
            : res.total
        } else {
          $internalData.value =
            $defaultResponseMapping(res, params)?.data || res.data
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
}

defineExpose({
  /* 实例 */
  ref: $treeRef,
  /* 扩展的方法 */
  getParams,
  query,
})
</script>
