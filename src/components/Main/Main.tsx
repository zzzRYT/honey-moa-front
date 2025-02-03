import { Header } from '../Layouts';
import SideNavigate from './SideNavigate';
import * as S from './style';
import { Contents, Profile } from '.';
import { useConnectionInfoStore } from '@/store/connectionStore/connectionInfoStore';

export default function Main() {
  const { connectionInfo } = useConnectionInfoStore();

  // 유저정보에 연결정보 포함된 후 수정
  const connectedContents = connectionInfo ? (
    <>
      <Profile.CoupleProfile />
      <Contents.HoneyList />
    </>
  ) : (
    <>
      <Profile.UnConnectedProfile />
      <Contents.UnConnectedList />
    </>
  );

  return (
    <>
      {connectionInfo ? <Header.MainHeader /> : <Header.UnConnectedHeader />}
      <S.ContentsWrapper>
        <SideNavigate />
        <div>{connectedContents}</div>
      </S.ContentsWrapper>
    </>
  );
}
