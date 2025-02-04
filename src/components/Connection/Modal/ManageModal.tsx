import Modal from '@/components/Modal';
import { ManageModalProps } from '../type';
import * as S from './style';
import { Svg } from '@/components/Svg';
import { ConnectionQueries } from '@/apis/connection';
import RequestSentConnections from './RequestSentConnections';
import RequestReceivedConnections from './RequestReceivedConnections';

export default function ManageModal({ isOpen }: ManageModalProps) {
  const requesterQuery = ConnectionQueries.GetConnectionListPaginationQuery({
    showRequest: true,
    type: 'requester',
  });
  const requestedQuery = ConnectionQueries.GetConnectionListPaginationQuery({
    showRequested: true,
    type: 'requested',
  });

  return (
    <Modal isOpen={isOpen}>
      <S.ModalWrapper>
        <S.ModalHeader>
          <Svg.ConnectedIcon color="black" />
          <h2>요청 관리</h2>
        </S.ModalHeader>
        <S.ConnectionFeatureWrapper>
          <S.ListContainer>
            <h2>보낸 요청</h2>
            {requesterQuery && (
              <RequestSentConnections
                requestList={[...requesterQuery.contents]}
              />
            )}
          </S.ListContainer>
          <S.ListContainer>
            <h2>받은 요청</h2>
            {requestedQuery && (
              <RequestReceivedConnections
                requestList={[...requestedQuery.contents]}
              />
            )}
          </S.ListContainer>
        </S.ConnectionFeatureWrapper>
      </S.ModalWrapper>
    </Modal>
  );
}
