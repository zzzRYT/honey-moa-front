import { useNavigate } from 'react-router-dom';
import * as S from './style';

export const SuccessNewBlogPostToast = ({
  postId,
  blogHome,
}: {
  postId: string;
  blogHome: string;
}) => {
  const navigate = useNavigate();

  const handleGoToPost = (location: 'home' | 'post') => {
    const obj = {
      home: navigate(`/honey/${blogHome}`),
      post: navigate(`/honey/${postId}`),
    } as const;
    return obj[location];
  };

  return (
    <S.ToastWrapper>
      <span>성공적으로 게시글을 작성했습니다!</span>
      <span>자동으로 게시글로 이동됩니다.</span>
      <S.ToastButtonContainer>
        <button onClick={() => handleGoToPost('post')}>게시글 보러가기</button>
        <button onClick={() => handleGoToPost('home')}>홈으로 돌아가기</button>
      </S.ToastButtonContainer>
    </S.ToastWrapper>
  );
};
