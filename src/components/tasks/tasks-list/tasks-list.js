import React, { Component } from 'react'
import {connect} from "react-redux";
import TasksItem from "../tasks-item/tasks-item";

class TasksList extends Component{
    render() {
        const { tasks } = this.props
        return(
            <ul className="list-group list-group-flush">
                {
                    tasks.map((task)=>{
                        return (
                                <TasksItem task={task}/>
                                )
                    })
                }
            </ul>
        )
    }
}

const mapStateToProps = ({tasks}) => {
    return { tasks }
}

export default connect(mapStateToProps)(TasksList)