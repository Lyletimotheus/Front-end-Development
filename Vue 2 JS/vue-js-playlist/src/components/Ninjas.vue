<template>
    <div id="ninjas">
        <ul>
            <li v-for="(ninja) in ninjas" v-on:click="ninja.show = !ninja.show" :key="ninja.name">
                <h2>{{ ninja.name }}</h2>
                <h3 v-show="ninja.show">{{ninja.speciality}}</h3>
            </li>
        </ul>
        <button v-on:click="test">Click Me</button>
        <button v-on:click="deleteNinja">Delete Ninja</button>
    </div>
</template>

<script>

export default {
    // Below we are receiving a prop from the App.vue file and adding validation of type array and making it required
    props: {
        ninjas: {
            type: Array,
            required: true
        }
    },
  data() {
    return {

    }
  },
   methods: {
        test:function() 
        {
            return console.log(this.ninjas[0].name);
        },
        deleteNinja: function() {
            this.ninjas.pop();
        }
    },
}
</script>

<style scoped>
#ninjas{
    width: 100%;
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
    box-sizing: border-box;
}
ul{
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
}
li{
    flex-grow: 1;
    flex-basis: 300px;
    text-align: center;
    padding: 30px;
    border: 1px solid #222;
    margin: 10px;
}
</style>
