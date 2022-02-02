<template>
    <div id="add-blog">
        <h2>Add a new blog post</h2>
        <form action="" v-if="!submitted">
            <label>Blog Title: </label>
            <!-- Putting .lazy on the v-model to only update the preview when we press tab -->
            <input type="text" v-model.lazy="blog.title" required>
            <label>Blog Content: </label>
            <textarea v-model="blog.content"></textarea>
            <div id="checkboxes">
                <label for="">Ninjas</label>
                <!-- The value attribute will be added to the empty array under blog categories -->
                <input type="checkbox" value="ninjas" v-model="blog.categories"/>
                <label for="">Wizards</label>
                <input type="checkbox" value="wizards" v-model="blog.categories"/>
                <label for="">Mario</label>
                <input type="checkbox" value="mario" v-model="blog.categories"/>
                <label for="">Cheese</label>
                <input type="checkbox" value="cheese" v-model="blog.categories"/>
            </div>
            <label for="">Author</label>
            <select v-model="blog.author">
                <option v-for="author in authors" :key="author.id">{{ author }}</option>
            </select>
            <button v-on:click.prevent="post">Add Blog</button>
        </form>
        <!-- Check to see if the form is submitted / if it is true-->
        <div v-if="submitted">
            <h3>Thank you for adding your blog post.</h3>
        </div>
        <div id="preview">
            <h3>Preview Blog</h3>
            <p>Blog Title:{{ blog.title }}</p>
            <p>Blog Content:</p>
            <p>{{ blog.content }}</p>
            <p>Blog Categories:</p>
            <ul>
                <li v-for="category in blog.categories" :key="category">{{ category }}</li>
            </ul>
            <p>Author: {{ blog.author }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        components: {
        },
        data () {
            return {
                blog: {
                    title: "",
                    content: "",
                    categories: [],
                    author: ""
                },
                authors: ['Lyle', 'Carlos', 'Justine', 'Rachelle', 'Jack', 'Brent', 'Caserdity'],
                submitted: false,
            }
        },
        methods: {
            post: function() {
                    this.$http.post("https://jsonplaceholder.typicode.com/posts", {
                        title: this.blog.title,
                        body: this.blog.content,
                        userId: 1,
                    }).then(function(data){
                        console.log(data);
                        this.submitted = true;
                    });
                }
            }
        }
</script>

<style>
#add-blog *{
    box-sizing: border-box;
}
#add-blog{
    margin: 20px auto;
    max-width: 500px;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: 8px;
}
#preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}
h3{
    margin-top: 10px;
}

#checkboxes{
    display: inline-block;
    margin-right: 10px;
}

#checkboxes label {
    display: inline-block;
}
</style>