/*
Gutendex API url: https://gutendex.com/books/
*/

function getBookData() {
    fetch('books.json')
        // turn the json file into a javascript object
        .then(function(response) {
            if (!response.ok) {
                throw new Error('Something went wrong with the request');
            }
            return response.json();
        })
        // do stuff with the javascript object
        .then(data => {
            console.log(data);
            displayData(data);
        })
        .catch(error => {
            console.error(error);
        })
}

async function getBookDataAsync() {
    try {
        const libraryContainer = document.querySelector('.library');
        libraryContainer.innerHTML = "Loading...";
        const response = await fetch('https://gutendex.com/bookss/');
        const data = await response.json();
        console.log(data.results);
        displayData(data.results);
    } catch (error) {
        console.error(error);
        const libraryContainer = document.querySelector('.library');
        libraryContainer.innerHTML = "Something went wrong";
    }
}

function displayData(data) {
    for (let i = 0; i < data.length; i++) {
        const el = document.createElement('div');
        let book1;
        book1 = new Book(el, data[i].title, data[i].authors, data[i].download_count);
        book1.displayBook();
        el.addEventListener('click', function() {
            book1.borrow();
        });
        libraryContainer.appendChild(el);
    }
}


getBookDataAsync();