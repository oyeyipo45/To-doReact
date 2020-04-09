import React, { Component } from "react";

class TodoList extends Component {
  render() {
    const {title} = this.props;
    return (
      <div>
        <li className="list-group-item">
          <div className="d-flex justify-content-between">
            <h5> {title}</h5>
            <div>
              <span className="mx-3">
                <i className="fas fa-pen"> </i>
              </span>
              <span>
                <i className="fas fa-trash "> </i>
              </span>
            </div>
          </div>
        </li>
        <button className="btn btn-block btn-danger primary my-4">Clear</button>
      </div>
    );
  }
}

export default TodoList;
