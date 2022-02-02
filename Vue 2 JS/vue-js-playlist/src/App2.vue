<template>
  <div id="app">
      <form-helper>
          <!-- So we can use the title data property because this is where we define the Vue instance -->
          <!-- <h2 slot="title">{{title}}</h2>
          <p slot="text">I am the paragraph text from the slot</p> -->

          <!-- The developer will add data in here -->
          <div slot="form-header">
              <h3>This is the title of the form</h3>
              <p>More information about the form</p>
          </div>
          <div slot="form-fields">
              <input type="text" placeholder="name" required>
              <input type="password" placeholder="password" required>
          </div>
          <div slot="form-controls">
              <button v-on:click="handleSubmit">Submit</button>
          </div>
      </form-helper>
  </div>      
</template>

<script>
import formHelper from './components/formHelper.vue';


export default {
    
  components: {
      'form-helper': formHelper
  },
  data() {
    return {
        // This dynamic data must be defined within the vue instance component 
        title: 'I am a dynamic slot title'
    }
  },
  methods: {
  }
}
</script>

<style>
</style>
