import { create } from 'zustand';
import { ConnectionInfoStoreType } from './type';
import { ConnectionInfo } from '@/apis/user/type';

export const useConnectionInfoStore = create<ConnectionInfoStoreType>(set => ({
  connectionInfo: null,
  setConnectionInfo: (connectionInfo: ConnectionInfo) =>
    set({ connectionInfo }),
}));
