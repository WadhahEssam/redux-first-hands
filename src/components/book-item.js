import React from 'react' ;


class BookItem extends React.Component {



    render () {
        return (
            <li className="list-group-item" onClick={()=>{ this.props.handleSelectBook(this.props.book)} }>{this.props.book.title}</li>
        );
    }

}


export default BookItem ;