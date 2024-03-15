<script setup>
import { useCounterStore } from '~/store';

const store = useCounterStore();
console.log(store.name);

definePageMeta({
    layout: 'base-layout',
});

</script>
<template>
    <div>
        <p class="text-red-400 font-bold text-3xl">Home Page</p>
    </div>
</template>