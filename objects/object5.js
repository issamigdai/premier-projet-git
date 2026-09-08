const prompt = require('prompt-sync')();
function createBook(title, author, year){
         const books = {
            title: title,
            author: author,
            year: year
         }; 
        return books;
 }
 let a = prompt('enter a book name: ');
 let b = prompt('enter the books author: ');
 let c = Number(prompt('enter the book year of publish: '));

 let book = createBook(a, b, c);
 
 console.log(book.title);
 console.log(book.author);
 console.log(book.year);
