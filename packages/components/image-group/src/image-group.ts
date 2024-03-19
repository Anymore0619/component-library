import ImageGroup from './image-group.vue'
import type { ProImageProps } from '../../image'

/* 扩展的属性 */
type ImageGroupExtendedProps = {
  /* 新增的属性 */
  border?: boolean
  fit?: '' | 'contain' | 'cover' | 'fill' | 'none' | 'scale-down'
  gutter?: number
  height?: number
  images?: ProImageProps[]
  width?: number
}
/* 可传递的属性 */
type ProImageGroupProps = ImageGroupExtendedProps
/* 实例 */
type ProImageGroupInstance = InstanceType<typeof ImageGroup>

export type {
  /* 属性 */
  ImageGroupExtendedProps,
  ProImageGroupProps,
  /* 实例 */
  ProImageGroupInstance,
}
