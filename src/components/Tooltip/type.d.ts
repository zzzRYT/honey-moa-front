type TooltipDirection = 'top' | 'bottom' | 'left' | 'right';

export interface TooltipProps {
  children: React.ReactNode;
  message: string;
  direction?: TooltipDirection;
}

export interface TooltipDirectionProps {
  $direction: TooltipDirection;
}
