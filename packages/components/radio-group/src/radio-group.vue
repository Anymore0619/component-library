<template>
  <el-radio-group
    ref="$radioGroupRef"
    class="pro-radio-group"
    v-bind="$attrs"
    v-on="$props"
  >
    <template
      v-for="$radioGroupFilteredSlotName in $radioGroupFilteredSlotNames"
      :key="$radioGroupFilteredSlotName"
      #[$radioGroupFilteredSlotName]="scope"
    >
      <slot
        v-bind="scope"
        :key="$radioGroupFilteredSlotName"
        :name="getSlotName($props, $slots, $radioGroupFilteredSlotName)"
      />
    </template>
    <template #default="scope">
      <slot
        v-if="hasSlot($props, $slots, 'default')"
        v-bind="scope"
        :name="getSlotName($props, $slots, 'default')"
      />
      <template v-else>
        <pro-radio
          ref="$proRadioRef"
          v-for="($radio, $radioIndex) in $props.radios"
          :key="$radioIndex"
          v-bind="$radio"
          :type="$defaultType"
        >
          <!-- 直接传递所有插槽至子组件 -->
          <template
            v-for="$slotName in $slotNames"
            :key="$slotName"
            #[$slotName]="radioScope"
          >
            <slot v-bind="radioScope" :key="$slotName" :name="$slotName" />
          </template>
        </pro-radio>
      </template>
    </template>
  </el-radio-group>
</template>

<script lang="ts">
export default {
  name: 'ProRadioGroup',
  inheritAttrs: false,
}
</script>

<script lang="ts" setup>
import ProRadio from '../../radio'
import {
  getFilteredSlotNames,
  getSlotName,
  hasSlot,
} from 'component-library-utils/slot'
import { ElRadioGroup } from 'element-plus'
import { isUndefined } from 'lodash-es'
import { ref, computed, useSlots } from 'vue'
import type { RadioGroupExtendedProps, RadioGroupInstance } from './radio-group'
import type { ProRadioInstance } from '../../radio'

/* 属性 */
const $props = defineProps<RadioGroupExtendedProps>()
/* 插槽 */
const $slots = useSlots()
const $slotNames = Object.keys($slots)
const $radioGroupSlotNames = []
const $radioGroupFilteredSlotNames = getFilteredSlotNames(
  $props,
  $slots,
  $radioGroupSlotNames
)
/* 实例 */
const $proRadioRef = ref<ProRadioInstance>()
const $radioGroupRef = ref<RadioGroupInstance>()
/* 默认值（内部不做修改） */
const $defaultType = computed(() => {
  if (!isUndefined($props.type)) {
    return $props.type
  }
  return 'radio'
})

defineExpose({
  /* 实例 */
  proRadioRef: $proRadioRef,
  ref: $radioGroupRef,
})
</script>
