import React, { Component } from "react";
import ListActive from "./components/active/list-active";
import ListAll from "./components/all/list-all";
import ListCompleted from "./components/completed/list-completed";
class App extends Component {
  state = {
    todo: [],
    counter: 0,
    filter: "all"
  };
  addChore = event => {
    event.preventDefault();
    let counter = this.state.counter + 1;
    let todo = this.state.todo.slice();
    todo.push({
      chore: this.todoInput.value,
      active: false
    });
    this.setState({
      todo: todo,
      counter: counter
    });
  };
  updateFilter = e => {
    this.setState(
      {
        filter: e.target.value
      },
    );
  };
  changeState = (idx, e) => {
    const {todo} = this.state;
    const updatedTodo = [...todo]
    if(e.target.checked === true) {
      let counter = this.state.counter - 1;
      updatedTodo[idx].active = true
      this.setState({
        todo,
          active: {
            active: updatedTodo
          },
        counter: counter
      })
    }else {
      let counter = this.state.counter + 1;
      updatedTodo[idx].active = false
      this.setState({
        todo,
          active: {
            active: updatedTodo
          },
        counter: counter
      })
    }
  }

  render() {
    return (
      <div className="container center">
        <div>
          <form onSubmit={this.addChore}>
            <input
              type="text"
              placeholder="What needs to be done?"
              ref={input => (this.todoInput = input)}
              required
            />
          </form>
        </div>
        <div>
          {this.state.filter === "all" ? (
            <ListAll todo={this.state.todo} action={this.changeState}/>
          ) : this.state.filter === "completed" ? (
            <ListCompleted todo={this.state.todo} action={this.changeState}/>
          ) : (
            <ListActive todo={this.state.todo} action={this.changeState}/>
          )}
        </div>
        <div>
          {this.state.todo.length > 0 ? (
            <p>{this.state.counter} Items left</p>
          ) : (
            <p>You currently dont have any active chores</p>
          )}
        </div>
        <div>
          <button value="all" onClick={this.updateFilter}>
            All
          </button>
          <button value="completed" onClick={this.updateFilter}>
            Completed
          </button>
          <button value="active" onClick={this.updateFilter}>
            Active
          </button>
        </div>
      </div>
    );
  }
}

export default App;
