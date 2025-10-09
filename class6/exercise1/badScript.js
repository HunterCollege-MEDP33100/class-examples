const library = document.querySelector('.library');

for (let i = 0; i < books.length; i++) {
    const bookElement = document.createElement('div');
    bookElement.classList.add('book');

    const titleElement = document.createElement('p');
    titleElement.classList.add('book_title');
    titleElement.innerText = books[i].title;

    const authorElement = document.createElement('p');
    authorElement.classList.add('book_author');
    authorElement.innerText = 'By ' + books[i].author;

    const numCopiesElement = document.createElement('p');
    numCopiesElement.classList.add('book_num_copies');
    numCopiesElement.innerText = 'Available copies: ' + books[i].numOfCopies;

    bookElement.appendChild(titleElement);
    bookElement.appendChild(authorElement);
    bookElement.appendChild(numCopiesElement);

    library.appendChild(bookElement);
}
