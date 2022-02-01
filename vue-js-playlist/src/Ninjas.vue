<template>
  <div>
    <h1>List of ninjas</h1>
    <ul>
      <li v-for="(ninja) in ninjas" :key="ninja"> {{ninja}} </li>
    </ul>
  </div>
</template>

<script>

export default {
  data() {
    return {
      ninjas: ['Yoshi', 'Mario', 'Ryu']
    }
  }
}
</script>

// By adding scoped in the style tag, we make sure that we are only targetting the h1 on this page/component
<style scoped> 
  h1{
    color: green;
  }
</style>
