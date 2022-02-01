<template>
  <div>
    <h1>{{title}}</h1>
    <ninjas></ninjas>
  </div>
</template>

<script>
// Nesting a variable locally
import Ninjas from './Ninjas.vue'

export default {
  components: { // Referencing the component locally 
    'ninjas': Ninjas
  },
  data() {
    return {
      title: 'Ninja App'
    }
  }
}
</script>

<style>
  h1{
    color: purple;
  }
</style>
