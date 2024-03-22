<script setup lang="ts">
import Footer from '~/components/common/footer.vue';
import NavBar from '~/components/common/navBar.vue';
</script>

<template>
    <div class="flex flex-col min-h-screen bg">
        <section>
            <NavBar />
        </section>
        <section class="flex-1">
            <slot />
        </section>
        <section>
            <Footer />
        </section>
    </div>
</template>

<style></style>