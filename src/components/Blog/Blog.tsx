import * as S from './style';
import { useLocation } from 'react-router-dom';
import { Header, SideNavigate } from '../Layouts';
import { UserQueries } from '@/apis/user';
import { Contents, Profile } from '../Main';
import { BlogQueries } from '@/apis/blog';

export default function Blog() {
  const { pathname } = useLocation();
  const pathArr = pathname.split('/');
  const id = pathArr[pathArr.length - 1];
  const myInfo = UserQueries.GetMyInfoQuery();
  const getBlogInfo = BlogQueries.GetSingleBlogQuery(myInfo?.id as string);

  return (
    <>
      <Header.BlogHeader blogName={getBlogInfo?.name as string} />
      <S.ContentsWrapper>
        <SideNavigate.AbleBlogSideNav />
        <div>
          <Profile.CoupleProfile myId={myInfo?.id} />
          <Contents.HoneyList />
        </div>
      </S.ContentsWrapper>
      <h1>{id}Blog</h1>
    </>
  );
}
