type Direction = 'top' | 'bottom' | 'left' | 'right';

export interface TooltipProps {
  children: React.ReactNode;
  message: string;
  direction?: Direction;
}

export interface TooltipDirectionProps {
  $direction: Direction;
}
