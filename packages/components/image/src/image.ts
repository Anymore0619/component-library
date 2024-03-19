import Image from './image.vue'
import { ElImage } from 'element-plus'
import type { Writable } from 'component-library-utils/types'
import type { ImageProps } from 'element-plus'

/* 扩展的属性 */
type ImageExtendedProps = {
  /* 新增的属性 */
  border?: boolean
  errorSlotName?: string
  height?: number
  placeholderSlotName?: string
  viewerSlotName?: string
  width?: number
  /* 对应已有属性的属性 */
  fit?: '' | 'contain' | 'cover' | 'fill' | 'none' | 'scale-down'
  previewSrcList?: string[]
  previewTeleported?: boolean
  src?: string
  /* 对应已有事件的属性 */
  close?: () => void
  error?: (error?: Error) => void
  load?: (event?: Event) => void
  show?: () => void
  switch?: (index?: number) => void
}
/* 可传递的属性 */
type ProImageProps = Writable<Partial<ImageProps>> & ImageExtendedProps
/* 实例 */
type ImageInstance = InstanceType<typeof ElImage>
type ProImageInstance = InstanceType<typeof Image>

export type {
  /* 属性 */
  ImageProps,
  ImageExtendedProps,
  ProImageProps,
  /* 实例 */
  ImageInstance,
  ProImageInstance,
}
