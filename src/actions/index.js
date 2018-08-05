export function handleSelectBook (book) {
    console.log(book) ;
    return {
        type : 'SELECT_BOOK_ACTION' ,
        payload : book
    }
}