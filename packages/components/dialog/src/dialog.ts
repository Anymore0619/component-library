import Dialog from './dialog.vue'
import { ElDialog } from 'element-plus'
import type { ProButtonProps } from '../../button'
import type { Writable } from 'component-library-utils/types'
import type { DialogProps } from 'element-plus'

/* 扩展的属性 */
type DialogExtendedProps = {
  /* 新增的 v-model 属性 */
  loading?: boolean
  /* 新增的属性 */
  cancelButtonProps?: ProButtonProps
  confirmButtonProps?: ProButtonProps
  defaultSlotName?: string
  footerSlotName?: string
  headerSlotName?: string
  hideCancelButton?: boolean
  hideConfirmButton?: boolean
  hideFooter?: boolean
  titleSlotName?: string
  /* 对应已有属性的属性 */
  appendToBody?: boolean
  beforeClose?: () => void
  destroyOnClose?: boolean
  draggable?: boolean
  /* 对应已有事件的属性 */
  close?: () => void
  closeAutoFocus?: () => void
  closed?: () => void
  open?: () => void
  openAutoFocus?: () => void
  opened?: () => void
}
/* 可传递的属性 */
type ProDialogProps = Writable<Partial<DialogProps>> & DialogExtendedProps
/* 实例 */
type DialogInstance = InstanceType<typeof ElDialog>
type ProDialogInstance = InstanceType<typeof Dialog>

export type {
  /* 属性 */
  DialogProps,
  DialogExtendedProps,
  ProDialogProps,
  /* 实例 */
  DialogInstance,
  ProDialogInstance,
}
