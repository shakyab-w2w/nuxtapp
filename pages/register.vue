<script setup lang="ts">
// import { useAuthStore } from '~/store/auth/store';
import type { User } from '~/types/userTypes';

// const authStore = useAuthStore()
const credentials = ref<User>({ email: '', name: '' });

definePageMeta({
  layout: 'auth-layout',
});

function submitForm() {

}
</script>
<template>
  <form @submit.prevent="submitForm" class="w-full">
    <div class="mb-4">
      <label for="name" class="block mb-2 text-sm font-bold text-gray-700">
        Full Name
      </label>
      <input type="text" v-model="credentials.name" placeholder="Name"
        class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
        required />
    </div>
    <div class="mb-6">
      <label for="email" class="block mb-2 text-sm font-bold text-gray-700">
        Email
      </label>
      <input type="email" v-model="credentials.email" placeholder="Email"
        class="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
        required />
    </div>
    <div class="flex flex-col items-center justify-between">
      <button type="submit"
        class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline">
        Register
      </button>
      <small class="py-2">Already registered?</small>
      <nuxt-link to="login" class="font-thin underline">Login</nuxt-link>
    </div>
  </form>
</template>