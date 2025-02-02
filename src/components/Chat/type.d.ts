export interface ChatBoxProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ChatButtonProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
