import React, { Component } from 'react';
import { connect } from 'react-redux'

class TodosContainer extends Component {
  render(){
    return(
      <div></div>
    )
  }
}

mapStateToProps = state => {
  
}

export default connect(null, mapStateToProps)(TodosContainer);