import { Header } from '../Layouts';
import SideNavigate from './SideNavigate';
import * as S from './style';
import { Contents, Profile } from '.';
import { GetMyInfoQuery } from '@/apis/user/queries';
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

export default function Main() {
  const myInfo = GetMyInfoQuery();
  const [isConnection, setIsConnection] = useState(false);

  useEffect(() => {
    if (myInfo?.acceptedConnection) {
      setIsConnection(true);
    }
  }, [myInfo]);

  if (isConnection && myInfo?.acceptedConnection.blog)
    return <Navigate to={`/honeyJar/${myInfo?.acceptedConnection.id}`} />;

  return (
    <>
      <Header.UnConnectedHeader />
      <S.ContentsWrapper>
        <SideNavigate />
        <div>
          <Profile.UnConnectedProfile />
          <Contents.UnConnectedList />
        </div>
      </S.ContentsWrapper>
    </>
  );
}
