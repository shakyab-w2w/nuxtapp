// store/auth/index.ts
import { defineStore } from 'pinia';
import { actions } from './actions';
import type { User } from '~/types/userTypes';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as User | null,
    token: '',
  }),
  getters: {
    isAuthenticated: (state) => !!state.user,
    getUser: (state) => state.user,
  },
  actions,
});
