import { createStore } from 'zustand';
import { UserInfoStoreType } from './type';

export const useUserInfoStore = createStore<UserInfoStoreType>(set => ({
  email: '',
  setEmail: (email: string) => set({ email }),
}));
