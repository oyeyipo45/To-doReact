import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoList extends Component {

  render(){
    const {items, clearList, deleteItem} = this.props
    return (
      <div> 
        <ul className="list-group my-5">

        {
        items.map(item => {
          return <TodoItem 
          key={item.id} 
          title={item.title}
          deleteItem = {() => deleteItem(item.id)}
          />
        })
      }
        </ul>
        <button 
        className="btn btn-block btn-danger primary my-4"
        onClick={clearList}>
          Clear List
        </button>
       
        </div>
    )
  }

}


export default TodoList;