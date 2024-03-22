<script lang="ts" setup>
import logo from '~/components/common/logo.vue';
</script>

<template>
  <div class="flex items-center justify-center min-h-screen">
    <div class="flex flex-col items-center justify-center bg-white shadow-xl rounded px-8 pt-6 pb-8 mb-4 w-[30rem]">
      <nuxt-link to="/">
        <logo class="w-24" />
      </nuxt-link>

      <slot />
    </div>
  </div>
</template>
<style></style>