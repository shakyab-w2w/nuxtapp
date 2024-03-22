<script setup>
import SectionWithSpacing from '~/layouts/sectionWithSpacing.vue';
import { useCounterStore } from '~/store';

const store = useCounterStore();
console.log(store.name);

definePageMeta({
    layout: 'base-layout',
});

</script>
<template>
    <SectionWithSpacing>
        <p class="text-3xl font-bold text-red-400">Home Page</p>
    </SectionWithSpacing>
</template>