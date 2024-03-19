import { ref, computed } from 'vue'

const remoteSortIndex = ref(0)

export const useRemoteSortIndex = () => {
  const currentRemoteSortIndex = computed(() => remoteSortIndex.value)
  const nextRemoteSortIndex = () => {
    remoteSortIndex.value++
    return currentRemoteSortIndex.value
  }

  return {
    currentRemoteSortIndex,
    nextRemoteSortIndex,
  }
}
