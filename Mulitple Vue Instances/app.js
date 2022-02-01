var one = new Vue({
    el: '#vue-app-one',
    data: {
        title: 'Vue App One'
    },
    methods: {

    },
    computed: {
        greet: function() {
            return "Hello from app 1";
        }

    }
});

var two = new Vue({
    el: '#vue-app-two',
    data: {
        title: 'Vue App Two'
    },
    methods: {
        changeTitle:function () {
            one.title = "Title changed"; // Accessing the title of vue instance one 
        }

    },
    computed: {
        greet: function() {
            return "Hello from app 2";
        }
    }
});

two.title = "Title changes from outside of the view instance"; // This will execute immediately once the file loads 