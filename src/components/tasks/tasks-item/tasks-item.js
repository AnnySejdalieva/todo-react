import React, { Component } from 'react'
import RefactorIcon from "../../../svg/refactorIcon";

class TasksItem extends Component {
    state = {
        done: false
    }

    render() {
        const { task } = this.props
        return(
            <li className="list-group-item">
                <div className='d-flex justify-content-between'>
                    <div>
                        <input type='checkbox' value={this.state.done}/>
                        {task.title}
                    </div>
                    <div>
                        <RefactorIcon/>
                    </div>
                </div>
            </li>
        )
    }
}

export default TasksItem