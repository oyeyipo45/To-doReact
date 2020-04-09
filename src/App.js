import React, { Component } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "bootstrap/dist/css/bootstrap.min.css";
import { v4 as uuidv4 } from "uuid";

class App extends Component {

 
    state = {
      items: [],
      item: "",
      id: uuidv4(),
      editItem: false
    };
  

  handleChange = e => {
    this.setState({
      item: e.target.value
    });
  };
  
  handleSubmit = e => {
    e.preventDefault();
    const newItem = {
      title: this.state.item,
      id: uuidv4()
    };
    const updatedItem = [...this.state.items, newItem];
    this.setState({
      items: updatedItem,
      item: ""
    });
  };
  
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto my-5">
            <h1 className="text-center my-4"> Todo App </h1>
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
            />
            <TodoList items = {this.state.items} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
