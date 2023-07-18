import Vue from "vue";
import { registerSW } from "virtual:pwa-register";
import vuetify from "./plugins/vuetify";
import App from "./App.vue";
const updateSW = registerSW({
  onNeedRefresh() {},
  onOfflineReady() {},
});
new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
