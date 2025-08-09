const myLibrary=[]

function Book(title, author, pages, read){
    this.title=title;
    this.author=author;
    this.pages=Number(pages);
    this.read=Boolean(read);
    this.id=crypto.randomUUID();
}

function addBookToLibrary(title, author, pages, read){
    const newBook=new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, true);
addBookToLibrary("1984", "George Orwell", 328, false);
console.log(myLibrary);