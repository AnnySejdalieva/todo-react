import React, { Component } from 'react'
import {connect} from "react-redux";
import TasksItem from "../tasks-item";

class TasksList extends Component{
    state = {
        items:[]
    }
    componentDidMount() {
        if(this.props.tasks) {
            this.updateList()
        }
        if(this.props.showDone) {
            this.showOnlyDone()
        }
    }
    updateList = () => {
        let list = this.props.tasks
            .filter(el=>el.category === this.props.currentCategory)
        this.setState({items: list})
    }
    showOnlyDone = () => {
        let itemIsDone = this.props.tasks
            .filter((el)=>el.done && el.category === this.props.currentCategory)
        this.setState({items: itemIsDone})
        console.log(this.props.showDone, itemIsDone, this.state)
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.tasks.length !== prevProps.tasks.length) {
            this.updateList()
        }
        if(this.props.showDone !== prevProps.showDone ||
            this.props.currentCategory !== prevProps.currentCategory) {
            if(this.props.showDone) {
                this.showOnlyDone()
            } else {
                this.updateList()
            }
        }
    }

    isDone = (id) => {
        let tasks = this.props.tasks.filter(el=>el.category === this.props.currentCategory)
        tasks[id].done = !tasks[id].done
    }

    render() {
        const { tasks, currentCategory } = this.props
        console.log(tasks.filter(el=>el.category === currentCategory), currentCategory)
        return(
            <ul className="list-group list-group-flush">
                {
                    this.state.items.map((task, key)=>{
                        return (
                                <TasksItem isDone={()=>{this.isDone(key)}} task={task} key={key}/>
                                )
                    })
                }
            </ul>
        )
    }
}

const mapStateToProps = ({ tasks, currentCategory, showDone }) => {
    return { tasks, currentCategory, showDone }
}

export default connect(mapStateToProps)(TasksList)