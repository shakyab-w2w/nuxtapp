<script setup lang="ts">
const props = defineProps({
    class: {
        type: String,
        default: "w-32",
    },
    style: {
        type: String,
    },
}); 
</script>

<template lang="">
    <img src="/assets/image/logo.webp" :class="props.class" :style="props.style" alt="Logo" />
</template>
