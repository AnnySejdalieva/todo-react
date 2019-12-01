import React from 'react'
import CategoryContainer from "../categories/category-container";
import TasksContainer from "../tasks/tasks-container";
import './app.css'

const App = () => {
    return (
        <div className='app container'>
            <CategoryContainer />
            <TasksContainer />
        </div>
    )
}

export default App