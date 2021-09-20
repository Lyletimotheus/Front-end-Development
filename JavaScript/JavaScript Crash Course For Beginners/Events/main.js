const btn = document.querySelector('.btn');

btn.addEventListener('click', (e) => {
    e.preventDefault(); // Here we add this method on to prevent the submit button default behaviour from occurring
    //console.log(e.target.className);  This will give us the event and where it is occurring 
    document.querySelector('#my-form').style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark'); // Here we assign a CSS class onto the body element once the button is clicked
    document.querySelector('.items').lastElementChild.innerHTML = '<h1>Bye Bye</h1>';
});