import type { Meta, StoryObj } from '@storybook/vue3'
/* 开发时引入方式（按需引入） */
import ProCarousel from 'component-library-components/carousel'
import ProCarouselItem from 'component-library-components/carousel-item'
/* 打包后引入方式（按需引入） */
// import { ProCarousel, ProCarouselItem } from 'component-library'

const meta: Meta = {
  title: 'Base Components/ProCarouselItem',
  component: ProCarouselItem,
  argTypes: {
    /* attributes -> new attributes */
    contentSlotName: {
      control: false,
      description: '幻灯片内容的插槽名称（优先级 contentSlotName > content）',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
      },
    },
    extraParams: {
      control: false,
      description: '幻灯片内容的附加参数',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
        type: {
          summary: 'Record<string, any>',
        },
      },
    },
    /* slots -> new slot */
    content: {
      control: false,
      description:
        '幻灯片内容的插槽（优先级 contentSlotName > content）（default 插槽与 pro-carousel 中的 default 插槽存在重名冲突，使用 content 插槽替代）',
      table: {
        category: 'slots',
        subcategory: 'new slots',
        type: {
          summary: 'Slot',
        },
      },
    },
    /* exposes -> new expose */
    ref: {
      description: '幻灯片的实例',
      table: {
        category: 'exposes',
        subcategory: 'new expose',
        type: {
          summary: 'CarouselItemInstance',
        },
      },
    },
  },
}
export default meta

export const UseCase: StoryObj<typeof ProCarouselItem> = {
  render: args => ({
    components: {
      ProCarousel,
      ProCarouselItem,
    },
    setup() {
      return {
        args,
      }
    },
    template: `
      <pro-carousel
        style="width: 25rem;"
      >
        <pro-carousel-item>
          <template #content>
            <div style="line-height: 300px; text-align: center;">carousel-item-1</div>
          </template>
        </pro-carousel-item>
        <pro-carousel-item>
          <template #content>
            <div style="line-height: 300px; text-align: center;">carousel-item-2</div>
          </template>
        </pro-carousel-item>
        <pro-carousel-item>
          <template #content>
            <div style="line-height: 300px; text-align: center;">carousel-item-3</div>
          </template>
        </pro-carousel-item>
      </pro-carousel>
    `,
  }),
  args: {},
}
