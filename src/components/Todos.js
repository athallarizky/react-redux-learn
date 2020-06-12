import React, { Component } from "react";
import { connect } from "react-redux";

class Todos extends Component {
  render() {
    // let todos = ["makan", "tidur", "ngoding"];

    return (
      <ul>
        {this.props.todos.map(todo => {
          return <li key={todo.id}> {todo.text} </li>;
        })}
      </ul>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state
  };
};

export default connect(mapStateToProps)(Todos);
