const library = (function(){

    let library = [];

    const titleInput = document.querySelector('#input-title');
    const authorInput = document.querySelector('#input-author');
    const checkBox = document.querySelector('#check-box');
    const addButton = document.querySelector('#submit');
    const listOutput = document.querySelector('#list-output');

    addButton.addEventListener('click', addBook);

    function addBook(){
        const info = {
            title: titleInput.value,
            author: authorInput.value, 
            check: checkBox.checked
            }

        library.push(info)

        const newBook = document.createElement('li');
        newBook.innerHTML += `title: ${info.title},
                              author: ${info.author},
                              completed: ${info.check}`;
        listOutput.appendChild(newBook);
        newBook.className = ('book-entry');

        for(const value of Object.keys(library)){
            newBook.id = (value);
        }
    
        const removeButton = document.createElement('button')
        removeButton.className = ('remove-button');
        removeButton.innerHTML = ('X');
        newBook.appendChild(removeButton);

        removeButton.addEventListener('click', removeBook);

        function removeBook(event){
            newBook.remove();
            library.splice(newBook.id, 1)
        }
    }
})();