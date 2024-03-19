import type { Meta, StoryObj } from '@storybook/vue3'
/* 开发时引入方式（按需引入） */
import ProDropdown from 'component-library-components/dropdown'
import ProDropdownItem from 'component-library-components/dropdown-item'
/* 打包后引入方式（按需引入） */
// import { ProDropdown, ProDropdownItem } from 'component-library'

const meta: Meta = {
  title: 'Base Components/ProDropdownItem',
  component: ProDropdownItem,
  argTypes: {
    /* attributes -> new attributes */
    contentSlotName: {
      control: false,
      description:
        '下拉菜单选项内容的插槽名称（优先级 contentSlotName > content > label）',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
      },
    },
    hidden: {
      control: false,
      description: '隐藏下拉菜单选项',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
      },
    },
    label: {
      control: false,
      description: '下拉菜单选项文本',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
      },
    },
    /* slots -> new slot */
    content: {
      control: false,
      description:
        '多选框内容的插槽（优先级 contentSlotName > content > label）（default 插槽与 pro-dropdown 中的 default 插槽存在重名冲突，使用 content 插槽替代）',
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
      description: '下拉菜单选项的实例',
      table: {
        category: 'exposes',
        subcategory: 'new expose',
        type: {
          summary: 'DropdownItemInstance',
        },
      },
    },
  },
}
export default meta

export const UseCase: StoryObj<typeof ProDropdownItem> = {
  render: args => ({
    components: {
      ProDropdownItem,
      ProDropdown,
    },
    setup() {
      return {
        args,
      }
    },
    template: `
      <pro-dropdown>
        dropdown
        <template #dropdown>
          <pro-dropdown-item
            label="dropdown-item-1"
          />
          <pro-dropdown-item
            label="dropdown-item-2"
          />
          <pro-dropdown-item
            label="dropdown-item-3"
          />
        </template>
      </pro-dropdown>
    `,
  }),
  args: {},
}
