import type { Meta, StoryObj } from '@storybook/vue3'
/* 开发时引入方式（按需引入） */
import ProCarouselDialog from 'component-library-components/carousel-dialog'
/* 打包后引入方式（按需引入） */
// import { ProCarouselDialog } from 'component-library'

const meta: Meta = {
  title: 'Business Components/ProCarouselDialog',
  component: ProCarouselDialog,
  argTypes: {
    /* attributes -> new v-model attributes */
    loading: {
      description: '走马灯对话框加载中状态',
      table: {
        category: 'attributes',
        subcategory: 'new v-model attributes',
      },
    },
    show: {
      description: '显示 / 隐藏走马灯对话框',
      table: {
        category: 'attributes',
        subcategory: 'new v-model attributes',
      },
    },
    /* attributes -> new attributes */
    carouselProps: {
      control: false,
      description: '走马灯的属性',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
        type: {
          summary: 'ProCarouselProps',
        },
      },
    },
    dialogProps: {
      control: false,
      description: '对话框的属性',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
        type: {
          summary: 'ProDialogProps',
        },
      },
    },
    /* exposes -> new expose */
    proCarouselRef: {
      description: '走马灯的实例',
      table: {
        category: 'exposes',
        subcategory: 'new expose',
        type: {
          summary: 'ProCarouselInstance',
        },
      },
    },
    proDialogRef: {
      description: '对话框的实例',
      table: {
        category: 'exposes',
        subcategory: 'new expose',
        type: {
          summary: 'ProDialogInstance',
        },
      },
    },
  },
}
export default meta

export const UseCase: StoryObj<typeof ProCarouselDialog> = {
  render: args => ({
    components: {
      ProCarouselDialog,
    },
    setup() {
      const imageUrl = '../static/image.webp'
      const openImageDialog = () => {
        args.show = true
      }
      return {
        args,
        imageUrl,
        openImageDialog,
      }
    },
    template: `
      <img style="width: 5rem; height: 5rem; cursor: pointer;" :src="imageUrl" @click="openImageDialog" />
      <pro-carousel-dialog
        v-bind="args"
        v-model:show="args.show"
      >
        <template #carousel-item="scope">
          <img style="width: 100%; height: 100%; object-fit: contain;" :src="scope.extraParams.src" />
        </template>
      </pro-carousel-dialog>
    `,
  }),
  args: {
    /* attributes -> new v-model attributes */
    loading: false,
    show: false,
    /* attributes -> new attributes */
    carouselProps: {
      autoplay: false,
      items: [
        {
          contentSlotName: 'carousel-item',
          extraParams: {
            src: '../static/image.webp',
          },
        },
        {
          contentSlotName: 'carousel-item',
          extraParams: {
            src: '../static/image.webp',
          },
        },
        {
          contentSlotName: 'carousel-item',
          extraParams: {
            src: '../static/image.webp',
          },
        },
      ],
      indicatorPosition: 'outside',
      trigger: 'click',
    },
    dialogProps: {
      title: '图片预览',
      beforeClose: () => {
        console.log('beforeClose')
      },
    },
  },
}
