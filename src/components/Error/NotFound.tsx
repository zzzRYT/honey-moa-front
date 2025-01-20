import { Link } from 'react-router-dom';
import * as S from './style';

export default function NotFound() {
  return (
    <S.NotFoundWrapper>
      <h3>404 Not Found</h3>
      <span>페이지를 찾을 수 없습니다.</span>
      <Link to="/root">홈으로</Link>
    </S.NotFoundWrapper>
  );
}
