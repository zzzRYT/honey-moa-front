import { Header } from '../Layouts';
import SideNavigate from './SideNavigate';
import * as S from './style';
import { Contents, Profile } from '.';
import { Navigate } from 'react-router-dom';
import { ConnectionQueries } from '@/apis/connection';
import Modal from '../Modal';
import CreateBlogModal from './CreateBlogModal';

export default function Main() {
  const connectionInfo = ConnectionQueries.GetConnectionListPaginationQuery({
    status: 'ACCEPTED',
    type: 'requester',
  });

  if (connectionInfo?.contents.length !== 0) {
    if (connectionInfo?.contents[0].blog) {
      return (
        <Navigate to={`/honeyJar/${connectionInfo?.contents[0].blog.id}`} />
      );
    }
  }

  return (
    <>
      <Header.UnConnectedHeader />
      <S.ContentsWrapper>
        <SideNavigate />
        <Modal
          shouldCloseToClickOutside={false}
          blur={true}
          isOpen={connectionInfo?.contents.length !== 0}
        >
          <CreateBlogModal />
        </Modal>

        <div>
          <Profile.UnConnectedProfile />
          <Contents.UnConnectedList />
        </div>
      </S.ContentsWrapper>
    </>
  );
}
