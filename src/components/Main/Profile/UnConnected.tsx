import { Svg } from '@/components/Svg';
import * as S from './style';
import { useState } from 'react';
import * as Connection from '@/components/Connection';

export default function UnConnectedProfile() {
  const user = {
    name: '이재진',
    profileImage: 'images/introImage.jpg',
  };
  const [isConnectionOpen, setIsConnectionOpen] = useState<boolean>(false);
  const [isManageOpen, setIsManageOpen] = useState<boolean>(false);
  return (
    <>
      <>
        <S.UnConnectedProfileBgDiv>
          <S.UnConnectedInfoWrapper>
            <S.EachImageContainer>
              <div>
                <img src={user.profileImage} alt="profile" />
              </div>
              <div>
                <Svg.LockIcon />
              </div>
            </S.EachImageContainer>
            <S.CoupleShortIntroduction>
              <h4>{user.name}</h4>
              <p>
                소중한 추억을 함께 기록하기 위해 파트너와 연결해주세요.
                <br /> 연결 후에는 다이어리 작성, 사진 공유 등 더 많은 기능을
                이용할 수 있어요.
              </p>
              <S.ConnectedCoupleButton
                onClick={() => setIsConnectionOpen(prev => !prev)}
              >
                커플 연결하기
              </S.ConnectedCoupleButton>
              <S.ConnectedCoupleButton
                onClick={() => setIsManageOpen(prev => !prev)}
              >
                나에게 온 요청
              </S.ConnectedCoupleButton>
            </S.CoupleShortIntroduction>
            <Connection.ConnectionModal isOpen={isConnectionOpen} />
            <Connection.ManageModal isOpen={isManageOpen} />
          </S.UnConnectedInfoWrapper>
        </S.UnConnectedProfileBgDiv>
      </>
    </>
  );
}
