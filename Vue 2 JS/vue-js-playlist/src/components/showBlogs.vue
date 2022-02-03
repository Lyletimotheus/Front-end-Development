<template>
<!-- We pass through a string of wide in single quotations to indicate that its a string value and not a property/method -->
    <div v-theme="'narrow'" id="show-blogs">
        <h1>All Blog Articles</h1>
        <div v-for="blog in blogs" :key="blog.id" class="single-blog">
             <!-- blog = to the data object we defined below and the .title is what the URL returns when fetching the data successfully -->
            <h2 v-rainbow>{{ blog.title }}</h2>
            <p>{{ blog.body }}</p>
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
                blogs: [] 
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
</style>