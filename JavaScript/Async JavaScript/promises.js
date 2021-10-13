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

function createPost(post) {
    return new Promise((resolve, reject) => {
        // Resolve = call resolve when you want to successfully resolve a promise
        // Reject = call reject when you are working with errors 
    });
    setTimeout(() => {
        posts.push(post);
    }, 2000)
}