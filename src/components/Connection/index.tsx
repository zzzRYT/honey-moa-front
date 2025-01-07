import Modal from '@/components/Modal';
import { ConnectionModalProps } from './type';
import * as S from './style';

export default function ConnectionModal({ isOpen }: ConnectionModalProps) {
  return (
    <Modal isOpen={isOpen}>
      <S.ModalWrapper>
        <S.ModalHeader>
          <h2>사용자 검색</h2>
        </S.ModalHeader>
      </S.ModalWrapper>
    </Modal>
  );
}
