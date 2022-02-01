import Vue from 'vue'
import App from './App.vue'
// import Ninjas from './Ninjas.vue'

// Nesting component for global use 
// Vue.component('ninjas', Ninjas);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
