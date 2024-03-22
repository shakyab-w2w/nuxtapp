<script setup>
import navData from "~/utilities/data/navData";
import logo from "./logo.vue";

definePageMeta({
    layout: "section-with-spacing",
});
</script>

<template>
    <nav class="flex flex-row items-center justify-around shadow-lg nav">
        <nuxt-link to="#" class="flex items-center">
            <logo />
        </nuxt-link>
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul
                class="flex flex-col p-4 mt-4 font-medium rounded-lg md:p-0 md:flex-row md:space-x-8 md:mt-0 md:border-0">
                <li v-for="navList in navData" :key="navList.name" class="flex items-center justify-center">
                    <nuxt-link
                        class="block py-2 pl-3 pr-4 capitalize rounded md:border-0 hover:text-primary-blue md:p-0 link"
                        :to="navList.route" aria-current="page">{{ navList.name }}
                    </nuxt-link>
                </li>
                <li>
                    <div class="overflow-hidden bg-white border border-gray-400 rounded-md">
                        <font-awesome-icon icon="magnifying-glass" class="mx-3" />
                        <input type="text" name="" id=""
                            class="px-0 py-1 mx-0 border-0 focus:border-0 focus:outline-none focus:ring-0 hover:border-0 active:border-0"
                            placeholder="Search for a template" />
                    </div>
                </li>

                <li class="flex items-center justify-center">
                    <nuxt-link to="login" class="link" style="border-radius: 0.25rem">
                        Login
                    </nuxt-link>
                </li>
                <li class="flex items-center justify-center">
                    <button class="px-5 py-1 text-white rounded bg-primary-red">
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
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}
</style>
