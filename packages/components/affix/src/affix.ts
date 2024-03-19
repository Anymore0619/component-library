import Affix from './affix.vue'
import type { Writable } from 'component-library-utils/types'
import type { AffixInstance, AffixProps } from 'element-plus'

/* 扩展的属性 */
type AffixExtendedProps = {
  /* 新增的属性 */
  defaultSlotName?: string
  /* 对应已有事件的属性 */
  change?: (fixed?: boolean) => void
  scroll?: (value?: { scrollTop?: number; fixed?: boolean }) => void
}
/* 可传递的属性 */
type ProAffixProps = Writable<Partial<AffixProps>> & AffixExtendedProps
/* 实例 */
type ProAffixInstance = InstanceType<typeof Affix>

export type {
  /* 属性 */
  AffixProps,
  AffixExtendedProps,
  ProAffixProps,
  /* 实例 */
  AffixInstance,
  ProAffixInstance,
}
