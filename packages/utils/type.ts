import { isNull, isUndefined } from 'lodash-es'

export function isNoValue(value: any): boolean {
  return isNull(value) || isUndefined(value) || value === ''
}
