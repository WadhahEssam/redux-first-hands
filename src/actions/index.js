export function handleSelectBook (book) {
    return {
        type : 'SELECT_BOOK_ACTION' ,
        payload : book
    }
}