import type { Meta, StoryObj } from '@storybook/vue3'
/* 开发时引入方式（按需引入） */
import ProDescriptions from 'component-library-components/descriptions'
/* 打包后引入方式（按需引入） */
// import { ProDescriptions } from 'component-library'

const meta: Meta = {
  title: 'Base Components/ProDescriptions',
  component: ProDescriptions,
  argTypes: {
    /* attributes -> new attributes */
    defaultSlotName: {
      control: false,
      description:
        '描述列表内容的插槽名称（优先级 defaultSlotName > default > items）',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
      },
    },
    extraSlotName: {
      control: false,
      description: '描述列表操作区的插槽名称（优先级 extraSlotName > extra）',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
      },
    },
    titleSlotName: {
      control: false,
      description: '描述列表标题的插槽名称（优先级 defaultSlotName > title',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
      },
    },
    items: {
      description:
        '描述列表渲染的数组（优先级 defaultSlotName > default > items）',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
        type: {
          summary: 'ProDescriptionsItemProps[]',
        },
      },
    },
    /* exposes -> new expose */
    proCarouselItemRef: {
      description: '描述列表项的实例',
      table: {
        category: 'exposes',
        subcategory: 'new expose',
        type: {
          summary: 'ProDescriptionsItemInstance[]',
        },
      },
    },
    ref: {
      description: '描述列表的实例',
      table: {
        category: 'exposes',
        subcategory: 'new expose',
        type: {
          summary: 'ProDescriptionsInstance',
        },
      },
    },
  },
}
export default meta

export const UseCase: StoryObj<typeof ProDescriptions> = {
  render: args => ({
    components: {
      ProDescriptions,
    },
    setup() {
      return {
        args,
      }
    },
    template: `
      <pro-descriptions
        style="width: 75rem;"
        v-bind="args"
      />
    `,
  }),
  args: {
    /* attributes -> new attributes */
    defaultSlotName: '',
    extraSlotName: '',
    items: [
      {
        extraParams: {},
        hidden: false,
        label: 'descriptions-item-1',
        labelClassName: '',
        labelSlotName: '',
        title: 'descriptions-item-1',
        titleAlign: 'left',
        titleClassName: '',
        titleSlotName: '',
      },
      {
        label: 'descriptions-item-2',
        title: 'descriptions-item-2',
      },
      {
        label: 'descriptions-item-3',
        title: 'descriptions-item-3',
      },
    ],
    titleSlotName: '',
  },
}
