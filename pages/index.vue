<script setup>
import { useCounterStore } from '~/store';

const store = useCounterStore();
console.log(store.name);
</script>
<template>
    <div>
        <p class="text-red-400 font-bold text-3xl">index</p>
    </div>
</template>