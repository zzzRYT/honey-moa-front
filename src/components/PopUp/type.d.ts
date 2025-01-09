type Direction = 'top' | 'bottom' | 'left' | 'right';

export interface TooltipProps {
  children: React.ReactNode;
  message: string;
  direction?: Direction;
}

export interface TooltipDirectionProps {
  $direction: Direction;
}

export interface ToastProps {
  message: string;
  direction?: Direction;
}

export interface ToastInvisibleProps {
  $isVisible: boolean;
  $isAnimating: boolean;
}
