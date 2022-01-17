import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import Header from "./layouts/Header";
import About from "./pages/About";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "go to home",
        completed: false,
      },
      {
        id: 2,
        title: "go to Gym",
        completed: true,
      },
      {
        id: 3,
        title: "go to Pool",
        completed: false,
      },
    ],
  };

  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  delTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    });
  };

  addTodo = (title) => {
    console.log(title);
    const newTodo = {
      id: 4,
      title: title,
      completed: false,
    };
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Routes>
              <Route
                path="/"
                // element={(props) => (
                //   <React.Fragment>
                //     <AddTodo addTodo={this.addTodo} />
                //     <Todos
                //       todos={this.state.todos}
                //       markComplete={this.markComplete}
                //       delTodo={this.delTodo}
                //     />
                //   </React.Fragment>
                // )}
                element={
                  <React.Fragment>
                    {<AddTodo addTodo={this.addTodo} />}
                    {<Todos
                        todos={this.state.todos}
                        markComplete={this.markComplete}
                        delTodo={this.delTodo}
                      />}
                  </React.Fragment>
                }
              />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
