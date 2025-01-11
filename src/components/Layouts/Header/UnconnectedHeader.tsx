import { Svg } from '@/components/Svg';
import * as S from './style';

export default function UnConnectedHeader() {
  return (
    <S.HeaderWrapper>
      <S.UnConnectedTitleContainer>
        <Svg.UnConnectedIcon size={24} />
        <h1>커플 연결하러 가기</h1>
      </S.UnConnectedTitleContainer>
      <S.SettingContainer>
        <button>공개글 보기</button>
        <button>
          <Svg.SettingIcon size={36} />
        </button>
      </S.SettingContainer>
    </S.HeaderWrapper>
  );
}
