<template>
  <div>
    <app-header v-bind:title="title" v-on:changeTitle="updateTitle($event)"></app-header>
    <p>This is the body of our application</p>
    <!-- Using v-bind to bind to the ninjas prop (in data object) defined in Ninjas.Vue-->
    <app-body v-bind:ninjas="ninjas"></app-body> 
    <app-footer v-bind:title="title"></app-footer>
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
         ninjas: [
                {name: 'Ryu', speciality: 'Vue Components', show: false},
                {name: 'Crystal', speciality: 'HTML Wizardry', show: false},
                {name: 'Hitoshi', speciality: 'Click Events', show: false},
                {name: 'Tango', speciality: 'Conditionals', show: false},
                {name: 'Kami', speciality: 'Webpack', show: false},
                {name: 'Yoshi', speciality: 'Data Diggin', show: false}
            ],
            title: "Vue Ninjas",
    }
  },
  methods: {
    updateTitle: function(updatedTitle) {
      this.title = updatedTitle;
    }
  }
}
</script>

<style>
</style>
