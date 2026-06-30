let myLibrary = [];

function Book(title, author, pages, id, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.id = id;
    this.status = status;
}

function addBookToLibrary(title, author, pages, status) {
    const book = new Book(title, author, pages, crypto.randomUUID(), status);
    return myLibrary.push(book);
}

    Book.prototype.editState = function() {
        this.status = !this.status;
    }


    const container = document.querySelector('.container');
  
   container.addEventListener('click', (event) => {
    if(event.target.classList.contains('remove-button')) {
  
    const id1 = event.target.dataset.id;
    myLibrary = myLibrary.filter((book) => {
        return book.id !== id1;
    })
    console.log('does it work');
  
    displayBooks();  
    } else if (event.target.classList.contains('toggle-button')){
        const id2 = event.target.dataset.id;
        const targetBook = myLibrary.find((book) => {
            return book.id === id2;
        })
        targetBook.editState();
        displayBooks();
    }
   })

function displayBooks() {
    container.innerHTML = '';
    for(let book of myLibrary) { 

const card = document.createElement('div');

const toggleBtn = document.createElement('button');
toggleBtn.dataset.id = book.id;
toggleBtn.classList.add('toggle-button');
toggleBtn.textContent = 'edit state';

const remBtn = document.createElement('button');
remBtn.dataset.id = book.id
remBtn.classList.add('remove-button');
   remBtn.textContent = 'Remove book';
   
   
        console.log(book.title);
        console.log(book.author);
        console.log(book.pages);
        console.log(book.id);
        console.log(book.status);

        const h3 = document.createElement('h3');
        h3.textContent = book.title;

        const p = document.createElement('p');
        p.textContent = book.author;

        const p2 = document.createElement('p');
        p2.textContent = book.pages;

        const p3 = document.createElement('p');
        p3.textContent = book.id;

        const p4 = document.createElement('p');
        p4.textContent = book.status;

  
     container.appendChild(h3);
     container.appendChild(p);
     container.appendChild(p2);
     container.appendChild(p3);
     container.appendChild(p4) ;   
     container.appendChild(remBtn);
     container.appendChild(toggleBtn);
    }}

    const title = document.querySelector('#title');
    const author = document.querySelector('#author');
    const pages = document.querySelector('#pages');
    const state = document.querySelector('#state'); 
    const btnForm = document.querySelector('#form');
    const card = document.querySelector('.card');

  
    btnForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const titlevalue = title.value;
        const authorvalue = author.value;
        const  pagesvalue = pages.value;
        const statevalue = state.value;
        
        addBookToLibrary(titlevalue, authorvalue, pagesvalue, statevalue);
        btnForm.reset();
  container.innerHTML = '';
    displayBooks();

 })

addBookToLibrary('The Hobbit', 'Tolkien', 300, 'read');
addBookToLibrary('1984', 'Orwell', 328, 'not read');
addBookToLibrary('ME', 'charley kirky', 4545, 'read')

displayBooks();