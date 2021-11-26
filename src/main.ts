import { createApp } from 'vue';
import Vue3TouchEvents from 'vue3-touch-events';

import App from "./App.vue";
import router from "./router";

createApp(App)
  .use(router)
  .use(Vue3TouchEvents)
  .mount("#app");
