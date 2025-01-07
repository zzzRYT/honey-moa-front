import Modal from '@/components/Modal';
import { ConnectionModalProps } from './type';
import * as S from './style';
import { Svg } from '@/components/Svg';
import { mainThemeColor } from '@/styles/theme';

export default function ConnectionModal({ isOpen }: ConnectionModalProps) {
  return (
    <Modal isOpen={isOpen}>
      <S.ModalWrapper>
        <S.ModalHeader>
          <Svg.SearchIcon color="red" />
          <h2>사용자 검색</h2>
        </S.ModalHeader>
        <S.InputWrapper>
          <S.SearchInput placeholder="이름으로 검색하기" />
          <Svg.SearchIcon color={mainThemeColor.border.primary} />
        </S.InputWrapper>
      </S.ModalWrapper>
    </Modal>
  );
}
