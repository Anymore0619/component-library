import type { Meta, StoryObj } from '@storybook/vue3'
/* 开发时引入方式（按需引入） */
import ProUpload from 'component-library-components/upload'
/* 打包后引入方式（按需引入） */
// import { ProUpload } from 'component-library'

const meta: Meta = {
  title: 'Base Components/ProUpload',
  component: ProUpload,
  argTypes: {
    /* attributes -> new attributes */
    defaultSlotName: {
      control: false,
      description: '默认内容的插槽名称（优先级高于 defaultSlotName > default）',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
      },
    },
    fileSlotName: {
      control: false,
      description: '缩略图内容的插槽名称（优先级 fileSlotName > file）',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
      },
    },
    maxVolume: {
      description: '上传的文件最大体积（字节）',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
      },
    },
    tipSlotName: {
      control: false,
      description: '提示说明内容的插槽名称（优先级 tipSlotName > tip）',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
      },
    },
    triggerSlotName: {
      control: false,
      description:
        '可触发文件选择内容的插槽名称（优先级 triggerSlotName > trigger）',
      table: {
        category: 'attributes',
        subcategory: 'new attributes',
      },
    },
    /* attributes -> attributes corresponding existing v-model attributes */
    fileList: {
      description: '上传文件的数组',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing v-model attributes',
        type: {
          summary: 'UploadUserFile[]',
        },
      },
    },
    /* attributes -> attributes corresponding existing attributes */
    accept: {
      description: '接受上传的文件类型',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing attributes',
      },
    },
    beforeUpload: {
      control: false,
      description: '上传文件之前的回调方法',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing attributes',
        type: {
          summary: '(rawFile: UploadRawFile) => void',
        },
      },
    },
    disabled: {
      description: '是否禁用',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing attributes',
      },
    },
    limit: {
      description: '最大上传数量',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing attributes',
      },
    },
    listType: {
      description: '文件列表类型',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing attributes',
        type: {
          summary: `"text" | "picture" | "picture-card"`,
        },
      },
    },
    onPreview: {
      control: false,
      description: '点击预览时的回调方法',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing attributes',
        type: {
          summary: '(uploadFile: UploadFile) => void',
        },
      },
    },
    onRemove: {
      control: false,
      description: '点击移除时的回调方法',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing attributes',
        type: {
          summary: '(uploadFile: UploadFile, uploadFiles: UploadFiles) => void',
        },
      },
    },
    onSuccess: {
      control: false,
      description: '上传文件成功时的回调方法',
      table: {
        category: 'attributes',
        subcategory: 'attributes corresponding existing attributes',
        type: {
          summary:
            '(response: any, uploadFile: UploadFile, uploadFiles: UploadFiles) => void',
        },
      },
    },
    /* exposes -> new expose */
    ref: {
      description: '上传的实例',
      table: {
        category: 'exposes',
        subcategory: 'new expose',
        type: {
          summary: 'UploadInstance',
        },
      },
    },
  },
}
export default meta

export const UseCase: StoryObj<typeof ProUpload> = {
  render: args => ({
    components: {
      ProUpload,
    },
    setup() {
      return {
        args,
      }
    },
    template: `
      <pro-upload
        style="width: 25rem;"
        v-bind="args"
        v-model:file-list="args.fileList"
      >
        <template #tip>
          <p style="font-size: 14px;">Tips: 仅支持图片上传</p>
          <p style="font-size: 14px;">Tips: 默认 listType 为 picture-card</p>
          <p style="font-size: 14px;">Tips: 仅当 listType 为 picture-card 时做默认逻辑与样式处理</p>
        </template>
      </pro-upload>
    `,
  }),
  args: {
    /* attributes -> new attributes */
    defaultSlotName: '',
    fileSlotName: '',
    maxVolume: 0,
    tipSlotName: '',
    triggerSlotName: '',
    /* attributes -> attributes corresponding existing v-model attributes */
    fileList: [],
    /* attributes -> attributes corresponding existing attributes */
    accept: 'image/*',
    beforeUpload: rawFile => {
      console.log(rawFile)
    },
    disabled: false,
    listType: 'picture-card',
    limit: 0,
    onPreview: uploadFile => {
      console.log(uploadFile)
    },
    onRemove: (uploadFile, uploadFiles) => {
      console.log(uploadFile)
      console.log(uploadFiles)
    },
    onSuccess: (response, uploadFile, uploadFiles) => {
      console.log(response)
      console.log(uploadFile)
      console.log(uploadFiles)
    },
  },
}
