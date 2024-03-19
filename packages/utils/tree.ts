export type TreeConfig = {
  id: string
  children: string
  pid: string
}
export const getConfig = (config: Partial<TreeConfig>) =>
  Object.assign({ id: 'id', children: 'children', pid: 'pid' }, config)
/* 列表转树 */
export const listToTree = <T = any>(
  list: any[],
  config: Partial<TreeConfig> = {}
): T[] => {
  const conf = getConfig(config) as TreeConfig
  const nodeMap = new Map()
  const result: T[] = []
  const { id, children, pid } = conf

  for (const node of list) {
    node[children] = node[children] || []
    nodeMap.set(node[id], node)
  }
  for (const node of list) {
    const parent = nodeMap.get(node[pid])
    ;(parent ? parent.children : result).push(node)
  }
  return result
}
/* 树转列表 */
export const treeToList = <T = any>(
  tree: any,
  config: Partial<TreeConfig> = {}
): T => {
  config = getConfig(config)
  const { children } = config
  const result: any = [...tree]
  for (let i = 0; i < result.length; i++) {
    if (!result[i][children!]) continue
    result.splice(i + 1, 0, ...result[i][children!])
  }
  return result
}
