<template>
  <div class="pr-5 pl-5 pb-5 cursor-pointer" @click="openDetail">
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
    <img class="w-full" :src="product.hdThumbnailUrl" :alt="product.name">
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">
        {{product.name}}
      </div>
      <p class="text-gray-700 text-base">
        {{product.price}} руб.
      </p>
    </div>
    <div class="px-6 pt-4 pb-2">
      <button @click.stop="handleAddToCart(product)" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Купить
      </button>
    </div>
  </div>
  </div>
</template>

<script lang="ts" setup>
import {IProduct} from "@/models/IProduct";
import router from "@/router";
interface Props {
  product:IProduct
}
const {product} = defineProps<Props>();
const emit = defineEmits(['handleAddToCart']);
const handleAddToCart = (product:IProduct) => {
  emit('handleAddToCart',product);
}
const openDetail = () => {
  router.push(`/product/${product.id}`);
}
</script>

<style scoped>

</style>
