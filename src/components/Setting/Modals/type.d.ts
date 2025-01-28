export interface currentProfileInfoType {
  editName: string;
  editImage: File;
  blobImage: string;
}

export interface CheckIsEdit {
  bgImage: boolean;
  myProfile: boolean;
  partnerProfile: boolean;
  startDate: boolean;
  description: boolean;
}
