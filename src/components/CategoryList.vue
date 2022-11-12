<template>
  <aside class="w-64" aria-label="Sidebar">
    <div class="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
      <ul class="space-y-2">
        <li>
          <router-link :to="`/category/${category.id}`" v-for="category in categories" :key="category.id" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <img class="w-6 h-6" :src="category.thumbnailUrl" alt="">
            <span class="ml-3">{{ category.name }}</span>
          </router-link>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script lang="ts" setup>
import {ICategory} from "@/models/ICategory";

interface Props {
  categories:ICategory[]
};
const {categories} = defineProps<Props>()
</script>

<style scoped>

</style>
