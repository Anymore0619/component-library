import FormDialog from './form-dialog.vue'
import type { ProDialogProps } from '../../dialog'
import type { ProFormProps } from '../../form'

/* 组件内弹窗的属性 */
type FormDialogDialogProps = ProDialogProps
/* 组件内表单的属性 */
type FormDialogFormProps = ProFormProps
/* 扩展的属性 */
type FormDialogExtendedProps = {
  /* 新增的 v-model 属性 */
  loading?: boolean
  show?: boolean
  /* 新增的属性 */
  afterRequest?: () => void
  beforeRequest?: (params?: any) => void
  businessType?: string
  customRequestParams?: (params?: any) => any
  dialogProps?: FormDialogDialogProps
  formProps?: FormDialogFormProps
  hideRequestSuccessMessage?: boolean
  onRequestComplete?: (response?: any, params?: any) => void
  onRequestError?: (error?: any) => void
  onRequestSuccess?: (response?: any, params?: any) => void
  requestApi?: (params?: any) => Promise<any>
  responseMapping?: (
    response?: any,
    params?: any
  ) => {
    message?: string
  }
}
/* 可传递的属性 */
type ProFormDialogProps = FormDialogExtendedProps
/* 可注入的属性 */
type ProFormDialogInjects = {
  responseMapping?: (
    response?: any,
    params?: any
  ) => {
    message?: string
  }
}
/* 实例 */
type ProFormDialogInstance = InstanceType<typeof FormDialog>

export type {
  /* 属性 */
  FormDialogDialogProps,
  FormDialogFormProps,
  FormDialogExtendedProps,
  ProFormDialogProps,
  ProFormDialogInjects,
  /* 实例 */
  ProFormDialogInstance,
}
