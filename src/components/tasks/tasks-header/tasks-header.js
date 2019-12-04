import React from 'react'
import CloseIcon from "../../../svg/closeIcon";
import './tasks-header.css'

const TasksHeader = () => {
    return (
        <div className='TasksHeader'>
            <form className="form-inline">
                <div className="form-check mb-2 mr-sm-2">
                    <input className="form-check-input" type="checkbox" id="inlineFormCheck"/>
                    <label className="form-check-label" htmlFor="inlineFormCheck">
                        Show done
                    </label>
                </div>
                <div className='form-control mb-2 mr-sm-2'>
                    <input type="text" className="TasksHeaderSearch"
                           placeholder="Search"/>
                    <CloseIcon className='TasksHeaderSearchIcon'/>
                </div>

                <input type="text" className="form-control mb-2 mr-sm-2"
                       placeholder="Text input with button"/>
               <button type="submit" className="btn btn-primary mb-2">Add</button>
            </form>
        </div>
           )
}

export default TasksHeader