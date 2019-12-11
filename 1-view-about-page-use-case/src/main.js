import Vue from "vue";

// Use-case 1: Import vue-router dependency
import VueRouter from "vue-router";

import Home from "./components/home/Home.vue";
import About from "./components/about/About.vue";
import App from "./App.vue";

// Use-case 1: Add vue-router dependency
Vue.use(VueRouter);

// Use-case 1: Configure the routes
const routes = [{
  path: "/",
  component: Home
},
{
  path: "/about",
  component: About
}];

// Use-case 1: Create a new instance of the VueRouter object
const router = new VueRouter({
  routes,
  mode: "history"
});

Vue.config.productionTip = false;

// Use-case 1: Pass the router object to the Vue object
new Vue({
  render: h => h(App),
  router
}).$mount("#app");
