import type { Meta, StoryObj } from '@storybook/vue3'
/* 开发时引入方式（按需引入） */
import ProForm from 'component-library-components/form'
/* 打包后引入方式（按需引入） */
// import { ProForm } from 'component-library'

const meta: Meta = {
  title: 'Base Components/ProForm',
  component: ProForm,
  argTypes: {
    /* attributes -> new attributes */
    actionButtonsSpan: {
      control: {
        type: 'range',
        min: 6,
        max: 24,
      },
      description: '操作按钮列数',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
      },
    },
    afterReset: {
      description: '重置之后的回调方法',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
        type: {
          summary: '() => void',
        },
      },
    },
    clearButtonProps: {
      description: '清空按钮的属性',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
        type: {
          summary: 'ProButtonProps',
        },
      },
    },
    collapseButtonProps: {
      description: '折叠按钮的属性（非行内模式时生效）',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
        type: {
          summary: 'ProButtonProps',
        },
      },
    },
    defaultSlotName: {
      control: false,
      description:
        '表单内容的插槽名称（优先级 defaultSlotName > default > items）',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
      },
    },
    gutter: {
      description: '表单项间隔（传递 items 且非行内模式时生效）',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
      },
    },
    hideActionButtons: {
      description: '隐藏行为按钮',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
      },
    },
    hideClearButton: {
      description: '隐藏清空按钮',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
      },
    },
    hideCollapseButton: {
      description: '隐藏折叠按钮',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
      },
    },
    hideResetButton: {
      description: '隐藏重置按钮',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
      },
    },
    hideSubmitButton: {
      description: '隐藏提交按钮',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
      },
    },
    items: {
      description:
        '表单项渲染的数组（优先级 defaultSlotName > default > items）',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
        type: {
          summary: 'ProFormItemProps[]',
        },
      },
    },
    resetButtonProps: {
      description: '重置按钮的属性',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
        type: {
          summary: 'ProButtonProps',
        },
      },
    },
    submitButtonProps: {
      description: '提交按钮的属性',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
        type: {
          summary: 'ProButtonProps',
        },
      },
    },
    /* attributes -> attributes corresponding existing attributes */
    disabled: {
      description: '是否禁用',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing attributes',
      },
    },
    inline: {
      description: '是否行内模式',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing attributes',
      },
    },
    model: {
      description: '表单数据的对象',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing attributes',
        type: {
          summary: 'Record<string, any>',
        },
      },
    },
    /* attributes -> attributes corresponding existing events */
    validate: {
      control: false,
      description: '表单项校验时触发',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing events',
        type: {
          summary:
            '(prop?: FormItemProp, isValid?: boolean, message?: string) => void',
        },
      },
    },
    /* slots -> new slot */
    'after-action-buttons': {
      control: false,
      description: '操作按钮尾部内容的插槽',
      table: {
        category: 'slots',
        subcategory: 'new slots',
        type: {
          summary: 'Slot',
        },
      },
    },
    /* exposes -> new expose */
    clearFields: {
      description: '清空表单',
      table: {
        category: 'exposes',
        subcategory: 'new expose',
        type: {
          summary: '(prop?: FormItemProp) => void',
        },
      },
    },
    initializeForm: {
      description: '初始化表单',
      table: {
        category: 'exposes',
        subcategory: 'new expose',
        type: {
          summary: '(prop?: FormItemProp) => void',
        },
      },
    },
    proFormItemRef: {
      description: '表单项的实例',
      table: {
        category: 'exposes',
        subcategory: 'new expose',
        type: {
          summary: 'ProFormItemInstance[]',
        },
      },
    },
    ref: {
      description: '表单的实例',
      table: {
        category: 'exposes',
        subcategory: 'new expose',
        type: {
          summary: 'FormInstance',
        },
      },
    },
  },
}
export default meta

