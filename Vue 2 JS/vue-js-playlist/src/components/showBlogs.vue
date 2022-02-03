<template>
<!-- We pass through a string of wide in single quotations to indicate that its a string value and not a property/method -->
<!-- Creating a custom directive and passing in a argument of column -->
    <div v-theme:column="'wide'" id="show-blogs">
        <h1>All Blog Articles</h1>
        <input class="search-field" type="text" v-model="search" placeholder="Enter Your Search...">
        <div v-for="(blog, index) in filteredBlogs" :key="blog.title" class="single-blog">
             <!-- blog = to the data object we defined below and the .title is what the URL returns when fetching the data successfully -->
             <!-- Referencing a filter -->
            <h2 v-rainbow>{{ blog.title | to-uppercase}}</h2>
            <p>{{ blog.body | snippet}}</p>
            <p>{{ index }}</p>
        </div>

    </div>
</template>

<script>

    export default {
        components: {
        },
        data () {
            return {
                // Creating an empty array called blogs to store the blogs in
                blogs: [],
                search: ""
            }
        },
        methods: {

        },
        created() {
            this.$http.get("https://jsonplaceholder.typicode.com/posts").then(function(data) {
                console.log(data);
                // Letting the first 10 items of the fetched data from the URL be stored in the data object called blogs 
                this.blogs = data.body.slice(0,10);
            });
        },
        computed: {
            filteredBlogs: function() {
                return this.blogs.filter((blog) => {
                    return blog.title.match(this.search);
                });
            }
        },
        // Registering a filter locally 
        filters: {
            // One way of defining a filter function
            // 'to-uppercase': function(value) {
            //     return value.toUpperCase();
            // }

            // Second way of defining a filter function
            toUppercase(value){
                 return value.toUpperCase();
            }
        },
        directives: {
            'rainbow': {
                bind(el){
                    var hexColor = "#" + Math.random().toString(16).slice(2,8);
                    el.style.color = hexColor;
                    console.log(hexColor);
                }
            }
        }
    }
</script>

<style>
    #show-blogs{
        max-width: 800px;
        margin: 0 auto;
    }
    .single-blog{
        padding: 20px;
        margin: 20px 0;
        box-sizing: border-box;
        background: #eee;
    }
    .search-field{
        width: 100%;
    }
</style>