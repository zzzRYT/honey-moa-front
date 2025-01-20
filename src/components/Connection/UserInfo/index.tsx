import * as S from './style';
import { Svg } from '@/components/Svg';
import { UserInfoProps } from '../type';
import { ConnectionQueries } from '@/apis/connection';
import { toast } from 'react-toastify';
import { PostConnectionErrorHandler } from '@/apis/connection/error';
import { useState } from 'react';

export default function UserInfo({ userInfo }: UserInfoProps) {
  const mutationConnection = ConnectionQueries.PostConnectionQuery();
  const [requestedUsers, setRequestedUsers] = useState<string[]>([]);
  function connectionHandler(id: string) {
    mutationConnection.mutate(id, {
      onSuccess: () => {
        setRequestedUsers([...requestedUsers, id]);
      },
      onError: error => {
        toast.error(PostConnectionErrorHandler(error));
      },
    });
  }

  return (
    <S.EachUserInfo key={userInfo.id}>
      <S.InfoBox>
        <S.ProfileImg>사진</S.ProfileImg>
        <S.NameContainer>
          <S.NickName>{userInfo.nickname}</S.NickName>
          <S.Email>{userInfo.email}</S.Email>
        </S.NameContainer>
      </S.InfoBox>

      {requestedUsers.includes(userInfo.id) ? (
        <S.ConnectButton>
          <Svg.ConnectedIcon size={15} />
          <p
            onClick={() => {
              toast.error('이미 요청한 유저입니다.');
            }}
          >
            connected
          </p>
        </S.ConnectButton>
      ) : (
        <S.ConnectButton>
          <Svg.ConnectedIcon size={15} />
          <p
            onClick={() => {
              connectionHandler(userInfo.id);
            }}
          >
            Connect
          </p>
        </S.ConnectButton>
      )}
    </S.EachUserInfo>
  );
}
