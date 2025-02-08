import { Link } from 'react-router-dom';
import { Svg } from '../../Svg';
import * as S from './style';
import { BlogHeaderProps } from './type';
import Image from '@/components/Image';

export default function Blog({ blogName }: BlogHeaderProps) {
  return (
    <S.HeaderWrapper>
      <S.TitleContainer>
        <Image
          src={'/images/introImage.jpg'}
          width="65px"
          height="65px"
          borderRadius="50%"
        />
        <h1>{blogName}</h1>
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
