import Image from '@/components/Image';
import * as S from './style';
import { Svg } from '@/components/Svg';
import { useState } from 'react';
import { currentProfileInfoType } from './type';
import onChangeTextInfo from '@/utils/changeInfo/text';

export default function EditMyProfileModal() {
  const [currentProfileInfo, setCurrentProfileInfo] =
    useState<currentProfileInfoType>({
      editName: '이재진',
      editImage: {} as File,
      blobImage: 'images/introImage.jpg',
    });

  const profileImageToUploadFile: React.ChangeEventHandler<
    HTMLInputElement
  > = e => {
    if (!e.target.files) {
      return;
    }
    const file = e.target.files;
    if (file) {
      setCurrentProfileInfo(prev => {
        return {
          ...prev,
          editImage: file[0],
          blobImage: URL.createObjectURL(file[0]),
        };
      });
    }
  };

  const onChangeName = onChangeTextInfo<currentProfileInfoType>({
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
              <label htmlFor="previewProfileImage">
                <Svg.CameraIcon />
              </label>
              <input
                type="file"
                accept="image/*"
                id="previewProfileImage"
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
