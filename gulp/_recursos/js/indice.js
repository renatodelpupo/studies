
// Get elements
let body = document.querySelector('body');

// Create elements

let span = document.createElement('span'); // Create span tag
span.appendChild(document.createTextNode('Create new item'));
span.style.cursor = 'pointer';
body.appendChild(span); // Append the span tag to body

let list = document.createElement('ul'); // Create a list tag
body.appendChild(list); // Append the list tag to body


// Initial list
let listItems = [1, 2];
buildList();

// Add new items
document.querySelector('span').addEventListener('click', function() {

  // Add new item to the array with the value length + 1
  listItems.push(listItems.length + 1)

  list.innerHTML = ""; // Erase list
  buildList(); // Build new list

  console.clear();
  console.log(listItems)
})

// Function that build list
function buildList() {
  listItems.forEach(function(currentItem) {

    let listItem = document.createElement('li');
    document.querySelector('ul').appendChild(listItem)
    listItem.appendChild(document.createTextNode(currentItem))

  })
}
