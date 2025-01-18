import Modal from '@/components/Modal';
import { ConnectionModalProps } from './type';
import * as S from './style';
import { Svg } from '@/components/Svg';
import { mainThemeColor } from '@/styles/theme';
import { useRef, useState } from 'react';
import { ConnectionQueries } from '@/apis/connection';
import { EachUserInfo } from '@/apis/connection/type';
import { useToastStore } from '@/store/toastStore/useToastStore';
import { SearchErrorHandler } from '@/apis/connection/error';

export default function ConnectionModal({ isOpen }: ConnectionModalProps) {
  const emailRef = useRef<HTMLInputElement>(null);
  const mutationSearch = ConnectionQueries.SearchQuery();
  const [userList, setUserList] = useState<Array<EachUserInfo>>([]);
  const showToast = useToastStore(state => state.showToast);

  function submitSearch() {
    if (!emailRef.current) return;
    mutationSearch.mutate(emailRef.current.value, {
      onSuccess: users => {
        setUserList(users.contents);
      },
      onError: error => {
        showToast(SearchErrorHandler(error) as string);
        // error 코드 분리작업, toast 방식 변경(todo)
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
            userList.map(userInfo => {
              return (
                // 컴포넌트 분리(todo)
                <S.EachUserInfo key={userInfo.id}>
                  <S.InfoBox>
                    <S.ProfileImg>사진</S.ProfileImg>
                    <S.NameContainer>
                      <S.NickName>{userInfo.nickname}</S.NickName>
                      <S.Email>{userInfo.email}</S.Email>
                    </S.NameContainer>
                  </S.InfoBox>
                  <S.ConnectButton>
                    <Svg.ConnectedIcon size={15} />
                    <p>Connect</p>
                  </S.ConnectButton>
                </S.EachUserInfo>
              );
            })
          ) : (
            <div>이메일로 유저를 검색해보세요</div>
          )}
        </S.ListContainer>
      </S.ModalWrapper>
    </Modal>
  );
}
