<script setup>
import sectionWithSpacing from '~/layouts/sectionWithSpacing.vue';
const year = new Date().getFullYear();
</script>
<template>
  <div class="bg-white">
    <!-- Main Content -->
    <sectionWithSpacing>
      <div class="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-2 grid-cols-2 gap-4">
        <!-- Logo Section -->
        <div class="lg:col-span-3 md:col-span-3 sm:col-span-2 col-span-2">
          <ul class="pl-0 list-none space-y-4">
            <nuxt-link to="#">
              <li><img src="" class="w-56" alt="Logo" />
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
        <div class="lg:col-span-2 md:col-span-2 sm:col-span-1 col-span-1">
          <p class="mb-4 text-lg font-bold footer-heading">Tools</p>
          <ul class="flex flex-col">
            <!-- Tools Options -->
            <nuxt-link to="" class="footer-li">
              <li>Link</li>
            </nuxt-link>
            <nuxt-link to="" class="footer-li">
              <li>
                Link
              </li>
            </nuxt-link>
            <nuxt-link to="" class="footer-li">
              <li>Link</li>
            </nuxt-link>
            <nuxt-link to="" class="footer-li">
              <li>Link</li>
            </nuxt-link>
            <nuxt-link to="" class="footer-li">
              <li>Link</li>
            </nuxt-link>
          </ul>
        </div>
        <div class="lg:col-span-2 md:col-span-2 sm:col-span-1 col-span-1">
          <p class="mb-4 text-lg font-bold footer-heading">Tools</p>
          <ul class="flex flex-col">
            <!-- Tools Options -->
            <nuxt-link to="" class="footer-li">
              <li>Link</li>
            </nuxt-link>
            <nuxt-link to="" class="footer-li">
              <li>
                Link
              </li>
            </nuxt-link>
            <nuxt-link to="" class="footer-li">
              <li>Link</li>
            </nuxt-link>
            <nuxt-link to="" class="footer-li">
              <li>Link</li>
            </nuxt-link>
            <nuxt-link to="" class="footer-li">
              <li>Link</li>
            </nuxt-link>
          </ul>
        </div>
        <div class="lg:col-span-2 md:col-span-2 sm:col-span-1 col-span-1">
          <p class="mb-4 text-lg font-bold footer-heading">Legal</p>
          <ul class="flex flex-col">
            <!-- Legal Options -->
            <nuxt-link to="" class="footer-li">
              <li>Terms & Conditions</li>
            </nuxt-link>
            <nuxt-link to="" class="footer-li">
              <li>FAQ</li>
            </nuxt-link>
            <nuxt-link to="" class="footer-li">
              <li>Cookies/Privacy Policy</li>
            </nuxt-link>
            <nuxt-link to="" class="footer-li">
              <li>Contact</li>
            </nuxt-link>
          </ul>
        </div>
        <div class="lg:col-span-3 md:col-span-3 sm:col-span-2 col-span-2 space-y-4">
          <p class=" text-lg">Subscribe to our <span class="font-bold">newsletter</span> </p>
          <div class="border rounded overflow-hidden flex items-center justify-center">
            <font-awesome-icon icon="envelope" class="px-4" />
            <input type="text" class="border-none flex-1">
          </div>
          <div class="flex items-center space-x-2 justify-between">
            <small>We promise you won't spam</small>
            <button class="py-1 px-5 border border-black rounded">Subscribe</button>
          </div>
          <div class="flex flex-col items-end">
            <p>Find us on social medias</p>
            <div class="text-black text-2xl">
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
