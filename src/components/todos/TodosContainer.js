import React, { Component } from 'react';
import { connect } from 'react-redux'

class TodosContainer extends Component {
  render(){
    return(
      <div></div>
    )
  }
}

mapStateToProps = () => {
  
}

export default connect(null, mapStateToProps)(TodosContainer);