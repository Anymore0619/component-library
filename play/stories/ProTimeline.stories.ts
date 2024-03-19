import type { Meta, StoryObj } from '@storybook/vue3'
/* 开发时引入方式（按需引入） */
import ProTimeline from 'component-library-components/timeline'
/* 打包后引入方式（按需引入） */
// import { ProTimeline } from 'component-library'

const meta: Meta = {
  title: 'Base Components/ProTimeline',
  component: ProTimeline,
  argTypes: {
    /* attributes -> new attributes */
    defaultSlotName: {
      control: false,
      description:
        '时间线内容的插槽名称（优先级 defaultSlotName > default > items）',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
      },
    },
    items: {
      description:
        '时间线渲染的数组（优先级 defaultSlotName > default > items）',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
        type: {
          summary: 'ProTimelineProps[]',
        },
      },
    },
    /* exposes -> new expose */
    proTimelineItemRef: {
      description: '时间线项的实例',
      table: {
        category: 'exposes',
        subcategory: 'new expose',
        type: {
          summary: 'ProTimelineItemInstance[]',
        },
      },
    },
    ref: {
      description: '时间线的实例',
      table: {
        category: 'exposes',
        subcategory: 'new expose',
        type: {
          summary: 'ProTimelineInstance',
        },
      },
    },
  },
}
export default meta

export const UseCase: StoryObj<typeof ProTimeline> = {
  render: args => ({
    components: {
      ProTimeline,
    },
    setup() {
      return {
        args,
      }
    },
    template: `
      <pro-timeline
        style="width: 25rem;"
        v-bind="args"
      >
        <template #timeline-item-1>timeline-item-1</template>
        <template #timeline-item-2>timeline-item-2</template>
        <template #timeline-item-3>timeline-item-3</template>
      </pro-timeline>
    `,
  }),
  args: {
    /* attributes -> new attributes */
    defaultSlotName: '',
    items: [
      {
        contentSlotName: 'timeline-item-1',
      },
      {
        contentSlotName: 'timeline-item-2',
      },
      {
        contentSlotName: 'timeline-item-3',
      },
    ],
  },
}
