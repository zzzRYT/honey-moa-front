import * as S from './style';
import { Svg } from '@/components/Svg';
import { UserInfoProps } from '../type';
import { ConnectionQueries } from '@/apis/connection';
import { toast } from 'react-toastify';
import { PostConnectionErrorHandler } from '@/apis/connection/error';

export default function UserInfo({ userInfo }: UserInfoProps) {
  const mutationConnection = ConnectionQueries.PostConnectionQuery();
  function connectionHandler(id: string) {
    mutationConnection.mutate(id, {
      onSuccess: () => {
        toast.success('요청이 완료됐습니다.');
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
    </S.EachUserInfo>
  );
}
