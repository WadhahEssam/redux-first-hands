import React from 'react' ;


class BookItem extends React.Component {



    render () {
        return (
            <li className="list-group-item" >{this.props.book.title}</li>
        );
    }

}


export default BookItem ;