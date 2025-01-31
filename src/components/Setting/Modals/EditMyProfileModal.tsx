import Image from '@/components/Image';
import * as S from './style';
import { Svg } from '@/components/Svg';
import { useState } from 'react';
import { CurrentProfileInfoType } from './type';
import { changeInfo } from '@/utils';

export default function EditMyProfileModal() {
  const [currentProfileInfo, setCurrentProfileInfo] =
    useState<CurrentProfileInfoType>({
      editName: '이재진',
      editImage: {} as File,
      blobImage: 'images/introImage.jpg',
    });

  const profileImageToUploadFile = changeInfo.image<CurrentProfileInfoType>({
    setState: setCurrentProfileInfo,
  });

  const onChangeName = changeInfo.text<CurrentProfileInfoType>({
    setState: setCurrentProfileInfo,
  });

  const onEditProfile: React.FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();
    //api로 담아보낼 from데이터
    const formData = new FormData();
    formData.append('file', currentProfileInfo.editImage);
    //api요청 로직 추가 예정
  };

  return (
    <>
      <S.ModalWrapper>
        <S.ModalHeader>
          <h2>프로필 수정</h2>
        </S.ModalHeader>
        <form onSubmit={onEditProfile}>
          <S.EditProfileWrapper>
            <S.EditProfileImageOverlay>
              <Image
                src={currentProfileInfo.blobImage}
                alt="profile"
                width="80px"
                height="80px"
                borderRadius="50%"
              />
              <label htmlFor="editImage">
                <Svg.CameraIcon />
              </label>
              <input
                type="file"
                accept="image/*"
                id="editImage"
                onChange={profileImageToUploadFile}
                hidden
              />
            </S.EditProfileImageOverlay>
            <S.EditInputContainer>
              <label>이름</label>
              <input
                type="text"
                value={currentProfileInfo.editName}
                id="editName"
                placeholder="이름을 입력하세요."
                onChange={onChangeName}
              />
              <button>저장하기</button>
            </S.EditInputContainer>
          </S.EditProfileWrapper>
        </form>
      </S.ModalWrapper>
    </>
  );
}
