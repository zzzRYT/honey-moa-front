import styled from 'styled-components';

export const ModalWrapper = styled.div`
  width: 400px;
  padding: 24px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.bg.primary};
  display: flex;
  flex-direction: column;
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
  margin-bottom: 12px;
`;
export const InputWrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.border.primary};
  height: 42px;
  border-radius: 8px;
  display: flex;
  overflow: hidden;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
`;
export const SearchInput = styled.input`
  border: 0px;
  outline: none;
`;

export const ListContainer = styled.div`
  padding: 12px;
  width: 100%;
`;
