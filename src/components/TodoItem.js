import React, { Component } from "react";

class TodoItem extends Component {

  
  render() {
    const { title, deleteItem } = this.props;
    return (
      
      
        <li className="list-group-item">
          <div className="d-flex justify-content-between">
            <h5> {title}</h5>
              <span className="mx-3">
                <i className="fas fa-pen"> </i>
              </span>
              <span  onClick = {deleteItem}>
                <i 
                className="fas fa-trash"
                 > </i>
              </span>
          </div>
        </li>
    );
  }
}

export default TodoItem;
