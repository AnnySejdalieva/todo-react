import React from 'react'
import TasksHeader from "../tasks/tasks-header";
import TasksList from "../tasks/tasks-list";

const TasksContainer = () => {

    return(
        <div className='tasks-container'>
            <div className="card bg-light mb-3">
                <div className="card-header">
                    <TasksHeader/>
                </div>
                <TasksList/>
            </div>
        </div>
    )
}

export default TasksContainer