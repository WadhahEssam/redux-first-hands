import React from 'react' ;
import BookItem from './book-item.js' ;
import {connect} from 'react-redux' ;
import {bindActionCreators} from 'redux' ;
import {handleSelectBook} from '../actions/index.js' ;

class BookList extends React.Component {



    render() {

        const bookItems = this.props.books.map ( (book) => { return <BookItem key={book.id} book={book} handleSelectBook={this.props.handleSelectBook} /> } ) ;

        return (
            <ul className="list-group col-md-4">
                {bookItems}
            </ul>
        );

    }

}

function mapStateToProps ( state ) {
    return {
        books : state.books
    };
}

// register the function to go throw all the reducers when it is called
function mapDispatchToProps ( dispatch ) {
    return bindActionCreators ( { handleSelectBook : handleSelectBook } , dispatch ) ;
}

export default connect ( mapStateToProps , mapDispatchToProps ) ( BookList )  ;












































