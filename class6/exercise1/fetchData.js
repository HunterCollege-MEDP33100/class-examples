/*
    Part 5: Fetch the JSON data using fetch()
*/

function getBookData() {
    fetch('books.json')
        // turn the json file into a javascript object
        .then(function(response) {
            return response.json();
        })
        // do stuff with the javascript object
        .then(data => {
            console.log(data);
            displayData(data);
        });
}

async function getBookDataAsync() {
    const response = await fetch('books.json');
    const data = await response.json();
    console.log(data);
    displayData(data);
}

function displayData(data) {
    for (let i = 0; i < data.length; i++) {
        const el = document.createElement('div');
        let book1;
        if (data[i].type === 'ebook') {
            book1 = new Ebook(el,  data[i].title, data[i].author, data[i].numOfCopies);
        } else {
            book1 = new Book(el, data[i].title, data[i].author, data[i].numOfCopies);
        }
        book1.displayBook();
        el.addEventListener('click', function() {
            book1.borrow();
        });
        libraryContainer.appendChild(el);
    }
}


getBookDataAsync();