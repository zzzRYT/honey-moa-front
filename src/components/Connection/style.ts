import styled from 'styled-components';

export const ModalWrapper = styled.div`
  width: 350px;
  padding: 24px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.bg.primary};
`;
export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  h2 {
    font-size: 18px;
    margin-left: 16px;
    font-weight: 700;
  }
`;
