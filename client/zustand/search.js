import create from 'zustand'

export const useQueryValue = create(set => ({
  value: null,
  setValue: (value) => set({ value }),
  clear: (node) => {
    node.current.value = ''
    set({ value: null })
  }
}))