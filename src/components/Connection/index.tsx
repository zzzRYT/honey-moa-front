import Modal from '@/components/Modal';
import { ConnectionModalProps } from './type';
import * as S from './style';
import { Svg } from '@/components/Svg';
import { mainThemeColor } from '@/styles/theme';
import { useRef, useState } from 'react';
import { ConnectionQueries } from '@/apis/connection';
import { EachUserInfo } from '@/apis/connection/type';
import { SearchErrorHandler } from '@/apis/connection/error';
import { toast } from 'react-toastify';
import UserInfo from './UserInfo';

export default function ConnectionModal({ isOpen }: ConnectionModalProps) {
  const emailRef = useRef<HTMLInputElement>(null);
  const mutationSearch = ConnectionQueries.SearchQuery();
  const [userList, setUserList] = useState<Array<EachUserInfo>>([]);

  function submitSearch() {
    if (!emailRef.current) return;
    mutationSearch.mutate(emailRef.current.value, {
      onSuccess: users => {
        setUserList(users.contents);
      },
      onError: error => {
        toast.error(SearchErrorHandler(error));
        // error 코드 분리작업
      },
    });
  }

  return (
    <Modal isOpen={isOpen}>
      <S.ModalWrapper>
        <S.ModalHeader>
          <Svg.SearchIcon color="red" />
          <h2>사용자 검색</h2>
        </S.ModalHeader>
        <S.InputWrapper>
          <S.SearchInput ref={emailRef} placeholder="이름으로 검색하기" />
          <div onClick={() => submitSearch()}>
            <Svg.SearchIcon color={mainThemeColor.border.primary} />
          </div>
        </S.InputWrapper>
        <S.ListContainer>
          {userList.length ? (
            userList.map((userInfo: EachUserInfo) => {
              return <UserInfo userInfo={userInfo} />;
            })
          ) : (
            <div>이메일로 유저를 검색해보세요</div>
          )}
        </S.ListContainer>
      </S.ModalWrapper>
    </Modal>
  );
}
