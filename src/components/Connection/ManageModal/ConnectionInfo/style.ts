import styled from 'styled-components';

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
`;

export const UserInfoBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 80%;
  * {
    margin-right: 8px;
  }
`;

export const ControlBox = styled.div`
  width: 20%;
`;

export const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
