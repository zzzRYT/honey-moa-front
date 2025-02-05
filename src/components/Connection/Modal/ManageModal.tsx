import Modal from '@/components/Modal';
import { ManageModalProps } from '../type';
import * as S from './style';
import { Svg } from '@/components/Svg';
import ConnectionList from './ConnectionList';

export default function ManageModal({ isOpen }: ManageModalProps) {
  return (
    <Modal isOpen={isOpen}>
      <S.ManageModalWrapper>
        <S.ModalHeader>
          <Svg.ConnectedIcon color="black" />
          <h2>요청 관리</h2>
        </S.ModalHeader>
        <ConnectionList />
      </S.ManageModalWrapper>
    </Modal>
  );
}
