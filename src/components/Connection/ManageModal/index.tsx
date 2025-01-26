import Modal from '@/components/Modal';
import { ManageModalProps } from '../type';
import * as S from '../style';
import { Svg } from '@/components/Svg';
import { useEffect, useState } from 'react';
import { getConnectionList } from '@/apis/connection/endpoint';
import { GetConnectionListErrorHandler } from '@/apis/connection/error';
import { ConnectionInfo } from './ConnectionInfo';
import { toast } from 'react-toastify';

export default function ManageModal({ isOpen }: ManageModalProps) {
  const [requestList, setRequestList] = useState<any>();
  const [requestedList, setRequestedList] = useState<any>();

  useEffect(() => {
    getConnectionList('request')
      .then(res => setRequestList(res.contents))
      .catch(error => toast.error(GetConnectionListErrorHandler(error)));
    getConnectionList('requested')
      .then(res => setRequestedList(res.contents))
      .catch(error => toast.error(GetConnectionListErrorHandler(error)));
  }, []);

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
            requestList.map((info: any) => {
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
            requestedList.map((info: any) => {
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
