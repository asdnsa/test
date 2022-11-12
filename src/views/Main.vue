<template>
  <div class="flex flex-col" v-if="!loading">
    <Header/>
    <div class="mx-auto flex bg-gray-100 pt-5">
      <div class="flex-none sticky">
        <CategoryList :categories="catalog.categories"/>
      </div>
      <div class="flex-auto">
        <ProductList :products="catalog.items"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ProductList from "@/components/ProductList.vue";
import CategoryList from "@/components/CategoryList.vue";
import Header from "@/components/Layout/Header.vue"
import {onMounted,ref} from "vue";

import {useCatalog} from "@/store/catalog";
const catalog = useCatalog();
const loading = ref(true);
onMounted(async () => {
  await catalog.getCategories();
  await catalog.getItems();
  loading.value = false;
});
</script>

<style scoped lang="scss">
</style>
