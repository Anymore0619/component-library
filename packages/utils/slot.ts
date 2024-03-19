import { camelCase } from 'lodash-es'
import type { Slots } from 'vue'

/* 获取自定义名称插槽名称 */
export function geCustomNameSlotName(
  props: Record<string, any>,
  slotName: string
) {
  return props[`${camelCase(slotName)}SlotName`]
}
/* 获取插槽名称 */
export function getSlotName(
  props: Record<string, any>,
  slots: Slots,
  slotName: string
) {
  if (hasCustomNameSlot(props, slots, slotName)) {
    return geCustomNameSlotName(props, slotName)
  } else if (hasFixedNameSlot(slots, slotName)) {
    return slotName
  }
}
/* 获取过滤后的插槽名称 */
export function getFilteredSlotNames(
  props: Record<string, any>,
  slots: Slots,
  slotNames: string[]
) {
  return slotNames.filter(slotName => hasSlot(props, slots, slotName))
}
/* 是否有自定义名称插槽 */
export function hasCustomNameSlot(
  props: Record<string, any>,
  slots: Slots,
  slotName: string
) {
  return Boolean(
    geCustomNameSlotName(props, slotName) &&
      slots[geCustomNameSlotName(props, slotName)]
  )
}
/* 是否有固定名称插槽 */
export function hasFixedNameSlot(slots: Slots, slotName: string) {
  return Boolean(slots[slotName])
}
/* 是否有插槽 */
export function hasSlot(
  props: Record<string, any>,
  slots: Slots,
  slotName: string
) {
  return (
    hasCustomNameSlot(props, slots, slotName) ||
    hasFixedNameSlot(slots, slotName)
  )
}
