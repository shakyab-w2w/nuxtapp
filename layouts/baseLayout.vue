<script lang="ts" setup>
import Footer from '~/components/common/footer.vue';
import NavBar from '~/components/common/navBar.vue';
</script>

<template>
    <div class="min-h-screen flex flex-col bg">
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