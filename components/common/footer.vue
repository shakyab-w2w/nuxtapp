<script setup lang="ts">
import SectionWithSpacing from '~/layouts/sectionWithSpacing.vue';
import logo from './logo.vue';
const year = new Date().getFullYear();
const company_name = 'Company Name';
</script>
<template>
  <div class="bg-white">
    <!-- Main Content -->
    <SectionWithSpacing>
      <div class="grid grid-cols-2 gap-4 lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-2">
        <!-- Logo Section -->
        <div class="col-span-2 lg:col-span-3 md:col-span-3 sm:col-span-2">
          <ul class="pl-0 space-y-4 list-none">
            <nuxt-link to="#">
              <li>
                <logo />
              </li>
            </nuxt-link>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae id esse officia vero culpa
              expedita velit accusamus, tempore libero cumque ex at ipsa excepturi quos aliquam nemo voluptate
              odit magni possimus eveniet dolorum natus a! Saepe ratione officia quod at obcaecati neque?</li>
            <li class="text-sm text-gray-500 dark:text-gray-400">
              All Rights Reserved <a href="#" class="hover:underline">{{ company_name }}</a> © {{ year }}
            </li>
          </ul>
        </div>

        <!-- Tools and Legal Sections -->
        <div class="col-span-1 lg:col-span-2 md:col-span-2 sm:col-span-1">
          <p class="mb-4 text-lg font-bold footer-heading">Tools</p>
          <ul class="flex flex-col">
            <!-- Tools Options -->
            <nuxt-link to="#" class="footer-li">
              <li>Link</li>
            </nuxt-link>
            <nuxt-link to="#" class="footer-li">
              <li>Link</li>
            </nuxt-link>
            <nuxt-link to="#" class="footer-li">
              <li>Link</li>
            </nuxt-link>
            <nuxt-link to="#" class="footer-li">
              <li>Link</li>
            </nuxt-link>
            <nuxt-link to="#" class="footer-li">
              <li>Link</li>
            </nuxt-link>
          </ul>
        </div>
        <div class="col-span-1 lg:col-span-2 md:col-span-2 sm:col-span-1">
          <p class="mb-4 text-lg font-bold footer-heading">Tools</p>
          <ul class="flex flex-col">
            <!-- Tools Options -->
            <nuxt-link to="#" class="footer-li">
              <li>Link</li>
            </nuxt-link>
            <nuxt-link to="#" class="footer-li">
              <li>Link</li>
            </nuxt-link>
            <nuxt-link to="#" class="footer-li">
              <li>Link</li>
            </nuxt-link>
            <nuxt-link to="#" class="footer-li">
              <li>Link</li>
            </nuxt-link>
            <nuxt-link to="#" class="footer-li">
              <li>Link</li>
            </nuxt-link>
          </ul>
        </div>
        <div class="col-span-1 lg:col-span-2 md:col-span-2 sm:col-span-1">
          <p class="mb-4 text-lg font-bold footer-heading">Legal</p>
          <ul class="flex flex-col">
            <!-- Legal Options -->
            <nuxt-link to="#" class="footer-li">
              <li>Terms & Conditions</li>
            </nuxt-link>
            <nuxt-link to="#" class="footer-li">
              <li>FAQ</li>
            </nuxt-link>
            <nuxt-link to="#" class="footer-li">
              <li>Cookies/Privacy Policy</li>
            </nuxt-link>
            <nuxt-link to="#" class="footer-li">
              <li>Contact</li>
            </nuxt-link>
          </ul>
        </div>
        <div class="col-span-2 space-y-4 lg:col-span-3 md:col-span-3 sm:col-span-2">
          <p class="text-lg ">Subscribe to our <span class="font-bold">newsletter</span> </p>
          <div class="flex items-center justify-center overflow-hidden border rounded">
            <font-awesome-icon icon="envelope" class="px-4" />
            <input type="text" class="flex-1 border-none">
          </div>
          <div class="flex items-center justify-between space-x-2">
            <small>We promise you won't spam</small>
            <button class="px-5 py-1 border border-black rounded">Subscribe</button>
          </div>
          <div class="flex flex-col items-end">
            <p>Find us on social medias</p>
            <div class="text-2xl text-black">
              <font-awesome-icon icon="facebook" class="px-2" />
              <font-awesome-icon icon="linkedin" class="px-2" />
              <font-awesome-icon icon="youtube" class="px-2" />
              <font-awesome-icon icon="twitter" class="px-2" />
              <font-awesome-icon icon="instagram" class="px-2" />
            </div>
          </div>
        </div>
      </div>
    </SectionWithSpacing>
    <!-- Footer -->
  </div>
</template>

<style scoped>
li {
  color: #231F20;
  font-style: normal;
  font-weight: 400;
  line-height: 188%;
}
</style>
