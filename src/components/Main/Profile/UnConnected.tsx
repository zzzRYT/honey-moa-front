import { Svg } from '@/components/Svg';
import * as S from './style';
import ConnectionModal from '@/components/Connection';
import { useState } from 'react';

export default function UnConnectedProfile() {
  const user = {
    name: '이재진',
    profileImage: 'images/introImage.jpg',
  };
  const [isOpen, setIsOpen] = useState<boolean>(false);
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
              <S.ConnectedCoupleButton onClick={() => setIsOpen(prev => !prev)}>
                커플 연결하기
              </S.ConnectedCoupleButton>
            </S.CoupleShortIntroduction>
            <ConnectionModal isOpen={isOpen} />
          </S.UnConnectedInfoWrapper>
        </S.UnConnectedProfileBgDiv>
      </>
    </>
  );
}
