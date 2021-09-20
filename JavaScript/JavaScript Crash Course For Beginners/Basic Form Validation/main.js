// Grab elements from the DOM
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// Listen for a submit event on the form
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault(); // Here we are disabling the default action of a submit button
    // console.log(nameInput.value); Gets the value of the input field of the client

    // We don't want to submit the form until all the fields have been filled in 
    if(nameInput.value  === '' || emailInput.value === '') {
        msg.classList.add('error'); // Here we add a custom error class so that we can show the error message more clearly
        msg.innerHTML = "Please fill in all the fields before clicking on the submit button";
        // Here we want the error message to disappear after 3 seconds (3000 ms = 3 seconds )
        setTimeout(() => msg.remove(), 3000); 
    }else {
        const li = document.createElement('li');
        // Add a text node with the input values 
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

        // Now we have to append the li to the ul 
        userList.appendChild(li);

        // Clear the fields
        nameInput.value = '';
        emailInput.value = '';
    }
};

