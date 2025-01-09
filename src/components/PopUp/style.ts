import styled, { keyframes } from 'styled-components';
import { TooltipDirectionProps } from './type';

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
  border: 1px solid ${({ theme }) => theme.border.tertiary};
  border-radius: 5px;
  font-size: 12px;
  white-space: nowrap;

  ${({ $direction }) => {
    switch ($direction) {
      case 'top':
        return `
            bottom: 100%;
            left: 50%;
            transform: translateX(-50%);
            `;
      case 'bottom':
        return `
            top: 100%;
            left: 50%;
            transform: translateX(-50%);
            `;
      case 'left':
        return `
            top: 50%;
            right: 100%;
            transform: translateY(-50%);
            `;
      case 'right':
        return `
            top: 50%;
            left: 100%;
            transform: translateY(-50%);
            `;
    }
  }}
`;

const ToastFrame = keyframes`
  from {
    opacity: 0;
    transform: translateY(100%);
  }
  to {
    opacity: 1;
    transform: translateY(0%);
  }
`;

export const ToastWrapper = styled.div`
  position: fixed;
  width: 300px;
  height: 75px;
  z-index: 9999;
  bottom: 3px;
  right: 3px;
`;

export const ToastTextDiv = styled.div`
  position: absolute;
  padding: 10px;
  background-color: ${({ theme }) => theme.accent};
  color: ${({ theme }) => theme.text.secondary};
  border-radius: 5px;
  font-size: 12px;
  white-space: nowrap;
  animation: ${ToastFrame} 0.5s ease-in-out;
`;
