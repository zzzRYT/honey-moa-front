import * as S from './style';

export default function Fallback({
  resetErrorBoundary,
}: {
  resetErrorBoundary: () => void;
}) {
  return (
    <S.FallbackWrapper>
      <p>페이지를 불러오는데 실패했습니다.</p>
      <p>재시도 해주세요.</p>
      <button onClick={resetErrorBoundary}>재시도</button>
    </S.FallbackWrapper>
  );
}
