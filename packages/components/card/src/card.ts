import Card from './card.vue'
import type { Writable } from 'component-library-utils/types'
import type { CardInstance, CardProps } from 'element-plus'

/* 扩展的属性 */
type CardExtendedProps = {
  /* 新增的属性 */
  defaultSlotName?: string
  headerSlotName?: string
  /* 对应已有属性的属性 */
  shadow?: 'always' | 'hover' | 'never'
}
/* 可传递的属性 */
type ProCardProps = Writable<Partial<CardProps>> & CardExtendedProps
/* 实例 */
type ProCardInstance = InstanceType<typeof Card>

export type {
  /* 属性 */
  CardProps,
  CardExtendedProps,
  ProCardProps,
  /* 实例 */
  CardInstance,
  ProCardInstance,
}
