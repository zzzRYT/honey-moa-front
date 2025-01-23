import { HTMLAttributes } from 'react';

export type SvgProps = {
  size?: number | string;
  fill?: boolean;
} & HTMLAttributes<HTMLOrSVGElement>;
