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
        </div>
        <div class="pr-5 pl-5 pb-5 cursor-pointer">
          <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <img class="w-full" :src="catalog.product.hdThumbnailUrl" :alt="catalog.product.name">
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">
                {{catalog.product.name}}
              </div>
              <div class="font-medium text-left  mb-2" v-html="catalog.product.description">

              </div>
              <p class="text-gray-700 text-base">
                {{catalog.product.price}} руб.
              </p>
            </div>
            <div class="px-6 pt-4 pb-2">
              <button @click.stop="handleAddToCart(catalog.product)" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Купить
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <SuccessAlert :name="name" :show="show" :title="successMessage" @close="handleCloseAlert"/>
</template>

<script lang="ts" setup>
import SuccessAlert from "@/components/Popup/SuccessAlert"
import {onMounted, ref} from "vue";
import {useCatalog} from "@/store/catalog";
import {useRoute} from "vue-router";
import Header from "@/components/Layout/Header.vue"
import {IProduct} from "@/models/IProduct";
import {useCart} from "@/store/cart";
const loading = ref(true);
const route = useRoute();
const catalog = useCatalog();
const cart = useCart();
const name = ref('');
const successMessage = ref('');
const show = ref(false);

onMounted(async () => {
  await catalog.getProduct(+route.params.product_id);
  loading.value = false;
})
const handleAddToCart = (product:IProduct) => {
  cart.addItem(product);
  name.value = product.name;
  successMessage.value = 'Успешно добавлено в корзину!';
  show.value = true;
  setTimeout(() => {
    show.value = false;
  },3000);
};
const handleCloseAlert = () => {
  show.value = false;
}
</script>

<style scoped>

</style>
