import CarouselItem from './carousel-item.vue'
import type { Writable } from 'component-library-utils/types'
import type { CarouselItemInstance, CarouselItemProps } from 'element-plus'

/* 扩展的属性 */
type CarouselItemExtendedProps = {
  /* 新增的属性 */
  contentSlotName?: string
  extraParams?: Record<string, any>
}
/* 可传递的属性 */
type ProCarouselItemProps = Writable<Partial<CarouselItemProps>> &
  CarouselItemExtendedProps
/* 实例 */
type ProCarouselItemInstance = InstanceType<typeof CarouselItem>

export type {
  /* 属性 */
  CarouselItemProps,
  CarouselItemExtendedProps,
  ProCarouselItemProps,
  /* 实例 */
  CarouselItemInstance,
  ProCarouselItemInstance,
}
