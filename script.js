const inputAuthor = document.querySelector('#input-author');
const inputPages = document.querySelector('#input-pages');
const addBook = document.querySelector('#submit');
const listOutput = document.querySelector('#list-output');
const openForm = document.querySelector('.open-form')
const inputForm = document.querySelector('.input-form')
const titleInput = document.querySelector('#input-title');
const blurContainer = document.querySelector('.blur')

let library = [];

class Book {
    constructor(title, author, pages){
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
}


openForm.addEventListener('click', formDisplay);

addBook.addEventListener('click', displayHandler)

function formDisplay(){    
    inputForm.style.visibility = ('visible')
    const blurBG = document.createElement('div')
    blurBG.id = ('blur')
    blurContainer.appendChild(blurBG)
}

function displayHandler(){
    const book = new Book(titleInput.value, inputAuthor.value, inputPages.value)
    library.push(book)
    
    if(book.title === ""){
        alert('Title cannot be blank')
        return;
    }

    else if(book.author === ""){
        alert('Author cannot be blank')
        return;
    }

    else if(book.pages <= 0){
        alert('Needs at least 0 pages')
        return;
    }
    
    else{

        const newBook = document.createElement('li');
        newBook.classList.add('book-entry');
        const newBookTitle = document.createElement('h1');
        const newBookAuthor = document.createElement('h2');
        const newBookPages = document.createElement('h2');
                    
        newBook.appendChild(newBookTitle);
        newBook.appendChild(newBookAuthor);
        newBook.appendChild(newBookPages);
                    
        newBookTitle.innerHTML += `Title: ${book.title}`
        newBookAuthor.innerHTML += `Author: ${book.author}`
        newBookPages.innerHTML += `Pages: ${book.pages}`
        listOutput.appendChild(newBook)

        const removeButton = document.createElement('button')
        removeButton.className = ('remove-button');
        removeButton.innerHTML = ('REMOVE');
        newBook.appendChild(removeButton);
            
        removeButton.addEventListener('click', removeBook);
            
        function removeBook(){
            newBook.remove();
            library.splice(newBook.id, 1)
        }

        const removeBlur = document.querySelector('#blur')
        removeBlur.remove();

    inputForm.style.visibility = ('hidden')
}

}