import type { Meta, StoryObj } from '@storybook/vue3'
/* 开发时引入方式（按需引入） */
import ProDatePicker from 'component-library-components/date-picker'
/* 打包后引入方式（按需引入） */
// import { ProDatePicker } from 'component-library'

const meta: Meta = {
  title: 'Base Components/ProDatePicker',
  component: ProDatePicker,
  argTypes: {
    /* attributes -> new attributes */
    defaultSlotName: {
      control: false,
      description:
        '日期选择器内容的插槽名称（优先级 defaultSlotName > default）',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
      },
    },
    rangeSeparatorSlotName: {
      control: false,
      description:
        '日期选择器分隔符插槽名称（优先级 rangeSeparatorSlotName > range-separator）',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
      },
    },
    /* attributes -> attributes corresponding existing attributes */
    clearable: {
      description: '是否可清空',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing attributes',
      },
    },
    defaultTime: {
      control: false,
      description:
        '范围选择时选中日期的默认值（当 type 为 datetime、datetimerange 时生效）',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing attributes',
        type: {
          summary: 'Date | [Date, Date]',
        },
      },
    },
    endPlaceholder: {
      description: '范围选择时结束日期的输入框占位文本',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing attributes',
      },
    },
    placeholder: {
      description: '非范围选择时的输入框占位文本',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing attributes',
      },
    },
    startPlaceholder: {
      description: '范围选择时开始日期的输入框占位文本',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing attributes',
      },
    },
    type: {
      description: '日期选择器类型',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing attributes',
        type: {
          summary: `
            'year'
            | 'month'
            | 'date'
            | 'dates'
            | 'datetime'
            | 'week'
            | 'datetimerange'
            | 'daterange'
            | 'monthrange'
          `,
        },
      },
    },
    /* attributes -> attributes corresponding existing events */
    blur: {
      control: false,
      description: '失去焦点时触发',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing events',
        type: {
          summary: '(event?: FocusEvent) => void',
        },
      },
    },
    calendarChange: {
      control: false,
      description: '所选日期更改时触发（当 type 为 daterange 时生效）',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing events',
        type: {
          summary: '(value?: [Date, Date | null]) => void',
        },
      },
    },
    change: {
      control: false,
      description: 'modelValue 值改变时触发',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing events',
        type: {
          summary:
            '(value?: string | number | Date | [string, string] | [number, number] | [Date, Date]) => void',
        },
      },
    },
    focus: {
      control: false,
      description: '获取焦点时触发',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing events',
        type: {
          summary: '(event?: FocusEvent) => void',
        },
      },
    },
    panelChange: {
      control: false,
      description: '日期面板改变时触发',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing events',
        type: {
          summary:
            "(date?: Date | [Date, Date], mode?: 'month' | 'year', view?: 'date' | 'month' | 'year',) => void",
        },
      },
    },
    visibleChange: {
      control: false,
      description: '下拉列表显示 / 隐藏时触发',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing events',
        type: {
          summary: '(visible?: boolean) => void',
        },
      },
    },
    /* exposes -> new expose */
    ref: {
      description: '日期选择器的实例',
      table: {
        category: 'exposes',
        subcategory: 'new expose',
        type: {
          summary: 'DatePickerInstance',
        },
      },
    },
  },
}
export default meta

import { ref } from 'vue'

export const UseCase: StoryObj<typeof ProDatePicker> = {
  render: args => ({
    components: {
      ProDatePicker,
    },
    setup() {
      const value = ref(new Date())
      return {
        args,
        value,
      }
    },
    template: `
      <pro-date-picker
        v-bind="args"
        v-model="value"
      />
    `,
  }),
  args: {
    /* attributes -> new attributes */
    defaultSlotName: '',
    rangeSeparatorSlotName: '',
    /* attributes -> attributes corresponding existing attributes */
    clearable: true,
    endPlaceholder: '请选择',
    defaultTime: undefined,
    placeholder: '请选择',
    startPlaceholder: '请选择',
    type: 'date',
    /* attributes -> attributes corresponding existing events */
    blur: event => {
      console.log(event)
    },
    calendarChange: value => {
      console.log(value)
    },
    change: value => {
      console.log(value)
    },
    focus: event => {
      console.log(event)
    },
    panelChange: (date, mode, view) => {
      console.log(date)
      console.log(mode)
      console.log(view)
    },
    visibleChange: visible => {
      console.log(visible)
    },
  },
}