export const UseCase: StoryObj<typeof ProForm> = {
  render: args => ({
    components: {
      ProForm,
    },
    setup() {
      return {
        args,
      }
    },
    template: `
      <pro-form
        style="width: 75rem;"
        v-bind="args"
      />
    `,
  }),
  args: {
    /* attributes -> new attributes */
    actionButtonsSpan: 6,
    afterReset: () => {
      console.log('afterReset')
    },
    clearButtonProps: {},
    collapseButtonProps: {},
    defaultSlotName: '',
    items: [
      {
        itemType: 'autocomplete',
        label: 'label-1',
        prop: 'prop1',
        span: 6,
      },
      {
        itemProps: {
          label: 'button',
        },
        itemType: 'button',
        label: 'label-2',
        prop: 'prop2',
        span: 6,
      },
      {
        itemProps: {
          options: [
            {
              label: 'cascader-1',
              value: 'cascader-1',
              children: [
                {
                  label: 'cascader-1-1',
                  value: 'cascader-1-1',
                },
              ],
            },
            {
              label: 'cascader-2',
              value: 'cascader-2',
            },
            {
              label: 'cascader-3',
              value: 'cascader-3',
            },
          ],
        },
        itemType: 'cascader',
        label: 'label-3',
        prop: 'prop3',
        span: 6,
      },
      {
        itemProps: {
          label: 'checkbox',
        },
        itemType: 'checkbox',
        label: 'label-4',
        prop: 'prop4',
        span: 6,
      },
      {
        itemProps: {
          checkboxes: [
            {
              label: 'checkbox-1',
              value: 'checkbox-1',
            },
            {
              label: 'checkbox-2',
              value: 'checkbox-2',
            },
          ],
        },
        itemType: 'checkboxGroup',
        label: 'label-5',
        prop: 'prop5',
        span: 6,
      },
      {
        itemProps: {
          valueFormat: 'YYYY-MM-DD',
        },
        itemType: 'datePicker',
        label: 'label-6',
        prop: 'prop6',
        span: 6,
      },
      {
        itemProps: {
          name: 'Plus',
        },
        itemType: 'icon',
        label: 'label-7',
        prop: 'prop7',
        span: 6,
      },
      {
        itemProps: {
          src: '../static/image.webp',
        },
        itemType: 'image',
        label: 'label-8',
        prop: 'prop8',
        span: 6,
      },
      {
        itemProps: {
          images: [
            {
              src: '../static/image.webp',
            },
            {
              src: '../static/image.webp',
            },
            {
              src: '../static/image.webp',
            },
          ],
        },
        itemType: 'imageGroup',
        label: 'label-9',
        prop: 'prop9',
        span: 6,
      },
      {
        itemType: 'input',
        label: 'label-10',
        prop: 'prop10',
        span: 6,
      },
      {
        itemType: 'inputNumber',
        label: 'label-11',
        prop: 'prop11',
        span: 6,
      },
      {
        itemProps: {
          label: 'link',
        },
        itemType: 'link',
        label: 'label-12',
        prop: 'prop12',
        span: 6,
      },
      {
        itemProps: {
          label: 'radio',
          value: 'radio',
        },
        itemType: 'radio',
        label: 'label-13',
        prop: 'prop13',
        span: 6,
      },
      {
        itemProps: {
          radios: [
            {
              label: 'radio-1',
              value: 'radio-1',
            },
            {
              label: 'radio-2',
              value: 'radio-2',
            },
          ],
        },
        itemType: 'radioGroup',
        label: 'label-14',
        prop: 'prop14',
        span: 6,
      },
      {
        itemProps: {
          options: [
            {
              label: 'option-1',
              value: 'option-1',
            },
            {
              label: 'option-2',
              value: 'option-2',
            },
          ],
        },
        itemType: 'select',
        label: 'label-15',
        prop: 'prop15',
        span: 6,
      },
      {
        itemType: 'switch',
        label: 'label-16',
        prop: 'prop16',
        span: 6,
      },
      {
        itemProps: {
          label: 'tag',
        },
        itemType: 'tag',
        label: 'label-17',
        prop: 'prop17',
        span: 6,
      },
      {
        itemType: 'text',
        label: 'label-18',
        prop: 'prop18',
        span: 6,
      },
      {
        itemProps: {
          valueFormat: 'HH:mm:ss',
        },
        itemType: 'timePicker',
        label: 'label-19',
        prop: 'prop19',
        span: 6,
      },
      {
        itemProps: {
          data: [
            {
              label: 'node-1',
              value: 'node-1',
              children: [
                {
                  label: 'node-1-1',
                  value: 'node-1-1',
                },
              ],
            },
            {
              label: 'node-2',
              value: 'node-2',
            },
            {
              label: 'node-3',
              value: 'node-3',
            },
          ],
          hideLoadMoreButton: true,
          hideSearchInput: true,
          nodeKey: 'value',
          showCheckbox: true,
        },
        itemType: 'tree',
        label: 'label-20',
        prop: 'prop20',
        span: 6,
      },
      {
        itemProps: {
          limit: 1,
          fileList: [],
          label: 'text',
        },
        itemType: 'upload',
        label: 'label-21',
        prop: 'prop21',
        span: 6,
      },
      {
        itemProps: {
          data: [
            {
              label: 'node-1',
              value: 'node-1',
              children: [
                {
                  label: 'node-1-1',
                  value: 'node-1-1',
                },
              ],
            },
            {
              label: 'node-2',
              value: 'node-2',
            },
            {
              label: 'node-3',
              value: 'node-3',
            },
          ],
          hideLoadMoreButton: true,
          hideSearchInput: true,
          props: {
            value: 'value',
          },
          showCheckbox: true,
        },
        itemType: 'virtualizedTree',
        label: 'label-22',
        prop: 'prop22',
        span: 6,
      },
      {
        itemProps: {
          options: [
            {
              label: 'option-1',
              value: 'option-1',
            },
            {
              label: 'option-2',
              value: 'option-2',
            },
          ],
        },
        itemType: 'virtualizedSelect',
        label: 'label-23',
        prop: 'prop23',
        span: 6,
      },
    ],
    gutter: 32,
    hideActionButtons: false,
    hideClearButton: false,
    hideCollapseButton: false,
    hideResetButton: false,
    hideSubmitButton: false,
    resetButtonProps: {},
    submitButtonProps: {},
    /* attributes -> attributes corresponding existing attributes */
    disabled: false,
    inline: false,
    model: {
      prop1: 'autocomplete',
      prop2: null,
      prop3: ['cascader-1', 'cascader-1-1'],
      prop4: true,
      prop5: ['checkbox-1'],
      prop6: '2023-07-28',
      prop7: null,
      prop8: null,
      prop9: null,
      prop10: 'input',
      prop11: 100,
      prop12: null,
      prop13: 'radio',
      prop14: 'radio-1',
      prop15: 'option-1',
      prop16: true,
      prop17: null,
      prop18: 'text',
      prop19: '12:00:00',
      prop20: [
        {
          label: 'node-1-1',
          value: 'node-1-1',
        },
      ],
      prop21: [
        {
          url: '../static/image.webp',
        },
      ],
      prop22: [
        {
          label: 'node-1-1',
          value: 'node-1-1',
        },
      ],
      prop23: 'option-1',
    },
  },
}
