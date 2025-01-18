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

export const EachUserInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const InfoBox = styled.div`
  display: flex;
`;

export const ProfileImg = styled.div`
  border: 1px solid;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin-right: 10px;
`;

export const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NickName = styled.h5``;
export const Email = styled.span`
  color: gray;
  font-size: smaller;
`;

export const ConnectButton = styled.div`
  display: flex;
  align-items: center;
  * {
    margin-right: 10px;
  }
`;
