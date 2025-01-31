export interface ModalProps {
  children: React.ReactNode;
  isOpen?: boolean;
  shouldCloseToClickOutside?: boolean;
  focusTrap?: boolean;
  blur?: boolean;
  onClose?: () => void;
  onOpen?: () => void;
}

export interface ModalWrapperProps {
  blur: boolean;
}
