// Vue Instance to control the entire application
new Vue({
    el: "#vue-app", // Referencing the id in HTML
    data: {
        name: "Lyle", // Passing in data we can access from HTML 
        job: "Web Developer"
    },
    methods: {
        greet: function(time) {
            return "Good " + time + ", " + this.name;
        }
    },
});