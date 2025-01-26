import { create } from 'zustand';
import { ThemeStoreType } from './type';

export const useThemeStore = create<ThemeStoreType>(set => ({
  theme: 'light',
  setTheme: (theme: string) => set({ theme }),
}));
