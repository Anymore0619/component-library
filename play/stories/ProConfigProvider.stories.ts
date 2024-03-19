import type { Meta, StoryObj } from '@storybook/vue3'
/* 开发时引入方式（按需引入） */
import ProConfigProvider from 'component-library-components/config-provider'
import ProSearchTable from 'component-library-components/search-table'
/* 打包后引入方式（按需引入） */
// import { ProConfigProvider, ProSearchTable } from 'component-library'

const meta: Meta = {
  title: 'Config Components/ProConfigProvider',
  component: ProConfigProvider,
  argTypes: {
    /* attributes -> new attributes */
    proFormDialogInjects: {
      control: true,
      description: 'proFormDialog 可注入的属性',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
        type: {
          summary: 'ProFormDialogInjects',
        },
      },
    },
    proSearchTableDialogInjects: {
      control: true,
      description: 'proSearchTableDialog 可注入的属性',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
        type: {
          summary: 'ProSearchTableDialogInjects',
        },
      },
    },
    proSearchTableInjects: {
      control: true,
      description: 'proSearchTable 可注入的属性',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
        type: {
          summary: 'ProSearchTableInjects',
        },
      },
    },
    proTreeInjects: {
      control: true,
      description: 'proTree 可注入的属性',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
        type: {
          summary: 'ProTreeInjects',
        },
      },
    },
    proVirtualizedTreeInjects: {
      control: true,
      description: 'proVirtualizedTree 可注入的属性',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
        type: {
          summary: 'ProVirtualizedTreeInjects',
        },
      },
    },
  },
}
export default meta

import { ref, onMounted } from 'vue'

export const UseCase: StoryObj<typeof ProConfigProvider> = {
  render: args => ({
    components: {
      ProConfigProvider,
      ProSearchTable,
    },
    setup() {
      const searchTableRef = ref()
      const searchTable = {
        requestApi: () => {
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              if (Math.random() > 0.5) {
                resolve({
                  dataNeedMapping: [
                    {
                      key: 'key1',
                      prop1: 'prop1-1',
                      prop2: 'prop1-2',
                      prop3: 'prop1-3',
                    },
                    {
                      key: 'key2',
                      prop1: 'prop2-1',
                      prop2: 'prop2-2',
                      prop3: 'prop2-3',
                    },
                  ],
                  totalNeedMapping: 100,
                })
              } else {
                reject({
                  msg: 'error',
                })
              }
            }, 1000)
          })
        },
        tableProps: {
          columns: [
            {
              formItemProps: {
                itemType: 'input',
                span: 6,
              },
              label: 'label 1',
              prop: 'prop1',
              remoteSortable: true,
              remoteSortOrder: '',
            },
          ],
        },
      }
      onMounted(() => {
        searchTableRef.value.query()
      })
      return {
        args,
        searchTableRef,
        searchTable,
      }
    },
    template: `
      <pro-config-provider v-bind="args">
        <pro-search-table
          ref="searchTableRef"
          style="width: 75rem;" 
          v-bind="searchTable"
        />
      </pro-config-provider> 
    `,
  }),
  args: {
    /* attributes -> new attributes */
    proFormDialogInjects: {},
    proSearchTableDialogInjects: {},
    proSearchTableInjects: {
      responseMapping: response => {
        return {
          data: response.dataNeedMapping,
          total: response.totalNeedMapping,
        }
      },
      tableProps: {
        rowKey: 'key',
      },
    },
    proTreeInjects: {},
    proVirtualizedTreeInjects: {},
  },
}
