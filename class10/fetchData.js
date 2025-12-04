/*
Gutendex API url: https://gutendex.com/books/
*/

function getBookData() {
    fetch('books.json')
        // turn the json file into a javascript object
        .then(function (response) {
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
    const libraryContainer = document.querySelector('.library');
    libraryContainer.innerHTML = "Loading...";

    // check if cached response has expired
    if (localStorage.getItem('bookDataExpiration')) {
        const currentDate = new Date();
        if (parseInt(localStorage.getItem('bookDataExpiration')) < currentDate.getTime()) {
            localStorage.removeItem('bookData');
            localStorage.removeItem('bookDateExpiration');
        }
    }

    let data = null;
    // if response is stored in localStorage, use that instead
    if (localStorage.getItem('bookData')) {
        data = JSON.parse(localStorage.getItem('bookData'));
        console.log(data);
    } else {
        try {

            const response = await fetch('https://gutendex.com/books/');
            data = await response.json();
            console.log(data.results);

            // store in localStorage
            localStorage.setItem('bookData', JSON.stringify(data));
            // add an expiration date to this cached response
            const currentDate = new Date();
            const expDate = currentDate.setDate(currentDate.getDate() + 1);
            localStorage.setItem('bookDataExpiration', expDate);

        } catch (error) {
            console.error(error);
            const libraryContainer = document.querySelector('.library');
            libraryContainer.innerHTML = "Something went wrong";
        }
    }

    displayData(data.results);
}

function displayData(data) {
    libraryContainer.innerHTML = '';
    for (let i = 0; i < data.length; i++) {
        const el = document.createElement('div');
        let book1;
        book1 = new Book(el, data[i].title, data[i].authors, data[i].download_count);
        book1.displayBook();
        el.addEventListener('click', function () {
            book1.borrow();
        });
        libraryContainer.appendChild(el);
    }
}


getBookDataAsync();