import styled from 'styled-components';
import { TooltipDirectionProps } from './type';

const TooltipDirectionSelector = {
  top: 'bottom: 100%; left: 50%; transform: translateX(-50%);',
  bottom: 'top: 100%; left: 50%; transform: translateX(-50%);',
  left: 'top: 50%; right: 100%; transform: translateY(-50%);',
  right: 'top: 50%; left: 100%; transform: translateY(-50%);',
};

export const TooltipWrapper = styled.div`
  position: relative;
  font-size: 8px;

  &:hover > .tooltipText,
  &:active > .tooltipText {
    display: block;
  }
`;

export const TooltipTextDiv = styled.div<TooltipDirectionProps>`
  display: none;
  position: absolute;
  z-index: 5;
  padding: 5px;
  background-color: ${({ theme }) => theme.bg.primary};
  border: 1px solid ${({ theme }) => theme.border.primary};
  border-radius: 5px;
  font-size: 12px;
  white-space: nowrap;

  ${({ $direction }) => TooltipDirectionSelector[$direction]}
`;
