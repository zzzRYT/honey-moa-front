import { putConnection } from '@/apis/connection/endpoint';
import * as S from './style';

export function ConnectionInfo({ info, direction }: any) {
  function buttonHandler(type: 'ACCEPTED' | 'REJECTED' | 'CANCELED') {
    putConnection(type, info.id).then(res => console.log(res));
  }
  return (
    <S.InfoWrapper>
      <S.UserInfoBox>
        <div>사진?</div>
        {/* 이미지 추가 백엔드에 건의 */}
        <h3>
          {direction === 'request'
            ? info.requested.nickname
            : info.requester.nickname}
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
