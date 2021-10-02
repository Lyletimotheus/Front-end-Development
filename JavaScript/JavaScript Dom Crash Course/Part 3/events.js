function buttonClick () {
    // console.log('Button Clicked');
}

function buttonClick2(e) {
    // document.getElementById('header-title').style.color = 'red';
    // document.querySelector('#main').textContent = 'New Information';
    // console.log(e);
    // Log the target 
    console.log(e.target);
    console.log(e.target.id);
    console.log(e.target.className);
    // Getting the list of the classes
    console.log(e.target.classList);
    var output = document.getElementById('output');
    output.innerHTML = '<h3>'+ e.target.id +'</h3>';

    // Here we find out what type of event we perform 
    console.log(e.type);
    // Here we can find the position of the mouse
    // console.log(e.clientX);
    // Getting the actual position of the elements position
    // console.log(e.offsetX);
    console.log(e.offsetY);

    // Client = browser and offset = actual element ---------- NB !! ------------------

    // Check to see if we are using the altkey, CRTL and SHIFT
    console.log(e.altKey);
    console.log(e.ctrlKey);
    console.log(e.shiftKey);

};


// var button = document.getElementById('button');
// var box = document.getElementById('box');

// button.addEventListener('click', runEvent);
// button.addEventListener('dblclick', runEvent);
// button.addEventListener('mousedown', runEvent);
// button.addEventListener('mouseup', runEvent);

// box.addEventListener('mouseenter', runEvent);
// box.addEventListener('mouseleave', runEvent);
// box.addEventListener('mouseover', runEvent); // Will fire off even with the children element of the parent element
// box.addEventListener('mouseout', runEvent);
// box.addEventListener('mousemove', runEvent);


var itemInput = document.querySelector('input[type="text"]');
var form = document.querySelector('form');
var select = document.querySelector('select');

// itemInput.addEventListener('keydown', runEvent);
// itemInput.addEventListener('keyup', runEvent);
// itemInput.addEventListener('keypress', runEvent);
// itemInput.addEventListener('focus', runEvent);
// itemInput.addEventListener('blur', runEvent);
// itemInput.addEventListener('cut', runEvent);
// itemInput.addEventListener('paste', runEvent);
// itemInput.addEventListener('input', runEvent);

select.addEventListener('change', runEvent);

// Submit Event
form.addEventListener('submit', runEvent);

function runEvent(e) {
    e.preventDefault();
    console.log('EVENT TYPE: '+ e.type);
    // output.innerHTML = '<h3>MouseX: '+e.offsetX+ '</h3><h3>MouseY: '+e.offsetY+'</h3>'
    // box.style.backgroundColor = "rgb("+e.offsetX+", "+e.offsetY+", 40)";
     console.log(e.target.value);
    // document.getElementById('output').innerHTML = '<h3>'+e.target.value+'</h3>';
}

// var button = document.getElementById('button').addEventListener('click', function() {
    // console.log('123');
// });
// We can replace the function with a named function, so that the function does not have to be inside the event Listener
// var button = document.getElementById('button').addEventListener('click', buttonClick2);



  