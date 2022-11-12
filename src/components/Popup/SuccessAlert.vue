<template>
  <div v-if="show" id="alert-additional-content-3" class="fixed w-96 top-0 left-auto p-4 border border-green-300 rounded-lg bg-green-50 dark:bg-green-200" role="alert">
    <div class="flex flex-col items-center">
      <h3 class="text-lg font-medium text-green-700 dark:text-green-800">{{ name }}</h3>
      <div class="mt-2 mb-4 text-green-700 dark:text-green-800">
        {{ title }}
      </div>
      <div class="flex">
        <button @click="handleClose"  type="button" class="text-green-700 bg-transparent border border-green-700 hover:bg-green-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:border-green-800 dark:text-green-800 dark:hover:text-white" data-dismiss-target="#alert-additional-content-3" aria-label="Close">
          Закрыть
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  name:string,
  title:string,
  show:boolean
}
const {name,title,show} = defineProps<Props>();
const emit = defineEmits(['close']);
const handleClose = () => {
  emit('close');
}

</script>

<style scoped>
.left-auto{
  left:calc(50% - 12rem);
}
</style>
