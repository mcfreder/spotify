import create from 'zustand'

export const useResize = create((set, get) => ({
  widthValue: 230,
  setWidth: (e) => set({ widthValue: e.x })
}))