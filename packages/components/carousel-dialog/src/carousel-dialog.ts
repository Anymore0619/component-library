import CarouselDialog from './carousel-dialog.vue'
import type { ProCarouselProps } from '../../carousel'
import type { ProDialogProps } from '../../dialog'

/* 组件内走马灯的属性 */
type CarouselDialogCarouselProps = ProCarouselProps
/* 组件内弹窗的属性 */
type CarouselDialogDialogProps = ProDialogProps
/* 扩展的属性 */
type CarouselDialogExtendedProps = {
  /* 新增的 v-model 属性 */
  loading?: boolean
  show?: boolean
  /* 新增的属性 */
  carouselProps?: CarouselDialogCarouselProps
  dialogProps?: CarouselDialogDialogProps
}
/* 可传递的属性 */
type ProCarouselDialogProps = CarouselDialogExtendedProps
/* 实例 */
type ProCarouselDialogInstance = InstanceType<typeof CarouselDialog>

export type {
  /* 属性 */
  CarouselDialogCarouselProps,
  CarouselDialogDialogProps,
  CarouselDialogExtendedProps,
  ProCarouselDialogProps,
  /* 实例 */
  ProCarouselDialogInstance,
}
