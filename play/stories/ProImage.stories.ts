import type { Meta, StoryObj } from '@storybook/vue3'
/* 开发时引入方式（按需引入） */
import ProImage from 'component-library-components/image'
/* 打包后引入方式（按需引入） */
// import { ProImage } from 'component-library'

const meta: Meta = {
  title: 'Base Components/ProImage',
  component: ProImage,
  argTypes: {
    /* attributes -> new attributes */
    border: {
      description: '是否显示边框',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
      },
    },
    errorSlotName: {
      control: false,
      description: '加载失败内容的插槽名称（优先级 errorSlotName > error）',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
      },
    },
    height: {
      description: '图片高度',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
        type: {
          summary: 'string | number',
        },
      },
    },
    placeholderSlotName: {
      control: false,
      description:
        '占位符内容的插槽名称（优先级 placeholderSlotName > placeholder）',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
      },
    },
    viewerSlotName: {
      control: false,
      description: '图片描述内容的插槽名称（优先级 viewerSlotName > viewer）',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
      },
    },
    width: {
      description: '图片宽度',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
        type: {
          summary: 'string | number',
        },
      },
    },
    /* attributes -> attributes corresponding existing attributes */
    fit: {
      description: '自适应方式',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing attributes',
        type: {
          summary: `"" | "contain" | "cover" | "fill" | "none" | "scale-down"`,
        },
      },
    },
    previewSrcList: {
      description: '预览图片的数组',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing attributes',
        type: {
          summary: 'string[]',
        },
      },
    },
    previewTeleported: {
      description: 'image-viewer 是否插入至 body 元素',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing attributes',
      },
    },
    src: {
      description: '图片源地址',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing attributes',
      },
    },
    /* attributes -> attributes corresponding existing events */
    close: {
      control: false,
      description: 'viewer 隐藏时触发',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing events',
        type: {
          summary: '() => void',
        },
      },
    },
    error: {
      control: false,
      description: '图片加载失败时触发',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing events',
        type: {
          summary: '(error?: Error) => void',
        },
      },
    },
    load: {
      control: false,
      description: '图片加载成功时触发',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing events',
        type: {
          summary: '(event?: Event) => void',
        },
      },
    },
    show: {
      control: false,
      description: 'viewer 显示时触发',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing events',
        type: {
          summary: '() => void',
        },
      },
    },
    switch: {
      control: false,
      description: 'viewer 切换图像时触发',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing events',
        type: {
          summary: '(index?: number) => void',
        },
      },
    },
    /* exposes -> new expose */
    ref: {
      description: '图片的实例',
      table: {
        category: 'exposes',
        subcategory: 'new expose',
        type: {
          summary: 'ImageInstance',
        },
      },
    },
  },
}
export default meta

export const UseCase: StoryObj<typeof ProImage> = {
  render: args => ({
    components: {
      ProImage,
    },
    setup() {
      return {
        args,
      }
    },
    template: `
      <pro-image
        v-bind="args"
      />
    `,
  }),
  args: {
    /* attributes -> new attributes */
    border: false,
    errorSlotName: '',
    height: 100,
    placeholderSlotName: '',
    viewerSlotName: '',
    width: 100,
    /* attributes -> attributes corresponding existing attributes */
    fit: 'contain',
    previewSrcList: ['../static/image.webp'],
    previewTeleported: true,
    src: '../static/image.webp',
    /* attributes -> attributes corresponding existing events */
    close: () => {
      console.log('close')
    },
    error: error => {
      console.log(error)
    },
    load: event => {
      console.log(event)
    },
    show: () => {
      console.log('show')
    },
    switch: index => {
      console.log(index)
    },
  },
}
