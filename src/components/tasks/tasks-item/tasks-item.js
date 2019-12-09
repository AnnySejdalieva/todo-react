import React, { Component } from 'react'
import RefactorIcon from "../../../svg/refactorIcon";
import './tasks-item.css'

class TasksItem extends Component {
    state = {
        done: false
    }
    componentDidMount() {
        if(typeof this.props.task.done !== 'undefined') {
            this.setState({ done: this.props.task.done})
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.task.done !== prevProps.task.done) {
            this.setState({done: this.props.task.done})
        }
    }

    onClickCheck(){
        let flag = this.state.done;
        this.setState( {
            done:!flag
        })
        this.props.isDone()
    }


    render() {
        const { task } = this.props
        return(
            <li className="tasks-item">
                <div className='d-flex justify-content-between'>
                    <div>
                        <input onClick={e=>this.onClickCheck(e)} onChange={e=>{}} type={'checkbox'} className='tasks-item-checkbox' checked={this.state.done}/>
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