import type { Meta, StoryObj } from '@storybook/vue3'
/* 开发时引入方式（按需引入） */
import ProDropdown from 'component-library-components/dropdown'
/* 打包后引入方式（按需引入） */
// import { ProDropdown } from 'component-library'

const meta: Meta = {
  title: 'Base Components/ProDropdown',
  component: ProDropdown,
  argTypes: {
    /* attributes -> new attributes */
    defaultSlotName: {
      control: false,
      description:
        '触发下拉菜单的插槽名称（优先级 defaultSlotName > default > items）',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
      },
    },
    dropdownSlotName: {
      control: false,
      description:
        '下拉菜单内容的插槽名称（优先级 dropdownSlotName > dropdown)',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
      },
    },
    items: {
      description:
        '下拉菜单渲染的数组（优先级 dropdownSlotName > dropdown > items）',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
        type: {
          summary: 'ProDropdownItemProps[]',
        },
      },
    },
    /* attributes -> attributes corresponding existing events */
    click: {
      control: false,
      description: '点击左侧按钮时触发（split-button 为 true 时）',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing events',
        type: {
          summary: '(event?: MouseEvent) => void',
        },
      },
    },
    command: {
      control: false,
      description: '点击下拉菜单选项时触发',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing events',
        type: {
          summary: '(command?: string | number | object) => void',
        },
      },
    },
    visibleChange: {
      control: false,
      description: '下拉菜单显示 / 隐藏时触发',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing events',
        type: {
          summary: '(visible?: boolean) => void',
        },
      },
    },
    /* slots -> slots corresponding existing slots */
    dropdown: {
      control: false,
      description: '下拉菜单插槽（可直接使用 pro-dropdown-item）',
      table: {
        category: 'slots',
        subcategory: 'slots corresponding existing slots',
        type: {
          summary: 'Slot',
        },
      },
    },
    /* exposes -> new expose */
    proDropdownItemRef: {
      description: '下拉菜单选项的实例',
      table: {
        category: 'exposes',
        subcategory: 'new expose',
        type: {
          summary: 'ProDropdownItemInstance[]',
        },
      },
    },
    ref: {
      description: '下拉菜单的实例',
      table: {
        category: 'exposes',
        subcategory: 'new expose',
        type: {
          summary: 'DropdownInstance',
        },
      },
    },
  },
}
export default meta

export const UseCase: StoryObj<typeof ProDropdown> = {
  render: args => ({
    components: {
      ProDropdown,
    },
    setup() {
      return {
        args,
      }
    },
    template: `
      <pro-dropdown
        v-bind="args"
      >
        dropdown
      </pro-dropdown>
    `,
  }),
  args: {
    /* attributes -> new attributes */
    defaultSlotName: '',
    dropdownSlotName: '',
    items: [
      {
        label: 'dropdown-item-1',
        command: 'dropdown-item-2',
      },
      {
        label: 'dropdown-item-2',
        command: 'dropdown-item-2',
      },
      {
        label: 'dropdown-item-3',
        command: 'dropdown-item-3',
      },
    ],
    /* attributes -> attributes corresponding existing events */
    click: event => {
      console.log(event)
    },
    command: command => {
      console.log(command)
    },
    visibleChange: visible => {
      console.log(visible)
    },
  },
}
