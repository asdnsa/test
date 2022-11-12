<template>
  <div class="flex flex-col" v-if="!loading">
    <Header/>
    <div class="mx-auto flex bg-gray-100 pt-5">
      <div class="flex-auto flex flex-col">
        <div class="flex justify-between items-center p-5">
          <div>
            <router-link to="/" class="mb-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Вернуться на главную
            </router-link>
          </div>
          <div class="font-bold">
            Категория: {{catalog.category.name}}
          </div>
        </div>
        <ProductList :products="catalog.items"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {useCatalog} from "@/store/catalog";
import {onMounted,ref} from "vue";
import {useRoute} from "vue-router";
import ProductList from "@/components/ProductList.vue";
import Header from "@/components/Layout/Header.vue"


const catalog = useCatalog();
const route = useRoute();
const loading = ref(true);
onMounted(async () => {
  await catalog.getCategory(+route.params.category_id);
  await catalog.getProductsFromCategory(catalog.category.id);
  loading.value = false;
});
</script>

<style scoped>

</style>
