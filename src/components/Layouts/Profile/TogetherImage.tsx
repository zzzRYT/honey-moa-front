import Image from '@/components/Image';
import * as S from './style';
import { TogetherImageProps } from './type';
import { BlogQueries } from '@/apis/blog';

export default function TogetherImage({ myId }: TogetherImageProps) {
  const getBlogInfo = BlogQueries.GetSingleBlogQuery(myId!);

  return (
    <S.CoupleProfileWrapper>
      <S.EachImageContainer>
        {getBlogInfo?.members.map(member => {
          return (
            <Image
              key={member.id}
              src={member.profileImageUrl}
              alt="profile"
              width="64px"
              height="64px"
              borderRadius="50%"
            />
          );
        })}
      </S.EachImageContainer>
    </S.CoupleProfileWrapper>
  );
}
