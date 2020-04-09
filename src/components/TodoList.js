import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoList extends Component {

  render(){
    const {items} = this.props
    return (
        <ul className="list-group my-5">

        {
        items.map(item => {
          return <TodoItem key={item.id} title={item.title} />
        })
      }
        </ul> 
    )
  }

}


export default TodoList;