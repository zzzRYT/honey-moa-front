import { useRef, useState } from 'react';
import * as S from './style';
import Image from '@/components/Image';
import { Svg } from '@/components/Svg';
import { useTheme } from 'styled-components';
import { CheckIsEdit } from './type';
import { changeInfo } from '@/utils';

export default function EditCoupleProfileModal() {
  const theme = useTheme();
  const infoRef = useRef<HTMLInputElement[] | null[] | Array<string>>([
    'bgImage',
    'myProfile',
    'partnerProfile',
    'startDate',
    'description',
  ]);
  const [coupleInfo, setCoupleInfo] = useState({
    name: '우리의 이야기 저장소',
    description: '우리의 이야기를 저장하는 곳',
    bgImage: '/images/introImage.jpg',
    myProfile: {
      name: '이재진',
      image: '/images/introImage.jpg',
    },
    partnerProfile: {
      name: '이재진',
      image: '/images/introImage.jpg',
    },
    startDate: '2016-04-21',
  });
  const [isEdits, setIsEdits] = useState<CheckIsEdit>({
    bgImage: false,
    myProfile: false,
    partnerProfile: false,
    startDate: false,
    description: false,
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

  const editProfileDescription = changeInfo.text({
    setState: setCoupleInfo,
  });
  const isEditDescription = () => {
    changeInfo.toggle({
      setState: setIsEdits,
      key: 'description',
    });
    if (isEdits.description) {
      if (infoRef.current[4] instanceof HTMLInputElement) {
        infoRef.current[4].focus();
      }
    }
  };

  console.log(infoRef);
  return (
    <S.ModalWrapper $width="650px">
      <S.ModalHeader>
        <h2>{coupleInfo.name}</h2>
        <label>
          <Svg.WriteIcon size={24} />
        </label>
      </S.ModalHeader>
      <form>
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
                className={
                  isEdits.description
                    ? 'read-only--description'
                    : 'edit--description'
                }
                readOnly={!isEdits.description}
                onChange={editProfileDescription}
                ref={el => (infoRef.current[4] = el)}
              />
              <label onFocus={isEditDescription}>
                <Svg.WriteIcon size={16} />
              </label>
            </S.EditProfileDescription>
          </S.CoupleInfoGrid>
        </S.CoupleProfileInfoWrapper>
      </form>
    </S.ModalWrapper>
  );
}
