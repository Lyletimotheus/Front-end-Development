<template>
    <header>
        <h1 v-on:click="changeTitle">{{ title }}</h1>
    </header>
</template>

<script>
import {bus} from '../main';

export default {
    props:{
        title: {
            type: String
        }
    },
  data() {
    return {
        // title: "Vue Ninjas"
    }
  },
  methods: {
      changeTitle: function() {
        //   this.title = "Vue Wizards";
        // This will emit an event and send the changed title upwards to the parent 
        // this.$emit('changeTitle', 'Vue Wizards');
        this.title = "Vue Wizards 1";
        bus.$emit('titleChanged', 'Vue Wizards 2');
      }
  }
}
</script>

<style scoped>
    header{
        background: lightgreen;
        padding: 10px;
    }

    h1{
        color: #222;
        text-align: center;
    }
</style>
