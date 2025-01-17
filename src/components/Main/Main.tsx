import { Header } from '../Layouts';
import SideNavigate from './SideNavigate';
import * as S from './style';
import { Contents, Profile } from '.';

const connected = true;
const connectedContents = connected ? (
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

export default function Main() {
  return (
    <>
      {connected ? <Header.MainHeader /> : <Header.UnConnectedHeader />}
      <S.ContentsWrapper>
        <SideNavigate />
        <div>{connectedContents}</div>
      </S.ContentsWrapper>
    </>
  );
}
