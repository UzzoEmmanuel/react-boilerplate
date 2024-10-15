//  exemple of zustand store
import { create } from 'zustand';
import { StoreState, User } from '../types/store/store';

export const useStore = create<StoreState>((set) => ({
  count: 0,
  users: [],

  increaseCount: () => set((state) => ({ count: state.count + 1 })),

  addUser: (user: User) => set((state) => ({ users: [...state.users, user] })),
}));
