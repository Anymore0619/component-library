import type { Meta, StoryObj } from '@storybook/vue3'
/* 开发时引入方式（按需引入） */
import ProTimeline from 'component-library-components/timeline'
import ProTimelineItem from 'component-library-components/timeline-item'
/* 打包后引入方式（按需引入） */
// import { ProTimeline, ProTimelineItem } from 'component-library'

const meta: Meta = {
  title: 'Base Components/ProTimelineItem',
  component: ProTimelineItem,
  argTypes: {
    /* attributes -> new attributes */
    contentSlotName: {
      control: false,
      description: '时间线项内容的插槽名称（优先级 contentSlotName > content）',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
      },
    },
    dotSlotName: {
      control: false,
      description: '时间线项节点的插槽名称（优先级 dotSlotName > dot',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
      },
    },
    /* slots -> new slot */
    content: {
      control: false,
      description:
        '时间线项内容的插槽（优先级 contentSlotName > content）（default 插槽与 pro-timeline 中的 default 插槽存在重名冲突，使用 content 插槽替代）',
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
      description: '时间线项的实例',
      table: {
        category: 'exposes',
        subcategory: 'new expose',
        type: {
          summary: 'TimelineItemInstance',
        },
      },
    },
  },
}
export default meta

export const UseCase: StoryObj<typeof ProTimelineItem> = {
  render: args => ({
    components: {
      ProTimeline,
      ProTimelineItem,
    },
    setup() {
      return {
        args,
      }
    },
    template: `
      <pro-timeline
        style="width: 25rem;"
      >
        <pro-timeline-item>
          <template #content>timeline-item-1</template>
        </pro-timeline-item>
        <pro-timeline-item>
          <template #content>timeline-item-2</template>
        </pro-timeline-item>
        <pro-timeline-item>
          <template #content>timeline-item-3</template>
        </pro-timeline-item>
      </pro-timeline>
    `,
  }),
  args: {},
}
