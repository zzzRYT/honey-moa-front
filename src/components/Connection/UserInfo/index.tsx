import * as S from './style';
import { Svg } from '@/components/Svg';
import { UserInfoProps } from '../type';

export default function UserInfo({ userInfo }: UserInfoProps) {
  function connectionHandler() {}

  return (
    <S.EachUserInfo key={userInfo.id}>
      <S.InfoBox>
        <S.ProfileImg>사진</S.ProfileImg>
        <S.NameContainer>
          <S.NickName>{userInfo.nickname}</S.NickName>
          <S.Email>{userInfo.email}</S.Email>
        </S.NameContainer>
      </S.InfoBox>
      <S.ConnectButton>
        <Svg.ConnectedIcon size={15} />
        <p>Connect</p>
      </S.ConnectButton>
    </S.EachUserInfo>
  );
}
