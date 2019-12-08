import React from 'react'
import { CategoryContainer } from "../containers";
import { TasksContainer } from "../containers";
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