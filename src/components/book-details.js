import React from 'react' ;
import { connect } from 'react-redux' ;
// import { bindActionCreators } from 'redus' ;



class BookDetails extends React.Component {


    render () {

        console.log('rerender details') ;

        if (!this.props.activeBook ) {
            return <h2>No Book is selected </h2>
        }

        return (
            <div>
                <h2> {this.props.activeBook.id} ) Book Title : {this.props.activeBook.title}</h2>
            </div>
        );
    }
}

function mapStateToProps ( state ) {
    return {
        activeBook : state.activeBook
    }
}

// function mapDispatchToProps ( dispatch ) {
//     return bindActionCreators()
// }

export default connect ( mapStateToProps ) ( BookDetails )  ;
