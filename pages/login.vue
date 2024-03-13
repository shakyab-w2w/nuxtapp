<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '~/store/auth/store';
import type { AuthCredentials } from '~/types/userTypes';

const authStore = useAuthStore()
const credentials = ref<AuthCredentials>({ email: '', password: '' })

function submitForm() {
    authStore.login(credentials.value);
    console.log(authStore.isAuthenticated);
}
</script>
<template>
    <form @submit.prevent="submitForm">
        <input type="email" v-model="credentials.email" placeholder="Email" required />
        <input type="password" v-model="credentials.password" placeholder="Password" required />
        <button type="submit">Login</button>
    </form>
</template>
