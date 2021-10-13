const posts = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post two'},
];

function getPosts() {
    setTimeout(() => {
        // fetch the posts from the posts array and put it out onto the page
        let output = "";
        posts.forEach((post) => {
            output += `<li>${post.title} and body: ${post.body}</li> `;
        });
        document.body.innerHTML = output;
    }, 1000); // Delay by 1 second 
}

function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000)
}

// Call the function to display the content on the page
// getPosts();
// We use a callback function so that the post is displayed in the DOM tree after two seconds
createPost({title: 'Post Three', body: 'This is post three'},getPosts);