import React, { Component } from 'react';
import { connect } from 'react-redux';
import Todo from './components/todos';

class TodosContainer extends Component {
  render(){
    return(
      <div></div>
    )
  }
}

mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

export default connect(null, mapStateToProps)(TodosContainer);