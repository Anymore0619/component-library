import type { Meta, StoryObj } from '@storybook/vue3'
/* 开发时引入方式（按需引入） */
import ProCarousel from 'component-library-components/carousel'
/* 打包后引入方式（按需引入） */
// import { ProCarousel } from 'component-library'

const meta: Meta = {
  title: 'Base Components/ProCarousel',
  component: ProCarousel,
  argTypes: {
    /* attributes -> new attributes */
    defaultSlotName: {
      control: false,
      description:
        '走马灯内容的插槽名称（优先级 defaultSlotName > default > items）',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
      },
    },
    items: {
      description:
        '走马灯渲染的数组（优先级 defaultSlotName > default > items）',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
        type: {
          summary: 'ProCarouselProps[]',
        },
      },
    },
    /* attributes -> attributes corresponding existing events */
    change: {
      control: false,
      description: '幻灯片切换时触发',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing events',
        type: {
          summary: '(index?: number, oldIndex?: number) => void',
        },
      },
    },
    /* exposes -> new expose */
    proCarouselItemRef: {
      description: '幻灯片的实例',
      table: {
        category: 'exposes',
        subcategory: 'new expose',
        type: {
          summary: 'ProCarouselItemInstance[]',
        },
      },
    },
    ref: {
      description: '走马灯的实例',
      table: {
        category: 'exposes',
        subcategory: 'new expose',
        type: {
          summary: 'ProCarouselInstance',
        },
      },
    },
  },
}
export default meta

export const UseCase: StoryObj<typeof ProCarousel> = {
  render: args => ({
    components: {
      ProCarousel,
    },
    setup() {
      return {
        args,
      }
    },
    template: `
      <pro-carousel
        style="width: 25rem;"
        v-bind="args"
      >
        <template #carousel-item="scope">
          <div style="line-height: 300px; text-align: center;">carousel-item-{{ scope.index + 1 }}</div>
        </template>
      </pro-carousel>
    `,
  }),
  args: {
    /* attributes -> new attributes */
    defaultSlotName: '',
    items: [
      {
        contentSlotName: 'carousel-item',
      },
      {
        contentSlotName: 'carousel-item',
      },
      {
        contentSlotName: 'carousel-item',
      },
    ],
    /* attributes -> attributes corresponding existing events */
    change: (index, oldIndex) => {
      console.log(index)
      console.log(oldIndex)
    },
  },
}
