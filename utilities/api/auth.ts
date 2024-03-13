import type { User,AuthCredentials } from "~/types/userTypes";

export const authApi = {
  async login(credentials: AuthCredentials): Promise<{ user: User; token: string }> {
    console.log('Performing login with:', credentials);
    return Promise.resolve({
      user: { id: '1', name: 'John Doe', email: credentials.email },
      token: 'fake-jwt-token',
    });
  },
  async register(credentials: AuthCredentials): Promise<{ user: User; token: string }> {
    console.log('Performing registration with:', credentials);
    return Promise.resolve({
      user: { id: '2', name: 'Jane Smith', email: credentials.email },
      token: 'fake-jwt-token',
    });
  },
};
