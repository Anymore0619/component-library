import type { Meta, StoryObj } from '@storybook/vue3'
/* 开发时引入方式（按需引入） */
import ProPagination from 'component-library-components/pagination'
/* 打包后引入方式（按需引入） */
// import { ProPagination } from 'component-library'

const meta: Meta = {
  title: 'Base Components/ProPagination',
  component: ProPagination,
  argTypes: {
    /* attributes -> new attributes */
    defaultSlotName: {
      control: false,
      description:
        '自定义内容的插槽名称（优先级 defaultSlotName > default > 使用 maxTotal 时显示的总条数）',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
      },
    },
    maxTotal: {
      description:
        '最大总条数（总条数显示为 total ，实际可翻页条数小于等于 maxTotal）',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
      },
    },
    /* attributes -> attributes corresponding existing attributes */
    background: {
      description: '是否添加背景',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing attributes',
      },
    },
    layout: {
      description: '分页子组件布局',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing attributes',
      },
    },
    pageSizes: {
      description: '每页条数渲染的数组',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing attributes',
        type: {
          summary: 'number[]',
        },
      },
    },
    total: {
      description: '总条数',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing attributes',
      },
    },
    /* attributes -> attributes corresponding existing events */
    currentChange: {
      control: false,
      description: 'current-page 改变时触发',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing events',
        type: {
          summary: '(currentPage?: number) => void',
        },
      },
    },
    nextClick: {
      control: false,
      description: '点击下一页时触发',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing events',
        type: {
          summary: '(oldCurrentPage?: number) => void',
        },
      },
    },
    prevClick: {
      control: false,
      description: '点击上一页时触发',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing events',
        type: {
          summary: '(oldCurrentPage?: number) => void',
        },
      },
    },
    sizeChange: {
      control: false,
      description: 'page-size 改变时触发',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing events',
        type: {
          summary: '(pageSize?: number) => void',
        },
      },
    },
    /* exposes -> new expose */
    ref: {
      description: '分页的实例',
      table: {
        category: 'exposes',
        subcategory: 'new expose',
        type: {
          summary: 'PaginationInstance',
        },
      },
    },
  },
}
export default meta

import { ref } from 'vue'

export const UseCase: StoryObj<typeof ProPagination> = {
  render: args => ({
    components: {
      ProPagination,
    },
    setup() {
      const currentPage = ref(1)
      const pageSize = ref(10)
      return {
        args,
        currentPage,
        pageSize,
      }
    },
    template: `
      <pro-pagination
        v-bind="args"
        v-model:current-page="currentPage"
        v-model:page-size="pageSize"
      />
    `,
  }),
  args: {
    /* attributes -> new attributes */
    defaultSlotName: '',
    maxTotal: 100,
    /* attributes -> attributes corresponding existing attributes */
    background: true,
    layout: 'total, sizes, prev, pager, next, jumper',
    pageSizes: [10, 20, 30, 50, 100],
    total: 100,
    /* attributes -> attributes corresponding existing events */
    currentChange: (currentPage?: number) => {
      console.log(currentPage)
    },
    nextClick: (oldCurrentPage?: number) => {
      console.log(oldCurrentPage)
    },
    prevClick: (oldCurrentPage?: number) => {
      console.log(oldCurrentPage)
    },
    sizeChange: (pageSize?: number) => {
      console.log(pageSize)
    },
  },
}
