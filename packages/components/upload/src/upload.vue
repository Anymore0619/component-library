<template>
  <el-upload
    ref="$uploadRef"
    :class="[
      'pro-upload',
      $hideUploadButton ? 'pro-upload__hide-upload-button' : '',
      $defaultListType === 'text' && !hasSlot($props, $slots, 'default')
        ? 'pro-upload__hide-default'
        : '',
    ]"
    v-bind="$attrs"
    v-on="$props"
    v-model:file-list="$internalFileList"
    :accept="$defaultAccept"
    :before-upload="$defaultBeforeUpload"
    :list-type="$defaultListType"
    :on-preview="$defaultOnPreview"
    :on-remove="$defaultOnRemove"
    :on-success="$defaultOnSuccess"
  >
    <template
      v-for="$uploadFilteredSlotName in $uploadFilteredSlotNames"
      :key="$uploadFilteredSlotName"
      #[$uploadFilteredSlotName]="scope"
    >
      <slot
        v-bind="scope"
        :key="$uploadFilteredSlotName"
        :name="getSlotName($props, $slots, $uploadFilteredSlotName)"
      />
    </template>
    <template #default="scope">
      <slot
        v-if="hasSlot($props, $slots, 'default')"
        v-bind="scope"
        :name="getSlotName($props, $slots, 'default')"
      />
      <template v-else>
        <template v-if="$defaultListType === 'picture-card'">
          <pro-icon name="Plus" />
        </template>
      </template>
    </template>
    <template #file="scope">
      <slot
        v-if="hasSlot($props, $slots, 'file')"
        v-bind="scope"
        :name="getSlotName($props, $slots, 'file')"
      />
      <template v-else>
        <template v-if="$defaultListType === 'picture-card'">
          <img class="el-upload-list__item-thumbnail" :src="scope.file.url" />
          <span class="el-upload-list__item-actions">
            <span
              class="el-upload-list__item-preview"
              @click="$onPreviewClick(scope.file)"
            >
              <pro-icon name="ZoomIn" />
            </span>
            <span
              v-if="!$defaultDisabled"
              class="el-upload-list__item-delete"
              @click="$onRemoveClick(scope.file)"
            >
              <pro-icon name="Delete" />
            </span>
          </span>
        </template>
      </template>
    </template>
  </el-upload>
  <pro-image ref="$proImageRef" v-bind="$proImage" />
</template>

<script lang="ts">
export default {
  name: 'ProUpload',
  inheritAttrs: false,
}
</script>

<script lang="ts" setup>
/* TODO: UploadInstance 会导致 vite-plugin-dts 生成类型时无限循环，暂时注释 */
import ProIcon from '../../icon'
import ProImage from '../../image'
import { byteConvert } from 'component-library-utils/bytes'
import {
  getFilteredSlotNames,
  getSlotName,
  hasSlot,
} from 'component-library-utils/slot'
import { ElMessage, ElUpload } from 'element-plus'
import { isUndefined } from 'lodash-es'
import { ref, reactive, computed, watch, useSlots } from 'vue'
import type {
  UploadExtendedProps,
  UploadFile,
  UploadFiles,
  // UploadInstance,
  UploadRawFile,
  UploadUserFile,
} from './upload'
import type { ProImageInstance, ProImageProps } from '../../image'

/* 属性 */
const $props = withDefaults(defineProps<UploadExtendedProps>(), {
  disabled: undefined,
})
/* 事件 */
const $emits = defineEmits(['update:file-list'])
/* 插槽 */
const $slots = useSlots()
const $uploadSlotNames = ['tip', 'trigger']
const $uploadFilteredSlotNames = getFilteredSlotNames(
  $props,
  $slots,
  $uploadSlotNames
)
/* 实例 */
// const $uploadRef = ref<UploadInstance>()
const $uploadRef = ref()
/* 辅助参数 */
const $hideUploadButton = ref(false)
const $onPreviewClick = (uploadFile: UploadFile) => {
  $defaultOnPreview(uploadFile)
}
const $onRemoveClick = (uploadFile: UploadFile) => {
  $defaultOnRemove(uploadFile, [])
}
const $proImage = reactive<ProImageProps>({
  height: 0,
  initialIndex: 0,
  previewSrcList: [],
  src: '',
  width: 0,
})
const $proImageRef = ref<ProImageInstance>()
/* 默认值（内部不做修改） */
const $defaultAccept = computed(() => {
  if (!isUndefined($props.accept)) {
    return $props.accept
  }
  return 'image/*'
})
const $defaultBeforeUpload = (rawFile: UploadRawFile) => {
  if ($props.maxVolume) {
    if (rawFile.size > $props.maxVolume) {
      ElMessage.warning(
        `上传的文件大小不能超过 ${byteConvert($props.maxVolume)} `
      )
      return Promise.reject(false)
    }
  }
  $props.beforeUpload?.(rawFile)
}
const $defaultDisabled = computed(() => {
  if (!isUndefined($props.disabled)) {
    return $props.disabled
  }
  return false
})
const $defaultLimit = computed(() => {
  if (!isUndefined($props.limit)) {
    return $props.limit
  }
  return 0
})
const $defaultListType = computed(() => {
  if (!isUndefined($props.listType)) {
    return $props.listType
  }
  return 'picture-card'
})
const $defaultOnPreview = (uploadFile: UploadFile) => {
  $proImage.initialIndex = $props.fileList?.findIndex(
    file => file.url === uploadFile.url
  )!
  if (
    $defaultListType.value === 'picture' ||
    $defaultListType.value === 'picture-card'
  ) {
    $proImageRef.value?.ref?.$el.children[0].click()
  }
  $props.onPreview?.(uploadFile)
}
const $defaultOnRemove = (uploadFile: UploadFile, uploadFiles: UploadFiles) => {
  const fileIndex = $internalFileList.value.findIndex(
    file => file.url === uploadFile.url
  )
  $internalFileList.value.splice(fileIndex, 1)
  $props.onRemove?.(uploadFile, uploadFiles)
}
const $defaultOnSuccess = (
  response: any,
  uploadFile: UploadFile,
  uploadFiles: UploadFiles
) => {
  $internalFileList.value = uploadFiles
  $props.onSuccess?.(response, uploadFile, uploadFiles)
}
/* 默认值（内部可做修改） */
const $internalFileList = ref<UploadUserFile[]>([])
watch(
  () => $props.fileList,
  value => {
    if (!isUndefined(value)) {
      $internalFileList.value = value!
    }
  },
  {
    deep: true,
    immediate: true,
  }
)
watch(
  () => $internalFileList.value,
  value => {
    if (!$defaultLimit.value) {
      $hideUploadButton.value = false
    } else {
      if (value) {
        if (value.length < $defaultLimit.value) {
          $hideUploadButton.value = false
        } else {
          $hideUploadButton.value = true
        }
      }
    }
    if (value) {
      const previewSrcList = value.map(file => file.url!)
      $proImage.previewSrcList = previewSrcList
      $proImage.src = previewSrcList?.[0]
    }
    $emits('update:file-list', value)
  },
  {
    deep: true,
  }
)

defineExpose({
  /* 实例 */
  ref: $uploadRef,
})
</script>
