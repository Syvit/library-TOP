const library = (function(){

    let library = [];

    const titleInput = document.querySelector('#input-title');
    const authorInput = document.querySelector('#input-author');
    const checkBox = document.querySelector('#check-box');
    const addButton = document.querySelector('#submit');
    const listOutput = document.querySelector('#list-output');
    const openForm = document.querySelector('.open-form')
    const inputForm = document.querySelector('.input-form')

    addButton.addEventListener('click', addBook);

    openForm.addEventListener('click', formDisplay);

    function addBook(){
        const info = {
            title: titleInput.value,
            author: authorInput.value, 
            check: checkBox.checked
            }


            if(info.title === ""){
                alert('Title cannot be blank')
                return;
            }

            else if(info.author === ""){
                alert('Author cannot be blank')
                return;
            }

            else if(library.length >= 10){
                alert('did not bother making the page responsive, so any more than 10 entries will break the layout')
                return
            }
            
            else{
                library.push(info)
                    
                const newBook = document.createElement('li');
                const newBookTitle = document.createElement('h1');
                const newBookAuthor = document.createElement('h2');
                const newBookCheck = document.createElement('h2');
                    
                newBook.appendChild(newBookTitle);
                newBook.appendChild(newBookAuthor);
                newBook.appendChild(newBookCheck);
                    
                function checked(){
                    if (info.check == true){
                        return 'Complete'
                    }
                    else return 'Incomplete'
                }

                newBookTitle.innerHTML += `Title: ${info.title}`
                newBookAuthor.innerHTML += `Author: ${info.author}`
                newBookCheck.innerHTML += `Status: ${checked()}`
            
                listOutput.appendChild(newBook);
                newBook.className = ('book-entry');
            
                for(const value of Object.keys(library)){
                    newBook.id = (value);
                }
            
                const removeButton = document.createElement('button')
                removeButton.className = ('remove-button');
                removeButton.innerHTML = ('REMOVE');
                newBook.appendChild(removeButton);
            
                removeButton.addEventListener('click', removeBook);
            
                function removeBook(){
                    newBook.remove();
                    library.splice(newBook.id, 1)
                }
                inputForm.style.visibility = ('hidden')
                console.log(library)
            }       
        }
    function formDisplay(){
        inputForm.style.visibility = ('visible')
    }
})();