import styled from 'styled-components';

export const EachUserInfoWrapper = styled.div`
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
