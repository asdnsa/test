<template>
<div class="flex flex-wrap">
  <Product v-for="product in products" :key="product.id" :product="product" @handleAddToCart="handleAddToCart"/>
  <SuccessAlert :name="name" :show="show" :title="successMessage" @close="handleCloseAlert"/>
</div>
</template>

<script setup lang="ts">
import {useCart} from "@/store/cart";
import {ref} from "vue";

import Product from "./Product.vue";
import SuccessAlert from "./Popup/SuccessAlert.vue"

import {IProduct} from "@/models/IProduct";

interface Props {
  products:IProduct[]
}

const {products} = defineProps<Props>()

const cart = useCart();
const name = ref("");


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
const show = ref(false);
const successMessage = ref("");
</script>

<style scoped>

</style>
