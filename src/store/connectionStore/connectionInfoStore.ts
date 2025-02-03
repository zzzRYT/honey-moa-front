import { create } from 'zustand';
import { ConnectionInfoStoreType } from './type';
import { GetMyInfoReturn } from '@/apis/user/type';

export const useConnectionInfoStore = create<ConnectionInfoStoreType>(set => ({
  connectionInfo: null,
  setConnectionInfo: (connectionInfo: GetMyInfoReturn) =>
    set({ connectionInfo }),
}));
