import * as S from './style';

export default function UnConnectedProfile() {
  const user = {
    name: '이재진',
    profileImage: 'images/introImage.jpg',
  };
  return (
    <>
      <S.ProfileWrapper>
        <S.ProfileBgImage src="images/introImage.jpg" />
        <S.CoupleInfoWrapper>
          <S.EachImageContainer>
            <div>
              <img src={user.profileImage} alt="profile" />
            </div>
          </S.EachImageContainer>
          <S.CoupleShortIntroduction>
            <h2>{user.name}</h2>
            <p>
              블로그를 사용하려면 연결이 필요합니다.
              <br /> <button>연결하러 가기</button>
            </p>
          </S.CoupleShortIntroduction>
        </S.CoupleInfoWrapper>
      </S.ProfileWrapper>
    </>
  );
}
