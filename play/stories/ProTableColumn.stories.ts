import type { Meta, StoryObj } from '@storybook/vue3'
/* 开发时引入方式（按需引入） */
import ProTable from 'component-library-components/table'
import ProTableColumn from 'component-library-components/table-column'
/* 打包后引入方式（按需引入） */
// import { ProTable, ProTableColumn } from 'component-library'

const meta: Meta = {
  title: 'Base Components/ProTableColumn',
  component: ProTableColumn,
  argTypes: {
    /* attributes -> new attributes */
    actions: {
      control: false,
      description: '操作列渲染的数组（当 type 为 action 时生效）',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
        type: {
          summary: 'Action[]',
        },
      },
    },
    childColumns: {
      control: false,
      description: '表格列子列渲染的数组',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
        type: {
          summary: 'ProTableColumnProps[]',
        },
      },
    },
    contentSlotName: {
      control: false,
      description:
        '表格列内容的插槽名称（优先级 contentSlotName > content > formatter > dict > prop）',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
      },
    },
    dict: {
      control: false,
      description:
        '表格列内容字典（优先级 contentSlotName > content > formatter > dict > prop）',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
      },
    },
    dictMapping: {
      control: false,
      description: '表格列内容字典的映射',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
        type: {
          summary: '{ label?: string, value?: string }',
        },
      },
    },
    displayable: {
      control: false,
      description: '是否可展示表格列',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
      },
    },
    displayed: {
      control: false,
      description: '是否展示表格列',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
      },
    },
    headerSlotName: {
      control: false,
      description:
        '表格列标题的插槽名称（优先级 headerSlot > header > renderHeader > label）',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
      },
    },
    hidden: {
      control: false,
      description: '隐藏表格列',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
      },
    },
    noValueText: {
      control: false,
      description: '没有值时显示的文本',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
      },
    },
    remoteSortable: {
      control: false,
      description: '是否可远程排序表格列',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
      },
    },
    remoteSortIndex: {
      control: false,
      description:
        '远程排序索引（用于排序规则本身的排序，数字越大则排序越靠后）',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
      },
    },
    remoteSortOrder: {
      control: false,
      description: '远程排序规则',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
        type: {
          summary: `"asc" | "desc" | ""`,
        },
      },
    },
    showTip: {
      control: false,
      description: '显示提示',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
      },
    },
    tagType: {
      control: false,
      description: '标签类型（当 type 为 tag 时生效）',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
        type: {
          summary:
            '(row?: Record<string, any>, column?: Column, cellValue?: any, index?: number) => TagType',
        },
      },
    },
    tipIconProps: {
      control: false,
      description: '提示图标的属性',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
        type: {
          summary: 'ProIconProps',
        },
      },
    },
    tipTooltipProps: {
      control: false,
      description: '提示文字提示的属性',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
        type: {
          summary: 'ProTooltipProps',
        },
      },
    },
    /* attributes -> attributes corresponding existing attributes */
    formatter: {
      control: false,
      description:
        '表格列内容的格式化方法（优先级 contentSlotName > content > formatter > dict > prop）',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing attributes',
        type: {
          summary:
            '(row?: Record<string, any>, column?: Column, cellValue?: any, index?: number) => VNode | string',
        },
      },
    },
    label: {
      control: false,
      description: '表格列标题',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing attributes',
      },
    },
    prop: {
      control: false,
      description:
        '表格列内容渲染的字段名（优先级 contentSlotName > content > formatter > dict > prop）',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing attributes',
      },
    },
    renderHeader: {
      control: false,
      description:
        '表格列标题渲染的方法（优先级 headerSlot > header > renderHeader > label）',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing attributes',
        type: {
          summary: '(columnObject?: ColumnObject) => VNode',
        },
      },
    },
    sortable: {
      control: false,
      description: '是否可排序表格列',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing attributes',
        type: {
          summary: 'boolean | string',
        },
      },
    },
    type: {
      control: false,
      description: '表格列类型',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing attributes',
        type: {
          summary: `"expand" | "group" | "index" | "selection" | "tag" | ""`,
        },
      },
    },
    /* exposes -> new expose */
    ref: {
      description: '表格列的实例',
      table: {
        category: 'exposes',
        subcategory: 'new expose',
        type: {
          summary: 'TableColumnInstance',
        },
      },
    },
  },
}
export default meta

export const UseCase: StoryObj<typeof ProTable> = {
  render: args => ({
    components: {
      ProTable,
      ProTableColumn,
    },
    setup() {
      const data = [
        {
          prop111: 'prop-1-1-1-1',
          prop112: 'prop-1-1-1-2',
          prop12: 'prop-1-1-2',
          prop2: 'prop-1-2',
          prop3: 'prop-1-3',
        },
        {
          prop111: 'prop-2-1-1-1',
          prop112: 'prop-2-1-1-2',
          prop12: 'prop-2-1-2',
          prop2: 'prop-2-2',
          prop3: 'prop-2-3',
        },
        {
          prop111: 'prop-3-1-1-1',
          prop112: 'prop-3-1-1-2',
          prop12: 'prop-3-1-2',
          prop2: 'prop-3-2',
          prop3: 'prop-3-3',
        },
        {
          prop111: 'prop-4-1-1-1',
          prop112: 'prop-4-1-1-2',
          prop12: 'prop-4-1-2',
          prop2: 'prop-4-2',
          prop3: 'prop-4-3',
        },
        {
          prop111: 'prop-5-1-1-1',
          prop112: 'prop-5-1-1-2',
          prop12: 'prop-5-1-2',
          prop2: 'prop-5-2',
          prop3: 'prop-5-3',
        },
      ]
      return {
        args,
        data,
      }
    },
    template: `
      <pro-table
        style="width: 75rem;"
        :data="data"
      >
        <pro-table-column
          label="label-1"
          prop="prop1"
          type="group"
        >
          <pro-table-column
            label="label-1-1"
            prop="prop11"
            type="group"
          >
            <pro-table-column
              label="label-1-1-1"
              prop="prop111"
            />
            <pro-table-column
              label="label-1-1-2"
              prop="prop112"
            />
          </pro-table-column>
          <pro-table-column
            label="label-1-2"
            prop="prop12"
          />
        </pro-table-column>
        <pro-table-column
          label="label-2"
          prop="prop2"
        />
        <pro-table-column
          label="label-3"
          prop="prop3"
        />
      </pro-table>
    `,
  }),
  args: {},
}
