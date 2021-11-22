import { createApp } from 'vue';
import axios from 'axios';

import App from './App.vue';
import { store, key } from './store/store';
import router from "./router";

const app = createApp(App)
  .use(store, key)
  .use(router);

app.mount('#app');
