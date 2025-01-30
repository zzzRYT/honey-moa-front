export interface UserInfoStoreType {
  email: string;
  setEmail: (email: string) => void;
}

type AccessStatusType = 'public' | 'private';
export interface AccessAuthStoreType {
  status: AccessStatusType;
  setStatus: (status: AccessStatusType) => void;
}
