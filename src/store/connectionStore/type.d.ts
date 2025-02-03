import { ConnectionInfo } from '@/apis/user/type';

export interface ConnectionInfoStoreType {
  connectionInfo: ConnectionInfo | null;
  setConnectionInfo: (connectionInfo: ConnectionInfo) => void;
}
