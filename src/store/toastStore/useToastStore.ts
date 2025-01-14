import { create } from 'zustand';
import { ToastState } from './type';

export const useToastStore = create<ToastState>(set => ({
  message: '',
  isVisible: false,
  isAnimating: false,
  showToast: message => {
    set({ message, isVisible: true, isAnimating: true });
  },
  hideToast: () => {
    set({ isAnimating: false });
    setTimeout(() => {
      set({ isVisible: false });
    }, 300);
  },
}));
