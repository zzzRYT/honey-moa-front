import { useNavigate } from 'react-router-dom';
import { Svg } from '../../Svg';
import * as S from './style';
import { SettingHeaderProps } from './type';

/**
 * SettingHeader 컴포넌트
 *
 * @param titleText Header에 들어갈 페이지 이름
 * @returns Header 컴포넌트
 */
export default function SettingHeader({ titleText }: SettingHeaderProps) {
  const navigate = useNavigate();

  return (
    <S.HeaderWrapper>
      <S.SettingHeaderContents>
        <S.PrevIconContainer onClick={() => navigate(-1)}>
          <Svg.PrevIcon />
        </S.PrevIconContainer>
        <h1>{titleText}</h1>
      </S.SettingHeaderContents>
    </S.HeaderWrapper>
  );
}
