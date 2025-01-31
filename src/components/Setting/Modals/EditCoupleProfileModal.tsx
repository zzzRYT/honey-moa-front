import { useEffect, useRef, useState } from 'react';
import * as S from './style';
import Image from '@/components/Image';
import { Svg } from '@/components/Svg';
import { useTheme } from 'styled-components';
import { CoupleProfileInfoType, EditProfileInputOnFocusType } from './type';
import { changeInfo } from '@/utils';
import EditProfileImageOverlayComponent from './EditProfileImageOverlayComponent';

export default function EditCoupleProfileModal() {
  const theme = useTheme();
  const coupleNameRef = useRef<HTMLInputElement>(null);
  const coupleDescriptionRef = useRef<HTMLInputElement>(null);
  const [coupleInfo, setCoupleInfo] = useState<CoupleProfileInfoType>({
    name: '우리의 이야기 저장소',
    description: '우리의 이야기를 저장하는 곳',
    bgImage: {} as File,
    blobImage: 'images/introImage.jpg',
    myProfile: {
      name: '이재진',
      image: {} as File,
      blobImage: 'images/introImage.jpg',
    },
    partnerProfile: {
      name: '이재진',
      image: {} as File,
      blobImage: 'images/introImage.jpg',
    },
    startDate: '2016-04-21',
  });
  const [isEditing, setIsEditing] = useState({
    name: true,
    description: true,
  });

  const calculateDurationRelationship = () => {
    const startDate = new Date(coupleInfo.startDate);
    const now = new Date();
    now.setHours(now.getHours() + 9);
    const diff = now.getTime() - startDate.getTime();
    const days = diff / (1000 * 60 * 60 * 24);
    //0일 부터 시작하므로 +1
    return Math.floor(days + 1);
  };

  const onChangeProfileDescription = changeInfo.text<CoupleProfileInfoType>({
    setState: setCoupleInfo,
  });
  const onChangeProfileName = changeInfo.text<CoupleProfileInfoType>({
    setState: setCoupleInfo,
  });

  const onChangeCoupleBgImage = changeInfo.image<CoupleProfileInfoType>({
    setState: setCoupleInfo,
  });

  const onChangeMyProfileImage = changeInfo.image<CoupleProfileInfoType>({
    setState: setCoupleInfo,
    depth: 'myProfile',
  });

  const onChangePartnerProfileImage = changeInfo.image<CoupleProfileInfoType>({
    setState: setCoupleInfo,
    depth: 'partnerProfile',
  });
  const onEditProfileTextInfo = (ref: EditProfileInputOnFocusType) => {
    if (ref.current) {
      ref.current.disabled = false;
      setIsEditing(prev => {
        return {
          ...prev,
          [`${ref.current?.id}`]: false,
        };
      });
      ref.current.focus();
    }
  };

  useEffect(() => {
    // 특정 영역 외 클릭 시 발생하는 이벤트
    function handleFocus(ref: EditProfileInputOnFocusType) {
      if (ref.current) {
        ref.current.disabled = true;
        setIsEditing(prev => {
          return {
            ...prev,
            [`${ref.current?.id}`]: true,
          };
        });
      }
    }

    // 이벤트 리스너에 handleFocus 함수 등록
    document.addEventListener('mouseup', () => handleFocus(coupleNameRef));
    document.addEventListener('mouseup', () =>
      handleFocus(coupleDescriptionRef)
    );
    return () => {
      document.removeEventListener('mouseup', () => handleFocus(coupleNameRef));
      document.removeEventListener('mouseup', () =>
        handleFocus(coupleDescriptionRef)
      );
    };
  }, [coupleNameRef, coupleDescriptionRef]);

  const onSubmitEditProfile = () => {
    //api로 담아보낼 from데이터
    const formData = new FormData();
    formData.append('file', coupleInfo.bgImage);
    formData.append('file', coupleInfo.myProfile.image);
    formData.append('file', coupleInfo.partnerProfile.image);
    //api요청 로직 추가 예정
  };
  const onClickDisConnectedCouple = () => {};

  return (
    <S.ModalWrapper $width="650px">
      <S.EditCoupleProfileTitleNameWrapper>
        <input
          id="name"
          type="text"
          value={coupleInfo.name}
          disabled={isEditing.name}
          ref={coupleNameRef}
          onChange={onChangeProfileName}
        />
        <label
          htmlFor="name"
          onClick={() => onEditProfileTextInfo(coupleNameRef)}
        >
          <Svg.WriteIcon size={24} />
        </label>
      </S.EditCoupleProfileTitleNameWrapper>
      <form onSubmit={onSubmitEditProfile}>
        <S.CoupleProfileWrapper>
          <EditProfileImageOverlayComponent
            htmlForId="bgImage"
            onChange={onChangeCoupleBgImage}
          >
            <Image
              src={coupleInfo.blobImage}
              alt="bgImage"
              width="100%"
              height="220px"
              borderRadius="18px"
            />
          </EditProfileImageOverlayComponent>
        </S.CoupleProfileWrapper>
        <S.CoupleProfileInfoWrapper>
          <S.CoupleInfoGrid>
            <EditProfileImageOverlayComponent
              htmlForId="myProfileImage"
              onChange={onChangeMyProfileImage}
            >
              <Image
                src={coupleInfo.myProfile.blobImage}
                alt="profile"
                width="80px"
                height="80px"
                borderRadius="50%"
              />
            </EditProfileImageOverlayComponent>
            <S.DuringRelationshipDateWrapper>
              <Svg.LikeIcon color={theme.accent} />
              <div>+ {calculateDurationRelationship()}</div>
            </S.DuringRelationshipDateWrapper>
            <EditProfileImageOverlayComponent
              htmlForId="partnerProfileImage"
              onChange={onChangePartnerProfileImage}
            >
              <Image
                src={coupleInfo.partnerProfile.blobImage}
                alt="profile"
                width="80px"
                height="80px"
                borderRadius="50%"
              />
            </EditProfileImageOverlayComponent>
            <span>{coupleInfo.myProfile.name}</span>
            <span />
            <span>{coupleInfo.partnerProfile.name}</span>
            <S.EditProfileDescription>
              <input
                type="text"
                value={coupleInfo.description}
                id="description"
                disabled={isEditing.description}
                onChange={onChangeProfileDescription}
                ref={coupleDescriptionRef}
              />
              <label
                onClick={() => onEditProfileTextInfo(coupleDescriptionRef)}
              >
                <Svg.WriteIcon size={16} />
              </label>
            </S.EditProfileDescription>
          </S.CoupleInfoGrid>
        </S.CoupleProfileInfoWrapper>
        <S.SubmitEditProfileButtonWrapper>
          <button type="submit">변경내용 저장</button>
        </S.SubmitEditProfileButtonWrapper>
      </form>
      <S.DisConnectedCoupleButtonWrapper>
        <S.DisConnectedCoupleButton>
          <Svg.DisConnectedCoupleIcon onClick={onClickDisConnectedCouple} />
          커플 연결 해제
        </S.DisConnectedCoupleButton>
      </S.DisConnectedCoupleButtonWrapper>
    </S.ModalWrapper>
  );
}
