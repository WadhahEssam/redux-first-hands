export default function ( state = null , action ) {

    switch (action.type ) {
        case 'SELECT_BOOK_ACTION' :
            return action.payload ;
        default :
            return state ;
    }
}