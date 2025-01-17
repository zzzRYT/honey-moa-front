import * as S from './style';
import { BlogCommentType } from './type';

const blogCommentsMock: BlogCommentType[] = [
  {
    id: '4124',
    content: '좋은 글이네요!',
    date: '2025-01-14',
    user: {
      id: '1234',
      name: '김철수',
      profileImage: 'images/profileImage.jpg',
    },
  },
];

export default function BlogComments() {
  return (
    <S.BlogCommentsWrapper>
      <S.BlogCommentsHeader>
        <h2>댓글</h2>
        <p>({12})</p>
      </S.BlogCommentsHeader>
      <S.BlogCommentsContentsWrapper>
        {blogCommentsMock.map(comment => {
          return (
            <S.BlogComment key={comment.id}>
              <div>
                <img src={comment.user.profileImage} alt="profile" />
              </div>
              <div>
                <div>
                  <span>{comment.user.name}</span>
                  <p>{comment.date}</p>
                </div>
                <p>{comment.content}</p>
              </div>
            </S.BlogComment>
          );
        })}
      </S.BlogCommentsContentsWrapper>
    </S.BlogCommentsWrapper>
  );
}
