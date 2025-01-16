import { Svg } from '@/components/Svg';
import * as S from './style';
import { useTheme } from 'styled-components';
import { PostContentsType } from '@/components/Post/type';
import { useNavigate } from 'react-router-dom';

export default function PostHeader(data: PostContentsType) {
  const theme = useTheme();
  const navigate = useNavigate();

  const submitContents = () => {
    console.log(data);
  };

  const ExitPostPage = () => {
    if (confirm('작성 중인 내용이 사라집니다. 정말 나가시겠습니까?')) {
      navigate(-1);
    }
  };

  return (
    <S.PostHeaderWrapper>
      <S.PostHeader>
        <S.ActionButton
          $bgColor={theme.bg.primary}
          $color={theme.text.primary}
          $hoverColor={theme.button.tertiary.hover}
          onClick={ExitPostPage}
        >
          <Svg.PrevIcon />
          나가기
        </S.ActionButton>
        <div>
          <S.ActionButton
            $bgColor={theme.bg.primary}
            $color={theme.text.primary}
            $hoverColor={theme.button.tertiary.hover}
          >
            임시 저장
          </S.ActionButton>
          <S.ActionButton
            $bgColor={theme.button.primary.base}
            $color={theme.text.secondary}
            $hoverColor={theme.button.primary.hover}
            onClick={submitContents}
          >
            게시하기
          </S.ActionButton>
        </div>
      </S.PostHeader>
    </S.PostHeaderWrapper>
  );
}
