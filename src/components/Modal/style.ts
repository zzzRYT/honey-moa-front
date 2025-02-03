import styled from 'styled-components';
import { ModalWrapperProps } from './type';

export const ModalWrapper = styled.div<ModalWrapperProps>`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(1, 1, 1, 0.2);
  z-index: 999;
  border: none;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(${({ $blur }) => ($blur ? '10px' : '0')});
`;
