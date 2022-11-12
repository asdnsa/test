<template>
  <div class="pr-5 pl-5 pb-5">
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
      <img class="w-full" :src="product.hdThumbnailUrl" :alt="product.name">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">
          {{product.name}}
        </div>
        <p class="text-gray-700 text-base">
          {{count}} x {{product.price}} руб. = {{product.price*count}} руб.
        </p>
      </div>
      <div class="px-6 pt-4 pb-2 flex items-center justify-between">
        <button @click="cart.removeItem(product)" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Удалить
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {IProduct} from "@/models/IProduct";
import {useCart} from "@/store/cart";
const cart = useCart();

interface Props {
  product:IProduct,
  count:number
}
const {product,count} = defineProps<Props>();
</script>

<style scoped>

</style>
