import React, { Component } from 'react'
import {connect} from "react-redux";
// import TasksItem from "../tasks-item";

class TasksList extends Component{
    state = {
        items:[]
    }
    // componentDidMount() {
    //     if(this.props.items) {
    //         this.setState({items: this.props.items})
    //     }
    // }
    //
    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     if(this.props.items.length !== prevProps.items.length) {
    //         this.setState({items: this.props.items})
    //     }
    // }
    //


    isDone = (id) => {
        let tasks = this.props.tasks[this.props.currentCategory]
        tasks[id].done = !tasks[id].done
    }

    render() {
        // const { tasks, currentCategory } = this.props
        return(
            <ul className="list-group list-group-flush">
                {/*{*/}
                {/*    tasks[currentCategory].map((task, key)=>{*/}
                {/*        return (*/}
                {/*                <TasksItem isDone={()=>{this.isDone(key)}} task={task} key={key}/>*/}
                {/*                )*/}
                {/*    })*/}
                {/*}*/}
            </ul>
        )
    }
}

const mapStateToProps = ({ tasks, currentCategory }) => {
    return { tasks, currentCategory }
}

export default connect(mapStateToProps)(TasksList)