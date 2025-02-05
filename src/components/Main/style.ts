import styled from 'styled-components';

export const ContentsWrapper = styled.div`
  display: flex;
  //메인 컨텐츠
  & > :nth-child(2) {
    flex: 1;
  }
`;

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 500px;
  background-color: ${({ theme }) => theme.bg.primary};
`;
