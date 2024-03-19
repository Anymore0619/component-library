import { setup } from '@storybook/vue3'
/* 全量引入 element-plus */
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import 'element-plus/dist/index.css'
/* 开发时引入样式 */
import 'component-library-theme-chalk/index.less'
/* 打包后引入样式 */
// import 'component-library/style.css'
import type { Preview } from '@storybook/vue3'

setup(app => {
  app.use(ElementPlus, {
    locale: zhCn,
  })
})

const hiddenArgNames = [
  'update:checkboxes',
  'update:checked-nodes',
  'update:checked-rows',
  'update:current-node',
  'update:current-page',
  'update:current-row',
  'update:file-list',
  'update:item-value',
  'update:loading',
  'update:model-value',
  'update:page-size',
  'update:remote-sort-index',
  'update:remote-sort-order',
  'update:show',
  'update:total',
  '$slotName',
  'default',
  `getSlotName($checkbox, $slots, 'content')`,
  `getSlotName($item, $slots, 'content')`,
  `getSlotName($item, $slots, 'default')`,
  `getSlotName($item, $slots, 'title')`,
  `getSlotName($props, $slots, 'content')`,
  `getSlotName($props, $slots, 'default')`,
  `getSlotName($props, $slots, 'dropdown')`,
  `getSlotName($props, $slots, 'file')`,
  `getSlotName($props, $slots, 'footer')`,
  `getSlotName($props, $slots, 'header')`,
  `getSlotName($props, $slots, 'label')`,
  `getSlotName($props, $slots, 'node-action')`,
  `getSlotName($props, $slots, 'title')`,
  'getSlotName($props, $slots, $affixFilteredSlotName)',
  'getSlotName($props, $slots, $autocompleteFilteredSlotName)',
  'getSlotName($props, $slots, $buttonFilteredSlotName)',
  'getSlotName($props, $slots, $calendarFilteredSlotName)',
  'getSlotName($props, $slots, $cardFilteredSlotName)',
  'getSlotName($props, $slots, $carouselFilteredSlotName)',
  'getSlotName($props, $slots, $carouselItemFilteredSlotName)',
  'getSlotName($props, $slots, $cascaderFilteredSlotName)',
  'getSlotName($props, $slots, $checkboxFilteredSlotName)',
  'getSlotName($props, $slots, $checkboxGroupFilteredSlotName)',
  'getSlotName($props, $slots, $datePickerFilteredSlotName)',
  'getSlotName($props, $slots, $descriptionsFilteredSlotName)',
  'getSlotName($props, $slots, $dialogFilteredSlotName)',
  'getSlotName($props, $slots, $dividerFilteredSlotName)',
  'getSlotName($props, $slots, $dropdownFilteredSlotName)',
  'getSlotName($props, $slots, $dropdownItemFilteredSlotName)',
  'getSlotName($props, $slots, $formFilteredSlotName)',
  'getSlotName($props, $slots, $formItemFilteredSlotName)',
  'getSlotName($props, $slots, $iconFilteredSlotName)',
  'getSlotName($props, $slots, $imageFilteredSlotName)',
  'getSlotName($props, $slots, $inputFilteredSlotName)',
  'getSlotName($props, $slots, $inputNumberFilteredSlotName)',
  'getSlotName($props, $slots, $linkFilteredSlotName)',
  'getSlotName($props, $slots, $paginationFilteredSlotName)',
  'getSlotName($props, $slots, $popoverFilteredSlotName)',
  'getSlotName($props, $slots, $progressFilteredSlotName)',
  'getSlotName($props, $slots, $radioFilteredSlotName)',
  'getSlotName($props, $slots, $radioGroupFilteredSlotName)',
  'getSlotName($props, $slots, $selectFilteredSlotName)',
  'getSlotName($props, $slots, $selectOptionFilteredSlotName)',
  'getSlotName($props, $slots, $switchFilteredSlotName)',
  'getSlotName($props, $slots, $tabPaneFilteredSlotName)',
  'getSlotName($props, $slots, $tableFilteredSlotName)',
  'getSlotName($props, $slots, $tableColumnFilteredSlotName)',
  'getSlotName($props, $slots, $tabsFilteredSlotName)',
  'getSlotName($props, $slots, $tagFilteredSlotName)',
  'getSlotName($props, $slots, $textFilteredSlotName)',
  'getSlotName($props, $slots, $timePickerFilteredSlotName)',
  'getSlotName($props, $slots, $timelineFilteredSlotName)',
  'getSlotName($props, $slots, $timelineItemFilteredSlotName)',
  'getSlotName($props, $slots, $tooltipFilteredSlotName)',
  'getSlotName($props, $slots, $treeFilteredSlotName)',
  'getSlotName($props, $slots, $uploadFilteredSlotName)',
  'getSlotName($props, $slots, $virtualizedSelectFilteredSlotName)',
  'getSlotName($props, $slots, $virtualizedTreeFilteredSlotName)',
  `getSlotName($props.dialogProps || {}, $slots, 'default')`,
]
const argTypes = hiddenArgNames.reduce((prev, cur) => {
  prev[cur] = {
    table: {
      disable: true,
    },
  }
  return prev
}, {})

const preview: Preview = {
  argTypes,
  parameters: {
    controls: {
      expanded: true,
      hideNoControlsWarning: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
      sort: 'alpha',
    },
    layout: 'centered',
  },
}

export default preview
