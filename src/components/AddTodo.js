import React, { Component } from "react";

export class AddTodo extends Component {
  state = { title: "" };

  handleChange = (e) => this.setState({ title: e.target.value });

  submitTodo = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  };

  render() {
    return (
      <div>
        <form style={{ display: "flex" }}>
          <input
            style={{ flex: "10" }}
            type="text"
            placeholder="Add Todo ..."
            value={this.state.title}
            onChange={this.handleChange}
          />
          <input
            style={{ flex: "1" }}
            type="submit"
            onClick={this.submitTodo}
          />
        </form>
      </div>
    );
  }
}

export default AddTodo;
