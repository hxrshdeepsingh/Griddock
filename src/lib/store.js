import { create } from 'zustand';

const useStore = create((set) => ({
  IMAGE_NAME: 'default.png',
  IMAGE_SRC: 'blob:',
  ROWS: 3,
  COLS: 7,
  LINE_WIDTH: 2,
  LINE_COLOR: '#000',
  setVal: (key, value) => set((state) => ({ [key]: value })),
}))

export default useStore;
