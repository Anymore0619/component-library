import Form from './form.vue'
import type { ProButtonProps } from '../../button'
import type { FormItemProp, ProFormItemProps } from '../../form-item'
import type { Writable } from 'component-library-utils/types'
import type { FormInstance, FormProps } from 'element-plus'

/* 扩展的属性 */
type FormExtendedProps = {
  /* 新增的属性 */
  actionButtonsSpan?: number
  afterReset?: () => void
  clearButtonProps?: ProButtonProps
  collapseButtonProps?: ProButtonProps
  defaultSlotName?: string
  gutter?: number
  hideActionButtons?: boolean
  hideClearButton?: boolean
  hideCollapseButton?: boolean
  hideResetButton?: boolean
  hideSubmitButton?: boolean
  items?: ProFormItemProps[]
  resetButtonProps?: ProButtonProps
  submitButtonProps?: ProButtonProps
  /* 对应已有属性的属性 */
  disabled?: boolean
  inline?: boolean
  model?: Record<string, any>
  /* 对应已有事件的属性 */
  validate?: (prop?: FormItemProp, isValid?: boolean, message?: string) => void
}
/* 可传递的属性 */
type ProFormProps = Writable<Partial<FormProps>> & FormExtendedProps
/* 实例 */
type ProFormInstance = InstanceType<typeof Form>

export type {
  /* 属性 */
  FormProps,
  FormExtendedProps,
  ProFormProps,
  /* 实例 */
  FormInstance,
  ProFormInstance,
}
