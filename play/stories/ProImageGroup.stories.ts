import type { Meta, StoryObj } from '@storybook/vue3'
/* 开发时引入方式（按需引入） */
import ProImageGroup from 'component-library-components/image-group'
/* 打包后引入方式（按需引入） */
// import { ProImageGroup } from 'component-library'

const meta: Meta = {
  title: 'Base Components/ProImageGroup',
  component: ProImageGroup,
  argTypes: {
    /* attributes -> new attributes */
    border: {
      description: '是否显示边框',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
      },
    },
    fit: {
      description: '自适应方式',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
        type: {
          summary: `"" | "contain" | "cover" | "fill" | "none" | "scale-down"`,
        },
      },
    },
    gutter: {
      description: '图片间距',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
        type: {
          summary: 'number',
        },
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
    images: {
      description: '图片组渲染的数组',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
        type: {
          summary: 'ProImageProps[]',
        },
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
    /* exposes -> new expose */
    proImageRef: {
      description: '图片的实例',
      table: {
        category: 'exposes',
        subcategory: 'new expose',
        type: {
          summary: 'ProImageInstance[]',
        },
      },
    },
  },
}
export default meta

export const UseCase: StoryObj<typeof ProImageGroup> = {
  render: args => ({
    components: {
      ProImageGroup,
    },
    setup() {
      return {
        args,
      }
    },
    template: `
      <pro-image-group
        v-bind="args"
      />
    `,
  }),
  args: {
    /* attributes -> new attributes */
    border: false,
    fit: 'contain',
    gutter: 20,
    height: 100,
    images: [
      {
        src: '../static/image.webp',
      },
      {
        src: '../static/image.webp',
      },
      {
        src: '../static/image.webp',
      },
    ],
    width: 100,
  },
}
