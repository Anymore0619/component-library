import type { Meta, StoryObj } from '@storybook/vue3'
/* 开发时引入方式（按需引入） */
import ProCalendar from 'component-library-components/calendar'
/* 打包后引入方式（按需引入） */
// import { ProCalendar } from 'component-library'

const meta: Meta = {
  title: 'Base Components/ProCalendar',
  component: ProCalendar,
  argTypes: {
    /* attributes -> new attributes */
    change: {
      control: false,
      description: '选中日期改变时触发',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
        type: {
          summary: '(value?: Date) => void',
        },
      },
    },
    dateCellSlotName: {
      control: false,
      description:
        '日期单元格内容的插槽名称（优先级 dateCellSlotName > date-cell）',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
      },
    },
    headerSlotName: {
      control: false,
      description: '标题内容的插槽名称（优先级 headerSlotName > header）',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
      },
    },
    /* attributes -> attributes corresponding existing v-model attributes */
    modelValue: {
      control: false,
      description: '选中日期的绑定值',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing v-model attributes',
      },
    },
    /* exposes -> new expose */
    ref: {
      description: '日历的实例',
      table: {
        category: 'exposes',
        subcategory: 'new expose',
        type: {
          summary: 'CalendarInstance',
        },
      },
    },
  },
}
export default meta

export const UseCase: StoryObj<typeof ProCalendar> = {
  render: args => ({
    components: {
      ProCalendar,
    },
    setup() {
      return {
        args,
      }
    },
    template: `
      <pro-calendar
        style="width: 75rem;"
        v-bind="args"
      />
    `,
  }),
  args: {
    /* attributes -> new attributes */
    change: value => {
      console.log(value)
    },
    dateCellSlotName: '',
    headerSlotName: '',
    /* attributes -> attributes corresponding existing v-model attributes */
    modelValue: new Date(),
  },
}
