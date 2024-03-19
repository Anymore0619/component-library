import Upload from './upload.vue'
import type { Writable } from 'component-library-utils/types'
import type {
  UploadInstance,
  UploadFile,
  UploadFiles,
  UploadProps,
  UploadRawFile,
  UploadUserFile,
} from 'element-plus'

/* 扩展的属性 */
type UploadExtendedProps = {
  /* 新增的属性 */
  defaultSlotName?: string
  fileSlotName?: string
  maxVolume?: number
  tipSlotName?: string
  triggerSlotName?: string
  /* 对应已有 v-model 属性的属性 */
  fileList?: UploadUserFile[]
  /* 对应已有属性的属性 */
  accept?: string
  beforeUpload?: (rawFile: UploadRawFile) => void
  disabled?: boolean
  limit?: number
  listType?: 'text' | 'picture' | 'picture-card'
  onPreview?: (uploadFile: UploadFile) => void
  onRemove?: (uploadFile: UploadFile, uploadFiles: UploadFiles) => void
  onSuccess?: (
    response: any,
    uploadFile: UploadFile,
    uploadFiles: UploadFiles
  ) => void
}
/* 可传递的属性 */
type ProUploadProps = Writable<Partial<UploadProps>> & UploadExtendedProps
/* 实例 */
type ProUploadInstance = InstanceType<typeof Upload>

export type {
  /* 其他 */
  UploadFile,
  UploadFiles,
  UploadRawFile,
  UploadUserFile,
  /* 属性 */
  UploadProps,
  UploadExtendedProps,
  ProUploadProps,
  /* 实例 */
  UploadInstance,
  ProUploadInstance,
}
