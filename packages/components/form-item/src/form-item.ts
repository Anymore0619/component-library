import FormItem from './form-item.vue'
import type { Writable } from 'component-library-utils/types'
import type {
  FormItemInstance,
  FormItemProp,
  FormItemProps,
} from 'element-plus'

/* 表单项类型 */
type ItemType =
  | 'autocomplete'
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
  | 'link'
  | 'radio'
  | 'radioGroup'
  | 'select'
  | 'switch'
  | 'tag'
  | 'text'
  | 'timePicker'
  | 'tree'
  | 'upload'
  | 'virtualizedSelect'
  | 'virtualizedTree'
/* 扩展的属性 */
type FormItemExtendedProps = {
  /* 新增的属性 */
  contentSlotName?: string
  errorSlotName?: string
  itemProps?: Record<string, any>
  itemType?: ItemType
  hidden?: boolean
  labelSlotName?: string
  itemValue?: any
  order?: number
  span?: number
  /* 对应已有属性的属性 */
  label?: string
}
/* 可传递的属性 */
type ProFormItemProps = Writable<Partial<FormItemProps>> & FormItemExtendedProps
/* 实例 */
type ProFormItemInstance = InstanceType<typeof FormItem>

export type {
  /* 其他 */
  FormItemProp,
  /* 属性 */
  FormItemProps,
  FormItemExtendedProps,
  ProFormItemProps,
  /* 实例 */
  FormItemInstance,
  ProFormItemInstance,
}
