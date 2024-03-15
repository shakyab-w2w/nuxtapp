<script setup lang="ts">
import { useAuthStore } from '~/store/auth/store';
import type { AuthCredentials } from '~/types/userTypes';

const authStore = useAuthStore()
const credentials = ref<AuthCredentials>({ email: '', password: '' })

definePageMeta({
  layout: 'auth-layout',
});

function submitForm() {
  authStore.login(credentials.value);
  console.log(authStore.isAuthenticated);
}
</script>
<template>
  <div class="w-full h-full flex items-center justify-center">
    <form @submit.prevent="submitForm" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-[30rem]">
      <div class="mb-4">
        <label for="email" class="block text-gray-700 text-sm font-bold mb-2">
          Email
        </label>
        <input type="email" v-model="credentials.email" placeholder="Email"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required />
      </div>
      <div class="mb-6">
        <label for="password" class="block text-gray-700 text-sm font-bold mb-2">
          Password
        </label>
        <input type="password" v-model="credentials.password" placeholder="Password"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          required />
      </div>
      <div class="flex items-center justify-between">
        <button type="submit"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Login
        </button>
      </div>
    </form>
  </div>
</template>