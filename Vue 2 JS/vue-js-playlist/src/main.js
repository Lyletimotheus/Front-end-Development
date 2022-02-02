import Vue from 'vue'
import App from './App.vue'
// import Ninjas from './Ninjas.vue'

const bus = new Vue(); // Creating a new bus event in vue

// Nesting component for global use 
// Vue.component('ninjas', Ninjas);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
