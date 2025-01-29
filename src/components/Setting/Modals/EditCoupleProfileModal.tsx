import { useRef, useState } from 'react';
import * as S from './style';
import Image from '@/components/Image';
import { Svg } from '@/components/Svg';
import { useTheme } from 'styled-components';
import { CoupleProfileInfoType, EditProfileInputOnFocusType } from './type';
import { changeInfo } from '@/utils';

export default function EditCoupleProfileModal() {
  const theme = useTheme();
  const coupleNameRef = useRef<HTMLInputElement>(null);
  const coupleDescriptionRef = useRef<HTMLInputElement>(null);
  const [coupleInfo, setCoupleInfo] = useState<CoupleProfileInfoType>({
    name: '우리의 이야기 저장소',
    description: '우리의 이야기를 저장하는 곳',
    bgImage: 'images/introImage.jpg',
    myProfile: {
      name: '이재진',
      image: 'images/introImage.jpg',
    },
    partnerProfile: {
      name: '이재진',
      image: 'images/introImage.jpg',
    },
    startDate: '2016-04-21',
  });

  const EditProfileImageOverlayComponent = ({
    children,
    htmlForId,
  }: {
    children: React.ReactNode;
    htmlForId: string;
  }) => {
    return (
      <S.EditProfileImageOverlay>
        {children}
        <label htmlFor={htmlForId}>
          <Svg.CameraIcon />
        </label>
        <input type="file" id={htmlForId} hidden />
      </S.EditProfileImageOverlay>
    );
  };

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

  const onEditProfileDescription = (ref: EditProfileInputOnFocusType) => {
    if (ref.current) {
      ref.current.disabled = false;
      ref.current.focus();
    }
  };

  const onSubmitEditProfile = () => {};
  const onClickDisConnectedCouple = () => {};

  return (
    <S.ModalWrapper $width="650px">
      <S.EditCoupleProfileTitleNameWrapper>
        <input
          id="name"
          type="text"
          value={coupleInfo.name}
          disabled={true}
          ref={coupleNameRef}
          onChange={onChangeProfileName}
        />
        <label
          htmlFor="name"
          onClick={() => onEditProfileDescription(coupleNameRef)}
        >
          <Svg.WriteIcon size={24} />
        </label>
      </S.EditCoupleProfileTitleNameWrapper>
      <form onSubmit={onSubmitEditProfile}>
        <S.CoupleProfileWrapper>
          <EditProfileImageOverlayComponent htmlForId="previewCoupleBgImage">
            <Image
              src={coupleInfo.bgImage}
              alt="bgImage"
              width="100%"
              height="220px"
              borderRadius="18px"
            />
          </EditProfileImageOverlayComponent>
        </S.CoupleProfileWrapper>
        <S.CoupleProfileInfoWrapper>
          <S.CoupleInfoGrid>
            <EditProfileImageOverlayComponent htmlForId="previewMyProfileImage">
              <Image
                src={coupleInfo.myProfile.image}
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
            <EditProfileImageOverlayComponent htmlForId="previewPartnerProfileImage">
              <Image
                src={coupleInfo.myProfile.image}
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
                disabled={false}
                onChange={onChangeProfileDescription}
                ref={coupleDescriptionRef}
              />
              <label
                onClick={() => onEditProfileDescription(coupleDescriptionRef)}
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
