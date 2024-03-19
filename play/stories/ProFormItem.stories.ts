import type { Meta, StoryObj } from '@storybook/vue3'
/* 开发时引入方式（按需引入） */
import ProAutocomplete from 'component-library-components/autocomplete'
import ProButton from 'component-library-components/button'
import ProCascader from 'component-library-components/cascader'
import ProCheckbox from 'component-library-components/checkbox'
import ProCheckboxGroup from 'component-library-components/checkbox-group'
import ProDatePicker from 'component-library-components/date-picker'
import ProForm from 'component-library-components/form'
import ProFormItem from 'component-library-components/form-item'
import ProIcon from 'component-library-components/icon'
import ProImage from 'component-library-components/image'
import ProImageGroup from 'component-library-components/image-group'
import ProInput from 'component-library-components/input'
import ProInputNumber from 'component-library-components/input-number'
import ProRadio from 'component-library-components/radio'
import ProRadioGroup from 'component-library-components/radio-group'
import ProSelect from 'component-library-components/select'
import ProSwitch from 'component-library-components/switch'
import ProTag from 'component-library-components/tag'
import ProText from 'component-library-components/text'
import ProTimePicker from 'component-library-components/time-picker'
import ProTree from 'component-library-components/tree'
import ProUpload from 'component-library-components/upload'
import ProVirtualizedSelect from 'component-library-components/virtualized-select'
import ProVirtualizedTree from 'component-library-components/virtualized-tree'
/* 打包后引入方式（按需引入） */
// import {
//   ProAutocomplete,
//   ProButton,
//   ProCascader,
//   ProCheckbox,
//   ProCheckboxGroup,
//   ProDatePicker,
//   ProForm,
//   ProFormItem,
//   ProIcon,
//   ProImage,
//   ProImageGroup,
//   ProInput,
//   ProInputNumber,
//   ProRadio,
//   ProRadioGroup,
//   ProSelect,
//   ProSwitch,
//   ProTag,
//   ProText,
//   ProTimePicker,
//   ProTree,
//   ProUpload,
//   ProVirtualizedSelect,
//   ProVirtualizedTree,
// } from 'component-library'

const meta: Meta = {
  title: 'Base Components/ProFormItem',
  component: ProFormItem,
  argTypes: {
    /* attributes -> new attributes */
    contentSlotName: {
      control: false,
      description: '表单项内容的插槽名称（优先级 contentSlotName > content）',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
      },
    },
    errorSlotName: {
      control: false,
      description: '验证错误信息内容的插槽名称（优先级 errorSlotName > error',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
      },
    },
    hidden: {
      control: false,
      description: '隐藏表单项',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
      },
    },
    itemProps: {
      control: false,
      description: '对应表单项组件类型的属性（传递 items 时生效）',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
      },
    },
    itemType: {
      control: false,
      description: '表单项组件类型（传递 items 时生效）',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
        type: {
          summary: `
            'autocomplete'
            | 'button'
            | 'cascader'
            | 'checkbox'
            | 'checkboxGroup'
            | 'datePicker'
            | 'icon'
            | 'image'
            | 'imageGroup'
            | 'input'
            | 'inputNumber'
            | 'radio'
            | 'radioGroup'
            | 'select'
            | 'switch'
            | 'tag'
            | 'text'
            | 'timPicker'
            | 'tree'
            | 'upload'
            | 'virtualizedSelect'
            | 'virtualizedTree'
          `,
        },
      },
    },
    itemValue: {
      control: false,
      description: '表单项组件对应的值',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
      },
    },
    labelSlotName: {
      control: false,
      description: '表单项标题的插槽名称',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
      },
    },
    order: {
      control: false,
      description: '表单项的顺序',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
      },
    },
    span: {
      control: false,
      description: '表单项的列数（传递 items 时生效）',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
      },
    },
    /* attributes -> attributes corresponding existing attributes */
    label: {
      control: false,
      description: '表单项标题',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing attributes',
      },
    },
    /* exposes -> new expose */
    itemComponentRef: {
      description: '表单项组件的实例',
      table: {
        category: 'exposes',
        subcategory: 'new expose',
        type: {
          summary: `
            ProAutocompleteInstance
            | ProButtonInstance
            | ProCascaderInstance
            | ProCheckboxInstance
            | ProCheckboxGroupInstance
            | ProDatePickerInstance
            | ProIconInstance
            | ProImageInstance
            | ProImageGroupInstance
            | ProInputInstance
            | ProInputNumberInstance
            | ProRadioInstance
            | ProRadioGroupInstance
            | ProSelectInstance
            | ProSwitchInstance
            | ProTagInstance
            | ProTextInstance
            | ProTimePickerInstance
            | ProTreeInstance
            | ProUploadInstance
            | ProVirtualizedSelectInstance
            | ProVirtualizedTreeInstance
          `,
        },
      },
    },
    ref: {
      description: '表单项的实例',
      table: {
        category: 'exposes',
        subcategory: 'new expose',
        type: {
          summary: 'FormItemInstance',
        },
      },
    },
  },
}
export default meta

import { reactive } from 'vue'

export const UseCase: StoryObj<typeof ProForm> = {
  render: args => ({
    components: {
      ProAutocomplete,
      ProButton,
      ProCascader,
      ProCheckbox,
      ProCheckboxGroup,
      ProDatePicker,
      ProForm,
      ProFormItem,
      ProIcon,
      ProImage,
      ProImageGroup,
      ProInput,
      ProInputNumber,
      ProRadio,
      ProRadioGroup,
      ProSelect,
      ProSwitch,
      ProTag,
      ProText,
      ProTimePicker,
      ProTree,
      ProUpload,
      ProVirtualizedSelect,
      ProVirtualizedTree,
    },
    setup() {
      const inline = true
      const model = reactive({
        prop1: 'prop1',
      })
      return {
        args,
        inline,
        model,
      }
    },
    template: `
      <pro-form
        style="width: 75rem;"
        :inline="inline"
        :model="model"
      >
        <pro-form-item
          label="label 1"
          prop="prop1"
        >
          <pro-input
            v-model="model.prop1"
          >
          </pro-input>
        </pro-form-item>
      </pro-form>
    `,
  }),
  args: {},
}
