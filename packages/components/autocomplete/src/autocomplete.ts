import Autocomplete from './autocomplete.vue'
import type { Writable } from 'component-library-utils/types'
import type { AutocompleteInstance, AutocompleteProps } from 'element-plus'

/* 扩展的属性 */
type AutocompleteExtendedProps = {
  /* 新增的属性 */
  appendSlotName?: string
  defaultSlotName?: string
  prefixSlotName?: string
  prependSlotName?: string
  suffixSlotName?: string
  /* 对应已有属性的属性 */
  clearable?: boolean
  debounce?: number
  placeholder?: string
  /* 对应已有事件的属性 */
  blur?: (event?: FocusEvent) => void
  change?: (value?: string | number) => void
  clear?: () => void
  focus?: (event?: FocusEvent) => void
  input?: (value?: string | number) => void
  select?: (value?: string | number) => void
}
/* 可传递的属性 */
type ProAutocompleteProps = Writable<Partial<AutocompleteProps>> &
  AutocompleteExtendedProps
/* 实例 */
type ProAutocompleteInstance = InstanceType<typeof Autocomplete>

export type {
  /* 属性 */
  AutocompleteProps,
  AutocompleteExtendedProps,
  ProAutocompleteProps,
  /* 实例 */
  AutocompleteInstance,
  ProAutocompleteInstance,
}
