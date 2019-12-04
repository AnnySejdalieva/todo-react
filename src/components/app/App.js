import React from 'react'
import CategoryContainer from "../containers/category-container";
import TasksContainer from "../containers/tasks-container";
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