export function byteConvert(bytes: number): string {
  const units = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
  let exp = Math.floor(Math.log(bytes) / Math.log(2))
  if (exp < 1) {
    exp = 0
  }
  const unitIndex = Math.floor(exp / 10)
  const volume = bytes / Math.pow(2, 10 * unitIndex)
  let volumeStr = volume.toString()
  if (volumeStr.length > volume.toFixed(2).toString().length) {
    volumeStr = volume.toFixed(2)
  }
  return `${volumeStr} ${units[unitIndex]}`
}
