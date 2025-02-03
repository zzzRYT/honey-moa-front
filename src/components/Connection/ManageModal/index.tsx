import Modal from '@/components/Modal';
import { ManageModalProps } from '../type';
import * as S from '../style';
import { Svg } from '@/components/Svg';
import { useEffect, useState } from 'react';
import { ConnectionInfo } from './ConnectionInfo';
import { ConnectionListContent } from '@/apis/connection/type';
import { ConnectionQueries } from '@/apis/connection';

export default function ManageModal({ isOpen }: ManageModalProps) {
  const [requestList, setRequestList] = useState<ConnectionListContent[]>();
  const [requestedList, setRequestedList] = useState<ConnectionListContent[]>();

  const requesterQuery = ConnectionQueries.GetConnectionListPaginationQuery({
    showRequest: true,
  });
  const requestedQuery = ConnectionQueries.GetConnectionListPaginationQuery({
    showRequested: true,
  });
  useEffect(() => {
    if (isOpen) {
      setRequestList(requesterQuery?.contents);
      setRequestedList(requestedQuery?.contents);
    }
  }, [isOpen]);

  return (
    <Modal isOpen={isOpen}>
      <S.ModalWrapper>
        <S.ModalHeader>
          <Svg.ConnectedIcon color="black" />
          <h2>요청 관리</h2>
        </S.ModalHeader>
        <S.ListContainer>
          <h2>보낸 요청</h2>
          {requestList ? (
            requestList.map(info => {
              return (
                <ConnectionInfo
                  key={info.id}
                  info={info}
                  direction={'request'}
                />
              );
            })
          ) : (
            <div>보낸 요청이 없습니다.</div>
          )}
        </S.ListContainer>
        <S.ListContainer>
          <h2>받은 요청</h2>
          {requestedList ? (
            requestedList.map(info => {
              return (
                <ConnectionInfo
                  key={info.id}
                  info={info}
                  direction={'requested'}
                />
              );
            })
          ) : (
            <div>받은 요청이 없습니다.</div>
          )}
        </S.ListContainer>
      </S.ModalWrapper>
    </Modal>
  );
}
