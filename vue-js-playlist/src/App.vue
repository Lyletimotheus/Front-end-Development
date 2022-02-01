<template>
  <div>
    <app-header></app-header>
    <p>This is the body of our application</p>
    <app-body></app-body>
    <app-footer></app-footer>
  </div>      
</template>

<script>
// Nesting a variable locally
// import Ninjas from './Ninjas.vue'

// Importing the header component
// import Header from '../src/components/Header.vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Ninjas from './components/Ninjas.vue';




export default {
  // components: { // Referencing the component locally 
  //   'ninjas': Ninjas
  // },
  components: {
    'app-header' : Header,
    'app-footer' : Footer,
    'app-body' : Ninjas
  },
  data() {
    return {

    }
  }
}
</script>

<style>
</style>
