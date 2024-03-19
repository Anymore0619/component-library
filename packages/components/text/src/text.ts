import Text from './text.vue'
import { ElText } from 'element-plus'
import type { Writable } from 'component-library-utils/types'
import type { TextProps } from 'element-plus'

/* 扩展的属性 */
type TextExtendedProps = {
  /* 新增的属性 */
  defaultSlotName?: string
  label?: string
}
/* 可传递的属性 */
type ProTextProps = Writable<Partial<TextProps>> & TextExtendedProps
/* 实例 */
type TextInstance = InstanceType<typeof ElText>
type ProTextInstance = InstanceType<typeof Text>

export type {
  /* 属性 */
  TextProps,
  TextExtendedProps,
  ProTextProps,
  /* 实例 */
  TextInstance,
  ProTextInstance,
}
