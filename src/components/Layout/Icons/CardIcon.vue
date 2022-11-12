<template>
  <div class="relative cursor-pointer" @click="goToCart">
    <svg class="stroke-1 hover:stroke-2 w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
    </svg>
    <div class="w-5 h-5 absolute flex cart__icon items-center rounded-full justify-center bg-amber-100 hover:bg-amber-200">
      {{cart.itemsCount}}
    </div>
  </div>
</template>

<script type="ts" setup>
import {useCart} from "@/store/cart";
import router from "@/router";
const cart = useCart();
const goToCart = () => {
  router.push({name:'Cart'});
}
</script>

<style scoped lang="scss">
.cart__icon{
  left:15px;
  top:-15px;
}
</style>
