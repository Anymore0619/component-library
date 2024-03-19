/* TODO: el-descriptions 组件必须使用 el-descriptions-item 组件作为子组件，无法抽取 pro-descriptions-item 组件 */
import Descriptions from './descriptions.vue'
// import DescriptionsItem from './descriptions-item.vue'
import { ElDescriptionsItem } from 'element-plus'
import type { Writable } from 'component-library-utils/types'
import type { DescriptionInstance } from 'element-plus/es/components/descriptions/src/description'
import type {
  IDescriptionsInject,
  IDescriptionsItemInject,
} from 'element-plus/es/components/descriptions/src/descriptions.type'

/* 已有的属性 */
type DescriptionsItemProps = IDescriptionsItemInject
/* 扩展的属性 */
type DescriptionsItemExtendedProps = {
  /* 新增的属性 */
  extraParams?: Record<string, any>
  hidden?: boolean
  labelSlotName?: string
  title?: string
  titleAlign?: 'left' | 'center' | 'right'
  titleClassName?: string
  titleSlotName?: string
  /* 对应已有属性的属性 */
  label?: string
  labelClassName?: string
}
/* 可传递的属性 */
type ProDescriptionsItemProps = Writable<Partial<DescriptionsItemProps>> &
  DescriptionsItemExtendedProps
/* 实例 */
type DescriptionsItemInstance = InstanceType<typeof ElDescriptionsItem>
// type ProDescriptionsItemInstance = InstanceType<typeof DescriptionsItem>
export type {
  /* 属性 */
  DescriptionsItemProps,
  DescriptionsItemExtendedProps,
  ProDescriptionsItemProps,
  /* 实例 */
  DescriptionsItemInstance,
  // ProDescriptionsItemInstance,
}

/* 已有的属性 */
type DescriptionsProps = IDescriptionsInject
/* 扩展的属性 */
type DescriptionsExtendedProps = {
  /* 新增的属性 */
  defaultSlotName?: string
  extraSlotName?: string
  items?: ProDescriptionsItemProps[]
  titleSlotName?: string
}
/* 可传递的属性 */
type ProDescriptionsProps = Writable<Partial<DescriptionsProps>> &
  DescriptionsExtendedProps
/* 实例 */
type DescriptionsInstance = DescriptionInstance
type ProDescriptionsInstance = InstanceType<typeof Descriptions>

export type {
  /* 属性 */
  DescriptionsProps,
  DescriptionsExtendedProps,
  ProDescriptionsProps,
  /* 实例 */
  DescriptionsInstance,
  ProDescriptionsInstance,
}
