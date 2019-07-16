import Vue from "vue";
import Buefy from "buefy";
import "buefy/dist/buefy.css";
import "./font.scss";
import App from "./App.vue";
import "./registerServiceWorker";

Vue.use(Buefy);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
