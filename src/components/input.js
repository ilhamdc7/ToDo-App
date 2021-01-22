import React from 'react';
import serialize from 'form-serialize'

class Input extends React.Component{



    handleFormSubmit = (event) => {
        event.preventDefault();
        const newTask = serialize(event.target, { hash: true });
        this.props.onAddTask(newTask);
    }

    render() {
        return(
            <div className="container" style={{width:'300px', float:'left'}}>
            <form className="mt-3" onSubmit = {this.handleFormSubmit}>
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label htmlFor="inputTitle">Task Title</label>
                        <input  type="text" 
                                className="form-control" 
                                name="tasktitle"/>
                    </div>
                   
                </div>
                <div className="form-row">
                   
                </div>
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label htmlFor="task">Task</label>
                        <textarea 
                                className="form-control" 
                                name="tasktext" rows="5"></textarea>
                    </div>
                </div>
                <input type="submit" className="btn btn-danger btn-block" value="Add Task" />
            </form>
        </div>

        )
    }
}

export default Input