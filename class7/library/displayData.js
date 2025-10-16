const libraryContainer = document.querySelector('.library');
/*
    Part 1: Classes
    Create a Book class that has the following properties:
    - element (HTMLElement)
    - title (string)
    - author (string)
    - numCopies (number, the number of copies available)

    Add the following methods:
    - displayBook():
        - Generates HTML to represent the book
*/

class Book {
    constructor(element, title, author, numCopies) {
        // console.log('Creating a book object...', title, author, numCopies, element);
        this.element = element;
        this.title = title;
        this.author = author;
        this.numCopies = numCopies;

        this.element.classList.add('book');
    }

    displayBook() {
        this.element.innerHTML = '';
    
        const titleEl = document.createElement('p');
        titleEl.classList.add('book_title');
        titleEl.innerText = this.title;
        this.element.appendChild(titleEl);
        // console.log(titleEl);

        const authorEl = document.createElement('p');
        authorEl.classList.add('book_author');
        authorEl.innerText = this.author;
        this.element.appendChild(authorEl);
        // console.log(authorEl);

        if (this.numCopies) {
            const numCopiesEl = document.createElement('p');
            numCopiesEl.classList.add('book_num_copies');
            numCopiesEl.innerText = this.numCopies;
            // console.log(numCopiesEl);
             this.element.appendChild(numCopiesEl);
        }
        // console.log(bookEl);
    }

    /*
    Add a function borrow():
        - Decreases the number of copies by 1 and prints how many copies are left.
        - If there are no more copies left, add a class "disabled" to the element.
    */
    borrow() {
        this.numCopies--;
        this.displayBook();
        if (this.numCopies < 1) {
            this.element.classList.add('disabled');
        }
    }
}

/*
    Create a new class Textbook which extends Book.
*/

class Textbook extends Book {
    constructor(element, title, author, numCopies) {
        super(element, title, author, numCopies);
        this.element.classList.add('textbook');
    }
}

// const textbookEl = document.createElement('div');
// const textbook1 = new Textbook(textbookEl, 'textbook title', 'textbook auithor', 10);
// textbook1.displayBook();
// textbookEl.addEventListener('click', function() {
//     textbook1.borrow();
// });
// libraryContainer.appendChild(textbookEl);



/*
    Create a new class Ebook which extends Book, and displays only the title and author.
*/
class Ebook extends Book {
    constructor(element, title, author) {
        super(element, title, author);
        this.element.classList.add('ebook');
    }
}

// const ebookEl = document.createElement('div');
// const ebook = new Ebook(ebookEl, 'ebook title', 'ebook auithor');
// ebook.displayBook();
// libraryContainer.appendChild(ebookEl);


// for (let i = 0; i < books.length; i++) {
//     const el = document.createElement('div');
//     let book1;
//     if (books[i].type === 'ebook') {
//         book1 = new Ebook(el,  books[i].title, books[i].author, books[i].numOfCopies);
//     } else {
//         book1 = new Book(el, books[i].title, books[i].author, books[i].numOfCopies);
//     }
//     book1.displayBook();
//     el.addEventListener('click', function() {
//         book1.borrow();
//     });
//     libraryContainer.appendChild(el);
// }