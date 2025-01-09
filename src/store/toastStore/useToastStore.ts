import { create } from 'zustand';
import { ToastState } from './type';

export const useToastStore = create<ToastState>(set => ({
  message: '',
  isVisible: false,
  showToast: message => {
    set({ message, isVisible: true });
  },
  hideToast: () => set({ isVisible: false }),
}));
