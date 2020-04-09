import React, { Component } from "react";


class TodoInput extends Component {
  render() {
    const { item, handleChange, handleSubmit } = this.props;
    return (
      <form onSubmit= { handleSubmit }>
        <div className="form-group">
          <input 
          type="text" 
          className="form-control"
          value = { item }
          onChange = { handleChange }
           />
          <button 
          className="btn btn-block btn-primary my-3"
          >
            Add Items
          </button>
          
        </div>
      </form>
    );
  }
}

export default TodoInput;
