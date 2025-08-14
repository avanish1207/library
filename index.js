const myLibrary=[]

function Book(title, author, pages, read){
    this.title=title;
    this.author=author;
    this.pages=Number(pages);
    this.read=Boolean(read);
    this.id=crypto.randomUUID();
}

function addBookToLibrary(title, author, pages, read){
    if (!validateBookInput()) {
        // Validation failed - browser will show error messages
        return false;
    }
    const newBook=new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

// addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, true);
// addBookToLibrary("1984", "George Orwell", 328, false);
// console.log(myLibrary);

function displayBooks(){
    const tableBody=document.getElementById("books-table-body");
    tableBody.innerHTML=''
    
    myLibrary.forEach(book =>{
        const row=document.createElement('tr');
        row.setAttribute('data-book-id', book.id);

        row.innerHTML=`
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.pages}</td>
        <td>${book.read ? 'Yes' : 'No'}</td>
        <td>
            <button class="remove-btn">Remove</button>
            <button class="toggle-read">Mark as Read</button>
        </td>
        `;
        tableBody.appendChild(row);
    });
}

const dialog=document.querySelector("#book-dialog");
const showButton=document.querySelector(".new-book");
const bookForm=document.querySelector("#book-form");
const cancelBtn=document.querySelector("#cancel-btn");

showButton.addEventListener("click", () => {
    dialog.showModal();
});

cancelBtn.addEventListener("click", () => {
    dialog.close();
});

bookForm.addEventListener("submit", (e)=> {
    e.preventDefault();
    const title=document.getElementById('title').value;
    const author=document.getElementById('author').value;
    const pages=document.getElementById('pages').value;
    const read=document.getElementById('read').checked;
    addBookToLibrary(title, author, pages, read);
    displayBooks();
    bookForm.reset();
    dialog.close();
})

document.addEventListener("click", (e)=>{
    if(e.target.classList.contains('remove-btn')){
        const bookId=e.target.closest('tr').getAttribute('data-book-id');
        const bookIndex=myLibrary.findIndex(book => book.id === bookId);
        if(bookIndex!==-1){
            myLibrary.splice(bookIndex, 1);
        }
        displayBooks();
    }
    if(e.target.classList.contains('toggle-read')){
        const bookId=e.target.closest('tr').getAttribute('data-book-id');
        const book=myLibrary.find(book=> book.id===bookId);

        if(book){
            book.read=!book.read;
        }
        displayBooks();
    }
});

function validateBookInput(){
    const titleInput = document.getElementById('title');
    const authorInput = document.getElementById('author');
    const pagesInput = document.getElementById('pages');
    let isValid = true;
    if(!titleInput.checkValidity()){
        titleInput.setCustomValidity('Please enter a book title');
        isValid=false;
    } else{
        titleInput.setCustomValidity('');
    }
    if(!authorInput.checkValidity()){
        authorInput.setCustomValidity('Please enter a book title');
        isValid=false;
    } else{
        authorInput.setCustomValidity('');
    }
    if(!pagesInput.checkValidity()){
        if(pagesInput.validity.valueMissing()){
            pagesInput.setCustomValidity('Please enter no. of pages');
        } else if(pagesInput.validity.rangeUnderflow()){
            pagesInput.setCustomValidity('Minimum no. of pages should be 1');
        } 
        return isValid=false;
    } else{
        pagesInput.setCustomValidity('');
    }
    return isValid;
}