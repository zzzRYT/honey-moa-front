import { Header } from '../Layouts';
import SideNavigate from './SideNavigate';
import * as S from './style';
import { Contents, Profile } from '.';

const connected = false;
export default function Main() {
  return (
    <>
      {connected ? <Header.MainHeader /> : <Header.UnConnectedHeader />}
      <S.ContentsWrapper>
        <SideNavigate />
        <div>
          {connected ? (
            <Profile.CoupleProfile />
          ) : (
            <Profile.UnConnectedProfile />
          )}
          {connected ? <Contents.HoneyList /> : <Contents.UnConnectedList />}
        </div>
      </S.ContentsWrapper>
    </>
  );
}
