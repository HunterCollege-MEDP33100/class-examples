// ADD YOUR CODE BELOW 

// 1. Start with an array of strings (ex: "grapes", "bread", "tea")
let todoItems = [
    // "grapes", "bread", "tea" 
    // add more items here
];

// 2. Create variables for each interactive DOM element
const addItemButton = document.getElementById('add-item-button');
// add more variables below
const list = document.getElementById('list');

const sortBtn = document.getElementById('sort');

const clearBtn = document.getElementById('clear');

let inputvalue = document.getElementById('text').value;

// 3. Write a function to display all items in the #list element
function updateList() {
    document.getElementById("list").innerHTML = ''
    // for (let i = 0; i < todoItems.length-1; i++){
    //     document.getElementById("list").innerHTML += todoItems[i].name +', '
    // }
    // document.getElementById("list").innerHTML += todoItems[todoItems.length-1].name
    for (let i = 0; i < todoItems.length-1; i++){
        const liElement = document.createElement('li');
        liElement.innerText = todoItems[i].name;
        liElement.id = todoItems[i].id;
        if (todoItems[i].completed) {
            liElement.classList.add('completed');
        }
        liElement.addEventListener('click', function() {
            console.log('clicked')
            updateItem(todoItems[i].id, todoItems[i].name);
        });
        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = 'x';
        deleteButton.addEventListener('click', function(e) {
            e.stopPropagation();
            console.log('delete');
            deleteItem(todoItems[i].id);
        })
        liElement.appendChild(deleteButton);
        list.appendChild(liElement);
    }
}



// 4. Handle adding a new item when the form is submitted
addItemButton.addEventListener('click', function () {
    let inputvalue = document.getElementById('text').value;
    // todoItems.push(inputvalue);
    // updateList()

    addItem(inputvalue);
});

console.log(todoItems)

// 5. Sort items alphabetically when sortBtn is clicked
sortBtn.addEventListener("click", () => {
    todoItems.sort();
    updateList()
});




// 6. Clear all items when clearBtn is clicked
clearBtn.addEventListener("click", () => {
    todoItems = [''];
    updateList();
});


async function getItems() {
    const response = await fetch('/api/items');
    const data = await response.json();
    console.log(data);
    todoItems = data;
    updateList();
}

getItems();

async function addItem(value) {
    const postData = {
        name: value,
        completed: false
    }
    const response = await fetch('/api/items', {
        method: 'POST', // Specify the HTTP method as POST
        headers: {
            'Content-Type': 'application/json' // Indicate that the body is JSON
        },
        body: JSON.stringify(postData) // Convert the data object to a JSON string
    });
    const data = await response.json();
    console.log(data);
    todoItems = data;
    updateList();
}

async function updateItem(id, name){
    console.log(id, name);
    const putData = {
        id: id,
        name: name,
        completed: true,
    }
    const response = await fetch('/api/items/' + id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json' // Indicate that the body is JSON
        },
        body: JSON.stringify(putData),
    })
    const data = await response.json();
    console.log(data);
    todoItems = data;
    updateList();
}

async function deleteItem(id) {
    const response = await fetch('/api/items/' + id, {
        method: 'DELETE',
    });
    const data = await response.json();
    console.log(data);
    todoItems = data;
    updateList();
}