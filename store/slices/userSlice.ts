import { StateCreator } from 'zustand';

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface UserSlice {
  user: User | null;
  setUser: (user: User) => void;
  clearUser: () => void;
}

export const createUserSlice: StateCreator<UserSlice> = (set) => ({
  user: null,
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null }),
});
