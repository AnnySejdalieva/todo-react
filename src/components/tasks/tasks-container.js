import React from 'react'
import TasksHeader from "./tasks-header";
import TasksList from "./tasks-list";

const TasksContainer = () => {

    return(
        <div>
            <div className='category-container'>
                <div className="card bg-light mb-3">
                    <div className="card-header">
                        <TasksHeader/>
                    </div>
                    <div className="card-body">
                        <TasksList/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TasksContainer