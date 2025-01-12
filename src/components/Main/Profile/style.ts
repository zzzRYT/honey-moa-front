import styled from 'styled-components';

export const ProfileWrapper = styled.div`
  height: 300px;
  padding: 24px;
  position: relative;
`;

export const ProfileBgImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CoupleInfoWrapper = styled.div`
  position: absolute;
  width: 60%;
  background-color: ${({ theme }) => theme.bg_02};
  border-radius: 16px;
  left: 0;
  top: 36px;
  right: 0;
  bottom: 36px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const EachImageContainer = styled.div`
  display: flex;
  gap: 16px;
  //각 이미지
  & > :nth-child(n) {
    width: 64px;
    height: 64px;
    border: 1px solid ${({ theme }) => theme.border_02};
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

export const CoupleShortIntroduction = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  align-items: center;
  //커플이름
  h4 {
    text-align: center;
    color: ${({ theme }) => theme.text_01};
  }
  //커플소개글
  p {
    text-align: center;
    font-size: 16px;
    margin: 12px 0px;
  }
`;

export const UnConnectedProfileBgDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
`;

export const UnConnectedInfoWrapper = styled.div`
  border-radius: 16px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  align-items: center;
  padding: 24px;
  border: 1px solid ${({ theme }) => theme.border.primary};
  background-color: ${({ theme }) => theme.bg.tertiary};
`;

export const ConnectedCoupleButton = styled.button`
  height: 48px;
  border-radius: 25px;
  border: none;
  background-color: ${({ theme }) => theme.button.primary.base};
  color: ${({ theme }) => theme.text.secondary};
  font-size: 16px;
  cursor: pointer;
  padding: 12px 24px;
  &:hover {
    background-color: ${({ theme }) => theme.button.primary.hover};
  }
`;
