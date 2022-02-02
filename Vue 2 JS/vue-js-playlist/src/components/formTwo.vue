<template>
  <div>
      <form-helper>
          <div slot="form-header">
              <h3>Form Two - Log in</h3>
              <p>Fill in this form to contact us</p>
          </div>
          <div slot="form-fields">
              <input type="text" placeholder="username" required>
              <input type="password" placeholder="password">
          </div>
          <div slot="form-controls">
              <button v-on:click="handleSubmit">Login</button>
          </div>
      </form-helper>
  </div>      
</template>

<script>
import FormHelper from './formHelper.vue'

export default {
  components: {
    FormHelper
  },
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>

<style scoped>
</style>
