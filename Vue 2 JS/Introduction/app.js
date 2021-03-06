// Vue Instance to control the entire application
new Vue({
    el: "#vue-app", // Referencing the id in HTML
    data: {
        name: "Lyle", // Passing in data we can access from HTML 
        job: "Web Developer",
        website: "https://www.ciphercode.co.za",
        websiteTag:"<a href='https://www.google.co.za'>Google SA</a>",
        // age: 32,
        x:0,
        y:0,
        // name: "",
        age: 20,
        a:0,
        b:0,
        available: true,
        nearby: false,
        error:false,
        success:false,
        characters: ['Mario', 'Luigi', 'Yoshi', 'Bower'],
        ninjas: [
            {name: 'Ryu', age: 24},
            {name: 'Yoshi', age: 35},
            {name: 'Ken', age: 55}
        ]
    },
    methods: {
        greet: function(time) {
            return "Good " + time + ", " + this.name;
        },
        add:function(inc) {
            this.age += inc;
        },
        subtract:function(dec) {
            this.age -= dec;
        },
        updateXY:function(event) {
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        click: function() {
            alert("You've clicked me!");
        },
        logName: function() {
        },
        logAge: function() {
            console.log("You've entered your age");
        },
    },
    computed: {
        addToA:function() {
            console.log("Add to A");
            return this.a + this.age;
        },
        addToB:function() {
            console.log("Add to B");
            return this.b + this.age;
        },
        compClasses:function() {
            return {
                available: this.available,
                nearby: this.nearby
            }
        }
    }
});