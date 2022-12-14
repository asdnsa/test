import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/scss/index.css';
import { createPinia } from 'pinia'

const app = createApp(App);
const store = createPinia();

app.use(store);
app.use(router);

app.mount('#app')
