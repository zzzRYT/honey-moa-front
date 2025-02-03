import * as S from './style';
import Image from '@/components/Image';
import { ConnectionQueries } from '@/apis/connection';
import { ConnectionInfoProps } from './type';
import { ConnectionStatus } from '@/apis/connection/type';

export function ConnectionInfo({ info, direction }: ConnectionInfoProps) {
  function buttonHandler(type: ConnectionStatus) {
    const params = {
      id: info.id,
      status: type,
    };
    ConnectionQueries.PutConnectionQuery(params);
  }
  return (
    <S.InfoWrapper>
      <S.UserInfoBox>
        <Image src="/images/profile.png" alt="프로필사진" />
        {/* 이미지 추가 백엔드에 건의 */}
        <h3>
          {direction === 'request'
            ? info.requested?.nickname
            : info.requester?.nickname}
        </h3>
      </S.UserInfoBox>

      <S.ControlBox>
        {direction === 'request' ? (
          <button onClick={() => buttonHandler('CANCELED')}>취소</button>
        ) : (
          <S.ButtonBox>
            <button onClick={() => buttonHandler('ACCEPTED')}>수락</button>
            {/* 아이콘 디자인 나오면 교체 */}
            <button onClick={() => buttonHandler('REJECTED')}>거절</button>
          </S.ButtonBox>
        )}
      </S.ControlBox>
    </S.InfoWrapper>
  );
}
