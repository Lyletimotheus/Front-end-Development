var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form Submit Event
form.addEventListener('submit', addItem);
// Delete Event
itemList.addEventListener('click', removeItem);
// Filter Event
filter.addEventListener('keyup', filterItems);

// Add item function
function addItem(e) {
    // Prevent the default behaviour of the submit button
    e.preventDefault();
    // Get value of user input
    var newItem = document.getElementById('item').value;
    // Create a new li element
    var li = document.createElement('li');
    // Add a classname as well
    li.className = 'list-group-item';
    // Add textnode with input value
    li.appendChild(document.createTextNode(newItem));

    // Create a delete button element
    var deleteBtn = document.createElement('button');
    // Add classes to the delete button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    // Append textNode to the delete button
    deleteBtn.appendChild(document.createTextNode('X'));

    // Append the deletebtn to the li
    li.appendChild(deleteBtn);
    // Append li to the list
    itemList.appendChild(li);
}

// Remove a item when deleted
function removeItem(e) {
    // Check to see the button we click has a class of delete
    if(e.target.classList.contains('delete')) {
        // A confirm box pops up to confirm that the user wants to delete his/her choice
        if(confirm('Are you sure you want to delete this item?')) {
            // If we click yes,
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

// Filter Items function
function filterItems(e) {
    // convert text to lowercase
    var text = e.target.value.toLowerCase();
    // Get all li
    var items = itemList.getElementsByTagName('li');
    // Convert HTML Collection into a array
    Array.from(items).forEach(function(item) {
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        }else {
            item.style.display = 'none';
        }
    })

}