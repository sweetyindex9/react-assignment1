import Overview from "./components/Overview";
import React, { Component } from "react";
import uniqid from "uniqid";

class App extends Component {
  constructor() {
    super();

    this.state = {
      task: {
        text: '',
        id: uniqid()
      },
      tasks: [],
    };
    
    this.deleteTask = this.deleteTask.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      task: {
        text: e.target.value,
        id: this.state.task.id,
      },
    });
  };

  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: {
        text: '', 
        id: uniqid()
      },
    });
  };

  deleteTask = (key) => {
    const currentTaskArray = [...this.state.task];
    const taskAfterDeleted = currentTaskArray.filter(
      deletedTask => deletedTask.key !== key
    );
    this.setState({
      task: taskAfterDeleted
    });
  } 
  
  

  render() {
    const { task,tasks } = this.state;
    

    return (
      <div>
        <form onSubmit={this.onSubmitTask}>
          <label htmlFor = "taskInput">Enter task</label>
          <input
            onChange = {this.handleChange}
            value = {task.text}
           type = "text"
            id = "taskInput"
           />
           <button type = "submit">
            Add Task
          </button> 
        </form>
        <Overview tasks = {tasks} />
      </div>
    );
  }
}

export default App;
