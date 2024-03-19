import type { Meta, StoryObj } from '@storybook/vue3'
/* 开发时引入方式（按需引入） */
import ProCard from 'component-library-components/card'
/* 打包后引入方式（按需引入） */
// import { ProCard } from 'component-library'

const meta: Meta = {
  title: 'Base Components/ProCard',
  component: ProCard,
  argTypes: {
    /* attributes -> new attributes */
    defaultSlotName: {
      control: false,
      description: '卡片内容的插槽名称（优先级 defaultSlotName > default）',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
      },
    },
    headerSlotName: {
      control: false,
      description: '卡片标题内容的插槽名称（优先级 headerSlotName > header）',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
      },
    },
    /* attributes -> attributes corresponding existing attributes */
    shadow: {
      description: '卡片阴影显示时机',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing attributes',
        type: {
          summary: `"always" | "hover" | "never"`,
        },
      },
    },
    /* exposes -> new expose */
    ref: {
      description: '卡片的实例',
      table: {
        category: 'exposes',
        subcategory: 'new expose',
        type: {
          summary: 'CardInstance',
        },
      },
    },
  },
}
export default meta

export const UseCase: StoryObj<typeof ProCard> = {
  render: args => ({
    components: {
      ProCard,
    },
    setup() {
      return {
        args,
      }
    },
    template: `
      <pro-card
        style="width: 75rem;"
        v-bind="args"
      >
        <template #header>card-header</template>
        <template #default>card-content</template>
      </pro-card>
    `,
  }),
  args: {
    /* attributes -> new attributes */
    defaultSlotName: '',
    headerSlotName: '',
    /* attributes -> attributes corresponding existing attributes */
    shadow: 'never',
  },
}
