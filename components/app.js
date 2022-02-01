// A component is a piece of reusable code or template that can be used in other vue instances 

Vue.component('greeting', {
    template:'<p>Hey there, I am {{ name }}. <button v-on:click="changeName">Change name</button></p>',
    data: function() {
        return {                // We return a object so that we don't have it override other sections where the component is used 
            name: 'Yoshi'
        }
    },
    methods: {
        changeName: function() {
            this.name = "Mario";
        }
    },
});

new Vue ({
    el: '#vue-app-one'
});

new Vue ({
    el: '#vue-app-two'
});