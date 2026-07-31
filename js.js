let myLibrary = [];

class Book {
    constructor (title, author, pages, id, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.id = id;
    this.status = status;
    }

    editState() {
        this.status = this.status === 'read' ? 'not read' : 'read'
    }
}

function addBookToLibrary(title, author, pages, status) {
    const book = new Book(title, author, pages, crypto.randomUUID(), status);
     myLibrary.push(book);
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

        const card = document.createElement('div');
card.classList.add('book-card');
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

  
     card.appendChild(h3);
     card.appendChild(p);
     card.appendChild(p2);
     card.appendChild(p3);
     card.appendChild(p4) ;   
     card.appendChild(remBtn);
     card.appendChild(toggleBtn);

     container.appendChild(card);
    }}

    const title = document.querySelector('#title');
    const titleError = document.querySelector('#title + span.error')
    const author = document.querySelector('#author');
    const authorError = document.querySelector('#author + span.error');
    const pages = document.querySelector('#pages');
    const pagesError = document.querySelector('#pages + span.error');
    const state = document.querySelector('#state'); 
    const stateError = document.querySelector('#state + span.error');
    const btnForm = document.querySelector('#form');


    title.addEventListener('input', () => {
    if(title.validity.valid) {
        titleError.textContent = '';
        return true;
    } else {
        showError();
        return false;
    }
});
    function titleValidation() {
        if(title.validity.valid) {
            titleError.textContent = '';
            return true;
        } else {
            showError();
            return false;
        }
        };

function showError() {
    if(title.validity.valueMissing) {
        titleError.textContent = 'hmm...hmm could you add a title pls';
    }
};

author.addEventListener('input', () =>  {
    if(author.validity.valid) {
        authorError.textContent = '';
        return true;
    } else {
        showAuthorError();
        return false
    }
});

function authorValidation() {
    if(author.validity.valid) {
        authorError.textContent = '';
        return true;
    } else {
        showAuthorError();
        return false
    }
};

function showAuthorError() {
    if(author.validity.valueMissing) {
        authorError.textContent = 'bro come one pls put author name or you didnt open a book in your life';
    }
};


pages.addEventListener('input', () => {
    if(pages.validity.valid) {
        pagesError.textContent = '';
    } else {
        showPagesError();
    }
});

function pagesValidation() {
    if(pages.validity.valid) {
        pagesError.textContent = '';
        return true;
    } else {
        showPagesError();
        return false;
    }
};

function showPagesError() {
    if(pages.validity.valueMissing) {
        pagesError.textContent = 'pls fill in a number plsssss';
        return false;
    }
    else if(pages.validity.badInput) {
        pagesError.textContent = 'could you type a number its called number';
        return false;
    } 
    else if(pages.validity.rangeUnderflow) {
        pagesError.textContent = 'could you type pages from 20 and more';
        return false;
    }
};



state.addEventListener('change', () => {
    if(state.validity.valid) {
        stateError.textContent = '';
    } else {
        showStateError();
    }
});

function stateValidation() {

    if(state.validity.valid) {
        stateError.textContent = '';
        return true;
    } else {
        showStateError();
        return false;
    }
};

function showStateError() {
    if(state.validity.valueMissing) {
        stateError.textContent = 'pls state did you read the book or not i dont think so'
    }
};

const form = document.querySelector("#form");

form.addEventListener("mousemove", (e) => {

    const rect = form.getBoundingClientRect();

    form.style.setProperty(
        "--mouse-x",
        `${e.clientX - rect.left}px`
    );

    form.style.setProperty(
        "--mouse-y",
        `${e.clientY - rect.top}px`
    );

});

btnForm.addEventListener('submit', (event) => {
event.preventDefault();
        const titleValid = titleValidation();
        const authorValid = authorValidation();
        const pagesValid = pagesValidation();
        const stateValid = stateValidation();
        if(!titleValid || !authorValid || !pagesValid || !stateValid) {
            
            return;
        } 
        const titlevalue = title.value;
        const authorvalue = author.value;
        const  pagesvalue = pages.value;
        const statevalue = state.value;

        addBookToLibrary(
            titlevalue,
            authorvalue,
            pagesvalue,
            statevalue);

        btnForm.reset();

  container.innerHTML = '';
  
    displayBooks();
        
 })

addBookToLibrary('The Hobbit', 'Tolkien', 300, 'read');
addBookToLibrary('1984', 'Orwell', 328, 'not read');
addBookToLibrary('ME', 'charley kirky', 4545, 'read')

displayBooks();