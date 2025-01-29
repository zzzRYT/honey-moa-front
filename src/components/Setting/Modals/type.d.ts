export interface CurrentProfileInfoType {
  editName: string;
  editImage: File;
  blobImage: string;
}

export interface CoupleProfileInfoType {
  name: string;
  description: string;
  bgImage: string;
  myProfile: {
    name: string;
    image: string;
  };
  partnerProfile: {
    name: string;
    image: string;
  };
  startDate: string;
}

export type EditProfileInputOnFocusType = React.RefObject<HTMLInputElement>;
