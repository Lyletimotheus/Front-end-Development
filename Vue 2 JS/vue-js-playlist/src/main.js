import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes'

// Initiliazing vue - resource to be used in the scripts 
Vue.use(VueResource);

Vue.use(VueRouter);
// import Ninjas from './Ninjas.vue'

// Using vue-router to create custom routes 
const router = new VueRouter({
  routes: Routes,
  // Changing the mode from hash to history to show user-friendly URL's --> check vue-router docs for more information on setting up routes using .htaccess file
  mode: 'history'
});

// Custom Directive
// Vue.directive("rainbow", {
//   bind(el){
    // el.style.color = "#" + Math.random().toString().slice(2.8);
//     el.style.color = "red";
//     console.log(el.style.color);
//   }
// });

Vue.directive('theme', {
  bind(el, binding) {
    if(binding.value == 'wide') {
      el.style.maxWidth= "1200px";
      console.log('Theme is set to wide');
    } else if(binding.value == "narrow") {
      el.style.maxWidth= "560px";
    }
    // Here we are referencing the argument of column we have created
    if(binding.arg == "column"){
      el.style.backgroundColor = "#ddd";
      el.style.padding = "20px";
    }
  }
});

// Filters
// Vue.filter('to-uppercase', function(value) {
//   return value.toUpperCase();
// });

Vue.filter('snippet', function(value) {
  return value.slice(0,100) + "...";
});

// export const bus = new Vue(); // Creating a new bus event in vue

// Nesting component for global use 
// Vue.component('ninjas', Ninjas);

Vue.config.productionTip = false

new Vue({
  // el: '#app',
  render: h => h(App),
  router: router
}).$mount('#app')
