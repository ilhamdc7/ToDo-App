import React from "react";
import { Link } from "react-router-dom";

class Task extends React.Component {
  render() {
    return (
      <div className="row" style={{ width: "800px", float: "right" }}>
        {this.props.task.map((task, i) => (
          <div className="container-sm" key={i}>
            <div className="jumbotron">
              <h1>{task.tasktitle}</h1>
              <p>{task.tasktext}</p>

              <Link
                type="button"
                className="btn btn-md btn-warning"
                to={`/edit/${task.id}`}
              >
                Edit
              </Link>
              <Link
                type="button"
                className="btn btn-md btn-danger"
                style={{ float: "right" }}
              >
                Delete
              </Link>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Task;
