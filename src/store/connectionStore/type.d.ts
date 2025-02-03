import { GetMyInfoReturn } from '@/apis/user/type';

export interface ConnectionInfoStoreType {
  connectionInfo: GetMyInfoReturn | null;
  setConnectionInfo: (connectionInfo: GetMyInfoReturn) => void;
}
