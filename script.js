//FUNCTION TO GET A BOOK FROM THE LIBRARY

let library = [],

bookId = 100;

function addBook (author , title){
    const newBook = {
        author : author,
        title : title,
        bookId : bookId++,
    }
    library.push(newBook);
    console.log(`${title} by ${author} has been added to the library!`)
}

addBook('jerry', 'live to die young')
addBook('johnson', 'test of the strongest')
console.log(library)

//FUNCTION TO FIND A SPECIFIC THE BOOKS IN THE LIBRARY
const getABook = (id) => library.find((books) => books.bookId === id)
console.log(getABook(101))

//FUNCTION TO RETURN ALL THE BOOKS IN THE LIBRARY
const getAllBooks = () => console.log(library)
getAllBooks()