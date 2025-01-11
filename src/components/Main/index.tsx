import { Header } from '../Layouts';
import { CoupleProfile, UnConnectedProfile } from './Profile';
import HoneyList from './HoneyList';
import SideNavigate from './SideNavigate';
import * as S from './style';

const connected = false;
export default function Main() {
  return (
    <>
      {connected ? <Header.MainHeader /> : <Header.UnConnectedHeader />}
      <S.ContentsWrapper>
        <SideNavigate />
        <div>
          {connected ? <CoupleProfile /> : <UnConnectedProfile />}
          {connected ? (
            <HoneyList />
          ) : (
            <div>블로그를 이용하려면 연결이 필요합니다.</div>
          )}
        </div>
      </S.ContentsWrapper>
    </>
  );
}
