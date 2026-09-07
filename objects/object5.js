function createBook(title, author, year){
         const books = {
            title: title,
            author: author,
            year: year
         }; 
        return books;
 }
 let book = createBook("harry purtter", "alex fernaneds", 2007);
 
 console.log(book.title);
 
