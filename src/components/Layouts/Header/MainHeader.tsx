import { Link } from 'react-router-dom';
import { Svg } from '../../Svg';
import * as S from './style';
import Image from '@/components/Image';

export default function MainHeader() {
  return (
    <S.HeaderWrapper>
      <S.TitleContainer>
        <Image src="/images/introImage.jpg" alt="profile" />
        <h1>커플 블로그를 생성해 주세요.</h1>
      </S.TitleContainer>
      <S.SettingContainer>
        <button>공개글 보기</button>
        <Link to="/setting">
          <button>
            <Svg.SettingIcon size={36} />
          </button>
        </Link>
      </S.SettingContainer>
    </S.HeaderWrapper>
  );
}
