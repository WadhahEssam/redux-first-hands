import React from 'react' ;
import BookItem from './book-item' ;
import {connect} from 'react-redux' ;
import { handleSelectBook } from '../actions/index.js' ;
import { bindActionCreators } from 'redux' ;

class BookList extends React.Component {


    render () {
        const bookItems = this.props.books.map ( (book)=>{ return <BookItem key={book.id} book={book} handleSelectBook={handleSelectBook} /> } ) ;

        return (

            <ul className="list-group col-sm-4">
                {bookItems}
            </ul>

        ) ;

    }

}

function mapStateToProps ( state ) {
    return {
        books:state.books
    };
}

function mapDispatchToProps ( dispatch ) {
    return bindActionCreators( { handleSelectBook:handleSelectBook } , dispatch ) ;
}


export default connect ( mapStateToProps , mapDispatchToProps ) (BookList) ;