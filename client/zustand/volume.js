import create from 'zustand'

export const useVolume = create((set, get) => ({
  error: null,
  muted: false,
  value: 1,
  setVolume: (value) => set({ value })
}))