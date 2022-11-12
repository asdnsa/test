<template>
  <div class="flex flex-col">
    <Header/>
    <div class="mx-auto flex pt-5 flex-col">
      <router-link to="/" class="mb-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Вернуться в магазин
      </router-link>
      <div class="flex-auto" v-if="cart.itemsCount">
        <CartItem @handleCheckout="handleCheckout" v-for="item in cart.items" :product="item.product" :count="item.count"/>
      </div>
      <div v-if="!cart.itemsCount" class="flex-auto text-center">
        Your cart is empty!
      </div>
      <div v-if="cart.itemsCount" class="px-6 pt-4 pb-2 flex items-center justify-between items-center">
        <div>
          Сумма: {{cart.sum}} руб.
        </div>
        <button @click="handleCheckout" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Оформить заказ
        </button>
      </div>
    </div>
  </div>
  <SuccessAlert name="Успешно!" :show="show" :title="successMessage" @close="handleCloseAlert"/>
</template>

<script lang="ts" setup>
import Header from "@/components/Layout/Header.vue"
import {useCart} from "@/store/cart";
import CartItem from "@/components/Cart/CartItem.vue";
import {ref} from "vue";
import {IProduct} from "@/models/IProduct";
import SuccessAlert from "@/components/Popup/SuccessAlert.vue";
const cart = useCart();
const name = ref("");
const successMessage = ref("");
const show = ref(false);
const handleCheckout = (product:IProduct) => {
  cart.clear();
  successMessage.value = `Заказ успешно оформлен!`;
  show.value = true;
  setTimeout(() => {
    show.value = false;
  },3000);
};
const handleCloseAlert = () => {
  show.value = false;
};
</script>

<style scoped>

</style>
