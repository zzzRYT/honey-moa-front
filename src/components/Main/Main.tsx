import { Header } from '../Layouts';
import SideNavigate from './SideNavigate';
import * as S from './style';
import { Contents, Profile } from '.';
import { useConnectionInfoStore } from '@/store/connectionStore/connectionInfoStore';
import { useStore } from 'zustand';

export default function Main() {
  const { connectionInfo } = useStore(useConnectionInfoStore);

  // 유저정보에 연결정보 포함된 후 수정
  const connectedContents = connectionInfo?.acceptedConnection ? (
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
      {connectionInfo?.acceptedConnection ? (
        <Header.MainHeader />
      ) : (
        <Header.UnConnectedHeader />
      )}
      <S.ContentsWrapper>
        <SideNavigate />
        <div>{connectedContents}</div>
      </S.ContentsWrapper>
    </>
  );
}
