export interface ToastState {
  message: string;
  isVisible: boolean;
  isAnimating: boolean;
  showToast: (message: string) => void;
  hideToast: () => void;
}
