<script setup>

import navData from "~/utilities/data/navData";

definePageMeta({
    layout: "section-with-spacing",
});

</script>

<template>
    <nav class="nav">
        <Link href="#" class="flex items-center">
        <img src="" class="mr-3 w-48" alt="Logo" />
        </Link>
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul
                class="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
                <li v-for="navList in navData" :key="navList.name" class="flex items-center justify-center">
                    <nuxt-link
                        class="block py-2 pl-3 pr-4 rounded md:border-0 hover:text-primary-blue md:p-0 capitalize link"
                        :to="navList.route" aria-current="page">{{ navList.name }}
                    </nuxt-link>
                </li>
                <li>
                    <div class="border rounded-md overflow-hidden bg-white border-gray-400">
                        <font-awesome-icon icon="magnifying-glass" class="mx-3" />
                        <input type="text" name="" id=""
                            class="border-0 focus:border-0 focus:outline-none focus:ring-0 hover:border-0 active:border-0 py-1 mx-0 px-0"
                            placeholder="Search for a template" />
                    </div>
                </li>

                <li class="flex items-center justify-center">
                    <button @click="() => { }" class="link" style="border-radius: 0.25rem">
                        Login
                    </button>
                </li>
                <li class="flex items-center justify-center">
                    <button class="bg-primary-red text-white rounded px-5 py-1">
                        Try for free
                    </button>
                </li>
            </ul>
        </div>
    </nav>
</template>

<style scoped>
.link {
    color: #273052;
    /* font-size: 1rem; */
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}
</style>
