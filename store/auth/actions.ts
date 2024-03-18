import { authApi } from "~/utilities/api/auth";
import { useAuthStore } from "./store";
import type { AuthCredentials } from '~/types/userTypes';

export const actions = {
  async login(credentials: AuthCredentials) {
    const { user, token } = await authApi.login(credentials);
    const store = useAuthStore();
    store.user = user;
    store.token = token;
  },
  async register(credentials: AuthCredentials) {
    const { user, token } = await authApi.register(credentials);
    const store = useAuthStore();
    store.user = user;
    store.token = token;
  },
  logout() {
    const store = useAuthStore();
    store.user = null;
    store.token = '';
  },
};
