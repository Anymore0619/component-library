export function ComponentLibraryResolver(): {
  type: 'component' | 'directive'
  resolve: any
} {
  return {
    type: 'component',
    resolve: (componentName: string) => {
      if (componentName.startsWith('Pro'))
        return {
          name: componentName,
          from: 'component-library',
        }
    },
  }
}
