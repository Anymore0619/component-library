import type { Meta, StoryObj } from '@storybook/vue3'
/* 开发时引入方式（按需引入） */
import ProTable from 'component-library-components/table'
/* 打包后引入方式（按需引入） */
// import { ProTable } from 'component-library'

const meta: Meta = {
  title: 'Base Components/ProTable',
  component: ProTable,
  argTypes: {
    /* attributes -> new v-model attributes */
    checkedRows: {
      description: '表格当前选中行（传递 row-key 时生效）',
      table: {
        category: 'attributes',
        subcategory: 'new v-model attributes',
        type: {
          summary: 'Record<string, any>[]',
        },
      },
    },
    currentRow: {
      description: '表格当前行（传递 row-key 时生效）',
      table: {
        category: 'attributes',
        subcategory: 'new v-model attributes',
        type: {
          summary: 'Record<string, any>',
        },
      },
    },
    /* attributes -> new attributes */
    appendSlotName: {
      control: false,
      description: '表格底部内容的插槽名称（优先级 appendSlotName > append）',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
      },
    },
    columns: {
      description:
        '表格列渲染的数组（优先级 defaultSlotName > default > columns）',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
        type: {
          summary: 'ProTableColumnProps[]',
        },
      },
    },
    defaultSlotName: {
      control: false,
      description:
        '表格内容的插槽名称（优先级 defaultSlotName > default > columns）',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
      },
    },
    emptySlotName: {
      control: false,
      description: '表格无数据时内容的插槽名称（优先级 emptySlotName > empty）',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
      },
    },
    loading: {
      description: '表格加载中状态',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
      },
    },
    /* attributes -> attributes corresponding existing attributes */
    border: {
      description: '是否有边框',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing attributes',
      },
    },
    data: {
      description: '表格渲染的数组',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing attributes',
        type: {
          summary: 'Record<string, any>[]',
        },
      },
    },
    highlightCurrentRow: {
      description: '是否高亮当前行',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing attributes',
      },
    },
    lazy: {
      description: '是否启用懒加载',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing attributes',
      },
    },
    rowKey: {
      description: '表格行唯一标识',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing attributes',
      },
    },
    stripe: {
      description: '是否有斑马纹',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing attributes',
      },
    },
    /* attributes -> attributes corresponding existing events */
    cellClick: {
      control: false,
      description: '点击表格单元格时触发',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing events',
        type: {
          summary:
            '(row?: Record<string, any>, column?: Column, cell?: any, event?: MouseEvent) => void',
        },
      },
    },
    cellContextmenu: {
      control: false,
      description: '右击表格单元格时触发',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing events',
        type: {
          summary:
            '(row?: Record<string, any>, column?: Column, cell?: any, event?: MouseEvent) => void',
        },
      },
    },
    cellDblclick: {
      control: false,
      description: '双击表格单元格时触发',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing events',
        type: {
          summary:
            '(row?: Record<string, any>, column?: Column, cell?: any, event?: MouseEvent) => void',
        },
      },
    },
    cellMouseEnter: {
      control: false,
      description: '鼠标进入某个表格单元格时触发',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing events',
        type: {
          summary:
            '(row?: Record<string, any>, column?: Column, cell?: any, event?: MouseEvent) => void',
        },
      },
    },
    cellMouseLeave: {
      control: false,
      description: '鼠标离开某个表格单元格时触发',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing events',
        type: {
          summary:
            '(row?: Record<string, any>, column?: Column, cell?: any, event?: MouseEvent) => void',
        },
      },
    },
    currentChange: {
      control: false,
      description: '表格当前行时触发',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing events',
        type: {
          summary:
            '(currentRow?: Record<string, any>, oldCurrentRow?: Record<string, any>) => void',
        },
      },
    },
    expandChange: {
      control: false,
      description: '折叠 / 展开表格行时触发',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing events',
        type: {
          summary:
            '(row?: Record<string, any>, expandedObject?: expandedObject) => void',
        },
      },
    },
    filterChange: {
      control: false,
      description: '表格筛选变化时触发',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing events',
        type: {
          summary: '(filters?: any) => void',
        },
      },
    },
    headerClick: {
      control: false,
      description: '点击表格列标题时触发',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing events',
        type: {
          summary: '(column?: Column,event?: MouseEvent) => void',
        },
      },
    },
    headerContextmenu: {
      control: false,
      description: '右击表格列标题时触发',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing events',
        type: {
          summary: '(column?: Column,event?: MouseEvent) => void',
        },
      },
    },
    headerDragend: {
      control: false,
      description: '拖拽表格列使宽度变化时触发',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing events',
        type: {
          summary:
            '(newWidth?: number, oldWidth?: number, column?: Column, event?: MouseEvent) => void',
        },
      },
    },
    rowClick: {
      control: false,
      description: '点击表格行时触发',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing events',
        type: {
          summary:
            '(row?: Record<string, any>, column?: Column, event?: MouseEvent) => void',
        },
      },
    },
    rowContextmenu: {
      control: false,
      description: '右击表格行时触发',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing events',
        type: {
          summary:
            '(row?: Record<string, any>, column?: Column, event?: MouseEvent) => void',
        },
      },
    },
    rowDblclick: {
      control: false,
      description: '双击表格行时触发',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing events',
        type: {
          summary:
            '(row?: Record<string, any>, column?: Column, event?: MouseEvent) => void',
        },
      },
    },
    select: {
      control: false,
      description: '点击表格行复选框时触发',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing events',
        type: {
          summary:
            '(selection?: Record<string, any>[], row?: Record<string, any>) => void',
        },
      },
    },
    selectAll: {
      control: false,
      description: '点击全选时触发',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing events',
        type: {
          summary: '(selection?: Record<string, any>[]) => void',
        },
      },
    },
    selectChange: {
      control: false,
      description: '表格当前选中行变化时触发',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing events',
        type: {
          summary: '(selection?: Record<string, any>[]) => void',
        },
      },
    },
    sortChange: {
      control: false,
      description: '表格排序变化时触发',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing events',
        type: {
          summary: '(selection?: Record<string, any>[]) => void',
        },
      },
    },
    /* exposes -> new expose */
    getRemoteSortColumns: {
      description: '获取远程排序列',
      table: {
        category: 'exposes',
        subcategory: 'new expose',
        type: {
          summary: '() => RemoteSortColumn[]',
        },
      },
    },
    resetRemoteSortColumns: {
      description: '重置远程排序列',
      table: {
        category: 'exposes',
        subcategory: 'new expose',
        type: {
          summary: '() => void',
        },
      },
    },
    proTableColumnRef: {
      description: '表格列的实例',
      table: {
        category: 'exposes',
        subcategory: 'new expose',
        type: {
          summary: 'ProTableColumnInstance[]',
        },
      },
    },
    ref: {
      description: '表格的实例',
      table: {
        category: 'exposes',
        subcategory: 'new expose',
        type: {
          summary: 'TableInstance',
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
    },
    setup() {
      return {
        args,
      }
    },
    template: `
      <pro-table
        style="width: 75rem;"
        v-bind="args"
        v-model:checked-rows="args.checkedRows"
        v-model:current-row="args.currentRow"
      />
    `,
  }),
  args: {
    /* attributes -> new v-model attributes */
    checkedRows: [],
    currentRow: {},
    /* attributes -> new attributes */
    appendSlotName: '',
    columns: [
      {
        label: 'label-1',
        prop: 'prop1',
        remoteSortable: true,
        remoteSortIndex: 0,
        remoteSortOrder: 'asc',
        showTip: true,
        tipTooltipProps: {
          content: 'label-1',
        },
      },
      {
        label: 'label-2',
        prop: 'prop2',
      },
      {
        label: 'label-3',
        prop: 'prop3',
      },
    ],
    defaultSlotName: '',
    emptySlotName: '',
    loading: false,
    /* attributes -> attributes corresponding existing attributes */
    border: true,
    data: [
      {
        key: 'key-1',
        prop1: 'prop-1-1',
        prop2: 'prop-1-2',
        prop3: 'prop-1-3',
      },
      {
        key: 'key-2',
        prop1: 'prop-2-1',
        prop2: 'prop-2-2',
        prop3: 'prop-2-3',
      },
      {
        key: 'key-3',
        prop1: 'prop-3-1',
        prop2: 'prop-3-2',
        prop3: 'prop-3-3',
      },
      {
        key: 'key-4',
        prop1: 'prop-4-1',
        prop2: 'prop-4-2',
        prop3: 'prop-4-3',
      },
      {
        key: 'key-5',
        prop1: 'prop-5-1',
        prop2: 'prop-5-2',
        prop3: 'prop-5-3',
      },
    ],
    highlightCurrentRow: true,
    rowKey: 'key',
    stripe: true,
    /* attributes -> attributes corresponding existing events */
    cellClick: (row, column, cell, event) => {
      console.log(row)
      console.log(column)
      console.log(cell)
      console.log(event)
    },
    cellContextmenu: (row, column, cell, event) => {
      console.log(row)
      console.log(column)
      console.log(cell)
      console.log(event)
    },
    cellDblclick: (row, column, cell, event) => {
      console.log(row)
      console.log(column)
      console.log(cell)
      console.log(event)
    },
    cellMouseEnter: (row, column, cell, event) => {
      console.log(row)
      console.log(column)
      console.log(cell)
      console.log(event)
    },
    cellMouseLeave: (row, column, cell, event) => {
      console.log(row)
      console.log(column)
      console.log(cell)
      console.log(event)
    },
    currentChange: (currentRow, oldCurrentRow) => {
      console.log(currentRow)
      console.log(oldCurrentRow)
    },
    expandChange: (row, expandedObject) => {
      console.log(row)
      console.log(expandedObject)
    },
    filterChange: filters => {
      console.log(filters)
    },
    headerClick: (column, event) => {
      console.log(column)
      console.log(event)
    },
    headerContextmenu: (column, event) => {
      console.log(column)
      console.log(event)
    },
    headerDragend: (newWidth, oldWidth, column, event) => {
      console.log(newWidth)
      console.log(oldWidth)
      console.log(column)
      console.log(event)
    },
    rowClick: (row, column, event) => {
      console.log(row)
      console.log(column)
      console.log(event)
    },
    rowContextmenu: (row, column, event) => {
      console.log(row)
      console.log(column)
      console.log(event)
    },
    rowDblclick: (row, column, event) => {
      console.log(row)
      console.log(column)
      console.log(event)
    },
    select: (selection, row) => {
      console.log(selection)
      console.log(row)
    },
    selectAll: selection => {
      console.log(selection)
    },
    selectChange: selection => {
      console.log(selection)
    },
    sortChange: sortObject => {
      console.log(sortObject)
    },
  },
}
