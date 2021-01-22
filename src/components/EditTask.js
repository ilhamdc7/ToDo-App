import axios from "axios";
import React from "react";

class editTask extends React.Component {
  state = {
    tasktitle: "",
    tasktext: "",
  };

  async componentDidMount() {
    const id = this.props.match.params.id;

    const response = await axios.get(`http://localhost:3002/tasks/${id}`);

    const tasks = response.data;
    this.setState({
      tasktitle: tasks.tasktitle,
      tasktext: tasks.tasktext,
    });
  }

  onInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();

    const { tasktitle, tasktext } = this.state;

    const id = this.props.match.params.id;

    const updatedTask = {
      tasktitle: tasktitle,
      tasktext: tasktext,
    };

    this.props.onEditTask(id, updatedTask);
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="container">
        <form className="mt-3" onSubmit={this.handleFormSubmit}>
          <div className="form-row">
            <div className="form-group col-md-12">
              <label htmlFor="inputTitle">Task Title</label>
              <input
                type="text"
                className="form-control"
                name="tasktitle"
                value={this.state.tasktitle}
                onChange={this.onInputChange}
              />
            </div>
          </div>
          <div className="form-row"></div>
          <div className="form-row">
            <div className="form-group col-md-12">
              <label htmlFor="task">Task</label>
              <textarea
                className="form-control"
                name="tasktext"
                rows="5"
                value={this.state.tasktext}
                onChange={this.onInputChange}
              ></textarea>
            </div>
          </div>
          <input
            type="submit"
            className="btn btn-warning btn-block"
            value="Edit Task"
          />
        </form>
      </div>
    );
  }
}

export default editTask;
