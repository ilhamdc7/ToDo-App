import React from "react";
import Task from "./Task";
import Input from "./input";
import axios from "axios";
import EditTask from "./EditTask";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends React.Component {
  state = {
    task: [],
  };

  async componentDidMount() {
    const response = await axios.get("http://localhost:3002/tasks");
    this.setState({ task: response.data });
  }

  // Add post elave etmek ->

  newTask = async (task) => {
    await axios.post("http://localhost:3002/tasks", task);
    this.setState((state) => ({
      task: state.task.concat([task]),
    }));
  };

  // Edit Post

  editTasks = async (id, updatedTask) => {
    await axios.put(`http://localhost:3002/tasks/${id}`, updatedTask);
  };

  // Delete Post

  render() {
    return (
      <Router>
        <div className="container" style={{ width: "auto" }}>
          <Switch>
            <Route
              path="/"
              exact
              render={() => (
                <div>
                  <div>
                    <div
                      className="container-xxl"
                      style={{
                        backgroundColor: "#2d4059",
                        width: "auto",
                        height: "150px",
                      }}
                    >
                      <h1 style={{ color: "white" }}>My ToDo App</h1>
                    </div>
                    <Input
                      onAddTask={(task) => {
                        this.newTask(task);
                      }}
                    />
                    <Task task={this.state.task}></Task>
                  </div>
                </div>
              )}
            ></Route>

            <Route
              path="/edit/:id"
              render={(props) => (
                <EditTask
                  {...props}
                  onEditTask={(id, task) => {
                    this.editTasks(id, task);
                  }}
                />
              )}
            ></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
