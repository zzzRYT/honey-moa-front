export interface CurrentProfileInfoType {
  editName: string;
  editImage: File;
  blobImage: string;
}

type ProfileInfo = {
  name: string;
  image: File;
  blobImage: string;
};

export interface CoupleProfileInfoType {
  name: string;
  description: string;
  bgImage: File;
  blobImage: string;
  myProfile: ProfileInfo;
  partnerProfile: ProfileInfo;
  startDate: string;
}

export type EditProfileInputOnFocusType = React.RefObject<HTMLInputElement>;

export interface EditProfileImageOverlayComponentProps {
  children: React.ReactNode;
  htmlForId: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}
