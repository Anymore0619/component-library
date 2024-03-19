import Carousel from './carousel.vue'
import type { ProCarouselItemProps } from '../../carousel-item'
import type { Writable } from 'component-library-utils/types'
import type { CarouselInstance, CarouselProps } from 'element-plus'

/* 扩展的属性 */
type CarouselExtendedProps = {
  /* 新增的属性 */
  defaultSlotName?: string
  items?: ProCarouselItemProps[]
  /* 对应已有事件的属性 */
  change?: (index?: number, oldIndex?: number) => void
}
/* 可传递的属性 */
type ProCarouselProps = Writable<Partial<CarouselProps>> & CarouselExtendedProps
/* 实例 */
type ProCarouselInstance = InstanceType<typeof Carousel>

export type {
  /* 属性 */
  CarouselProps,
  CarouselExtendedProps,
  ProCarouselProps,
  /* 实例 */
  CarouselInstance,
  ProCarouselInstance,
}
